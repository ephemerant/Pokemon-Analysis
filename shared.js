export function arrayElementsMatch(A, B) {
  return (
    A.length === B.length && A.reduce((acc, a) => acc && B.includes(a), true)
  );
}

export function multiply(dictA, dictB) {
  return Object.keys(dictA).reduce((acc, key) => {
    const valueA = dictA[key] === undefined ? 1 : dictA[key];
    const valueB = dictB[key] === undefined ? 1 : dictB[key];

    acc[key] = valueA * valueB;
    return acc;
  }, {});
}

export function max(dictA, dictB) {
  return Object.keys(dictA).reduce((acc, key) => {
    const valueA = dictA[key] === undefined ? 1 : dictA[key];
    const valueB = dictB[key] === undefined ? 1 : dictB[key];

    acc[key] = Math.max(valueA, valueB);
    return acc;
  }, {});
}

export function getTypeScoreEntry(types, ability) {
  let typeMultipliers = null;

  types.forEach(
    (type) =>
      (typeMultipliers = typeMultipliers
        ? multiply(typeMultipliers, getTypeWeaknesses(type))
        : getTypeWeaknesses(type))
  );

  let abilityImmunities = { ability };

  if (ability !== null) {
    if (ability !== undefined)
      abilityImmunities.typeMultipliers = ABILITY_IMMUNITIES[ability];
    else abilityImmunities = getAbilityImmunities(types);

    if (abilityImmunities.ability && abilityImmunities.typeMultipliers)
      typeMultipliers = multiply(
        typeMultipliers,
        abilityImmunities.typeMultipliers
      );
  }

  const score = Object.values(typeMultipliers).reduce((a, b) => a + b);

  return {
    types,
    typeMultipliers,
    score,
    ability: abilityImmunities.ability,
  };
}

export function getDefensiveScoreEntry(
  types,
  defAbility,
  offAbility,
  applyOffAbilityAtEnd
) {
  let typeMultipliers = null;

  types.forEach(
    (type) =>
      (typeMultipliers = typeMultipliers
        ? multiply(
            typeMultipliers,
            getTypeWeaknesses(type, applyOffAbilityAtEnd ? null : offAbility)
          )
        : getTypeWeaknesses(type, applyOffAbilityAtEnd ? null : offAbility))
  );

  if (applyOffAbilityAtEnd) 
    typeMultipliers = offAbility(typeMultipliers);

  if (defAbility?.defensiveness) {
    let defensiveness = defAbility.defensiveness;

    if (defensiveness["super-effective"]) {
      defensiveness = Object.entries(typeMultipliers).reduce(
        (acc, [key, value]) => {
          if (value > 1) acc[key] = defensiveness["super-effective"];

          return acc;
        },
        {}
      );
    }

    typeMultipliers = multiply(typeMultipliers, defensiveness);
  }

  const score = Object.values(typeMultipliers).reduce((a, b) => a + b);

  return {
    types,
    typeMultipliers,
    score,
    ability: defAbility?.name,
    recalculate(offAbility) {
      return offAbility?.applies && types.some((type) => offAbility.applies(type))
        ? getDefensiveScoreEntry(
            types,
            defAbility,
            offAbility.calculate,
            offAbility.applyAtEnd
          )
        : this;
    },
  };
}

export function getOffensiveScoreEntry(
  types,
  possiblePokemonDefenses,
  offAbility
) {
  let pokemonMultipliers = null;

  if (offAbility?.addOffensiveType)
    types = offAbility.addOffensiveType(types);

  types.forEach(
    (type) =>
      (pokemonMultipliers = pokemonMultipliers
        ? max(
            pokemonMultipliers,
            getPokemonCoverage(type, possiblePokemonDefenses, offAbility)
          )
        : getPokemonCoverage(type, possiblePokemonDefenses, offAbility))
  );

  const score = getOffensiveScore(pokemonMultipliers);

  return {
    types,
    typeMultipliers: pokemonMultipliers,
    score,
  };
}

export function getOffensiveScore(typeMultipliers, full = false) {
  const coverages = {
    0: 0,
    0.25: 0,
    0.5: 0,
    1: 0,
    1.5: 0,
    2: 0,
    3: 0,
    4: 0,
  };

  Object.values(typeMultipliers).forEach((x) => coverages[x]++);

  const totalPokemon = Object.keys(typeMultipliers).length;
  Object.keys(coverages).forEach((key) => (coverages[key] /= totalPokemon));

  const score =
    (coverages[0] * -4 +
      coverages[0.25] * -2 +
      coverages[0.5] * -1 +
      coverages[1] * 1 +
      coverages[1.5] * 1.5 +
      coverages[2] * 2 +
      coverages[3] * 3 +
      coverages[4] * 4) *
    20;

  if (full) return { score, coverages };

  return score;
}

export function getTypeWeaknesses(defensiveType, offAbility) {
  let res = TYPES.reduce((acc, attackType) => {
    acc[attackType] =
      WEAKNESSES[defensiveType][attackType] === undefined
        ? 1
        : WEAKNESSES[defensiveType][attackType];
    return acc;
  }, {});

  if (offAbility) res = offAbility(res);

  return res;
}

export function getPokemonCoverage(
  attackType,
  possiblePokemonDefenses,
  offAbility
) {
  return Object.entries(possiblePokemonDefenses).reduce(
    (acc, [name, defensiveness]) => {
      acc[name] =
        defensiveness.recalculate(offAbility).typeMultipliers[attackType];
      return acc;
    },
    {}
  );
}

export const WEAKNESSES = {
  stellar: {},
  normal: {
    fighting: 2,
    ghost: 0,
  },
  fire: {
    fire: 0.5,
    water: 2,
    grass: 0.5,
    ice: 0.5,
    ground: 2,
    bug: 0.5,
    rock: 2,
    steel: 0.5,
    fairy: 0.5,
  },
  water: {
    fire: 0.5,
    water: 0.5,
    electric: 2,
    grass: 2,
    ice: 0.5,
    steel: 0.5,
  },
  electric: {
    electric: 0.5,
    ground: 2,
    flying: 0.5,
    steel: 0.5,
  },
  grass: {
    fire: 2,
    water: 0.5,
    electric: 0.5,
    grass: 0.5,
    ice: 2,
    poison: 2,
    ground: 0.5,
    flying: 2,
    bug: 2,
  },
  ice: {
    fire: 2,
    ice: 0.5,
    fighting: 2,
    rock: 2,
    steel: 2,
  },
  fighting: {
    flying: 2,
    psychic: 2,
    bug: 0.5,
    rock: 0.5,
    dark: 0.5,
    fairy: 2,
  },
  poison: {
    grass: 0.5,
    fighting: 0.5,
    poison: 0.5,
    ground: 2,
    psychic: 2,
    bug: 0.5,
    fairy: 0.5,
  },
  ground: {
    water: 2,
    electric: 0,
    grass: 2,
    ice: 2,
    poison: 0.5,
    rock: 0.5,
  },
  flying: {
    electric: 2,
    grass: 0.5,
    ice: 2,
    fighting: 0.5,
    ground: 0,
    bug: 0.5,
    rock: 2,
  },
  psychic: {
    fighting: 0.5,
    psychic: 0.5,
    bug: 2,
    ghost: 2,
    dark: 2,
  },
  bug: {
    fire: 2,
    grass: 0.5,
    fighting: 0.5,
    ground: 0.5,
    flying: 2,
    rock: 2,
  },
  rock: {
    normal: 0.5,
    fire: 0.5,
    water: 2,
    grass: 2,
    fighting: 2,
    poison: 0.5,
    ground: 2,
    flying: 0.5,
    steel: 2,
  },
  ghost: {
    normal: 0,
    fighting: 0,
    poison: 0.5,
    bug: 0.5,
    ghost: 2,
    dark: 2,
  },
  dragon: {
    fire: 0.5,
    water: 0.5,
    electric: 0.5,
    grass: 0.5,
    ice: 2,
    dragon: 2,
    fairy: 2,
  },
  dark: {
    fighting: 2,
    psychic: 0,
    bug: 2,
    ghost: 0.5,
    dark: 0.5,
    fairy: 2,
  },
  steel: {
    normal: 0.5,
    fire: 2,
    grass: 0.5,
    ice: 0.5,
    fighting: 2,
    poison: 0,
    ground: 2,
    flying: 0.5,
    psychic: 0.5,
    bug: 0.5,
    rock: 0.5,
    dragon: 0.5,
    steel: 0.5,
    fairy: 0.5,
  },
  fairy: {
    fighting: 0.5,
    poison: 2,
    bug: 0.5,
    dragon: 0,
    dark: 0.5,
    steel: 2,
  },
};

export const TYPES = Object.keys(WEAKNESSES);

export const UNUSED_TYPES = [
  ["normal", "ice"],
  ["normal", "bug"],
  ["normal", "rock"],
  ["normal", "ghost"],
  ["normal", "steel"],
  ["fire", "fairy"],
  ["ice", "poison"],
  ["ground", "fairy"],
  ["bug", "dragon"],
  ["bug", "dark"],
  ["rock", "ghost"],
  // Not in Scarlet/Violet
  ["poison", "fairy"],
  ["fire", "steel"],
  ["flying", "fairy"],
  ["dragon", "steel"],
  ["ground", "flying"],
];

export const ABILITY_IMMUNITIES = {
  levitate: { ground: 0 },
  "volt-absorb": { electric: 0 },
  "water-absorb": { water: 0 },
  "flash-fire": { fire: 0 },
  "thick-fat": { fire: 0.5, ice: 0.5 },
  "storm-drain": { water: 0 },
  "well-baked-body": { fire: 0 },
  "purifying-salt": { ghost: 0.5 },
  "earth-eater": { ground: 0 },
  "sap-sipper": { grass: 0 },
};

export const TYPE_SCORES = (function () {
  const scores = [];

  for (
    let primaryTypeIndex = 0;
    primaryTypeIndex < TYPES.length;
    primaryTypeIndex++
  ) {
    for (
      let secondaryTypeIndex = primaryTypeIndex;
      secondaryTypeIndex < TYPES.length;
      secondaryTypeIndex++
    ) {
      const type = TYPES[primaryTypeIndex];
      const types = [type];

      if (primaryTypeIndex !== secondaryTypeIndex) {
        const secondaryType = TYPES[secondaryTypeIndex];

        // Filter out unused type combinations
        if (
          UNUSED_TYPES.some(
            (combination) =>
              combination.includes(type) && combination.includes(secondaryType)
          )
        )
          continue;

        types.push(secondaryType);
      }

      scores.push(getTypeScoreEntry(types));
    }
  }

  scores.sort((a, b) => a.score - b.score);

  return scores;
})();

export function getAbilityImmunities(types) {
  const abilityCombinations = {
    "flash-fire": [
      ["fire", "steel"],
      ["fire", "ghost"],
      ["fire", "psychic"],
    ],
    "well-baked-body": [["fairy"]],
    "purifying-salt": [["rock"]],
    "earth-eater": [["steel"]],
    "sap-sipper": [["normal", "psychic"], ["dragon"]],
    levitate: [
      ["electric", "ghost"],
      ["electric", "flying"],
      ["electric", "ice"],
      ["electric", "fire"],
      ["electric", "grass"],
      ["electric", "water"],
      ["psychic"],
      ["steel", "psychic"],
      // ["poison"],
      ["poison", "fairy"],
      ["dragon", "psychic"],
      ["dark", "dragon"],
      ["bug", "electric"],
      ["ground", "psychic"],
      ["ground", "dragon"],
      // ['electric']
    ],
    "volt-absorb": [
      ["electric", "flying"],
      ["electric", "fighting"],
      "electric",
    ],
    "water-absorb": [["water", "ground"], ["poison", "ground"], ["water"]],
    "storm-drain": [["water", "dragon"]],
    "thick-fat": [
      ["normal", "ice"],
      ["grass", "dragon"],
    ],
  };

  let result = {
    typeMultipliers: {},
    ability: null,
  };

  Object.keys(abilityCombinations).forEach((ability) => {
    const combinations = abilityCombinations[ability];

    if (
      combinations.some((combination) => arrayElementsMatch(combination, types))
    ) {
      result.typeMultipliers = ABILITY_IMMUNITIES[ability];
      result.ability = ability;
    }
  });

  return result;
}

export const TYPE_COLORS = {
  stellar: "#aa9",
  normal: "#aa9",
  fire: "#f42",
  water: "#39f",
  electric: "#fc3",
  grass: "#7c5",
  ice: "#6cf",
  fighting: "#b54",
  poison: "#a59",
  ground: "#db5",
  flying: "#89f",
  psychic: "#f59",
  bug: "#ab2",
  rock: "#ba6",
  ghost: "#66b",
  dragon: "#76e",
  dark: "#754",
  steel: "#aab",
  fairy: "#e9e",
};

export const DAMAGE_COLORS = {
  0: "#2e3436",
  0.25: "#7c0000",
  0.5: "#a40000",
  2: "#4e9a06",
  4: "#73d216",
};

export function noSharedWeaknesses(entry, entries) {
  for (const existingEntry of entries) {
    for (const type of TYPES) {
      if (
        entry.typeMultipliers[type] > 1 &&
        existingEntry.typeMultipliers[type] > 1
      )
        return false;
    }
  }

  return true;
}
