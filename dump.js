export const GENS = {
    "RB": "Red/Blue",
    "GS": "Gold/Silver",
    "RS": "Ruby/Sapphire",
    "DP": "Diamond/Pearl",
    "BW": "Black/White",
    "XY": "X/Y",
    "SM": "Sun/Moon",
    "SS": "Sword/Shield",
    "SV": "Scarlet/Violet",
};

export const POKEMON = [
    {
        "name": "Bulbasaur",
        "hp": 45,
        "atk": 49,
        "def": 49,
        "spa": 65,
        "spd": 65,
        "spe": 45,
        "weight": 6.9,
        "height": 0.7,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 1,
            "evos": [
                "Ivysaur"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ivysaur",
        "hp": 60,
        "atk": 62,
        "def": 63,
        "spa": 80,
        "spd": 80,
        "spe": 60,
        "weight": 13,
        "height": 1,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 2,
            "evos": [
                "Venusaur"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Venusaur",
        "hp": 80,
        "atk": 82,
        "def": 83,
        "spa": 100,
        "spd": 100,
        "spe": 80,
        "weight": 100,
        "height": 2,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 3,
            "evos": [],
            "alts": [
                "Venusaur-Gmax",
                "Venusaur-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Charmander",
        "hp": 39,
        "atk": 52,
        "def": 43,
        "spa": 60,
        "spd": 50,
        "spe": 65,
        "weight": 8.5,
        "height": 0.6,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Solar Power"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 4,
            "evos": [
                "Charmeleon"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Charmeleon",
        "hp": 58,
        "atk": 64,
        "def": 58,
        "spa": 80,
        "spd": 65,
        "spe": 80,
        "weight": 19,
        "height": 1.1,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Solar Power"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 5,
            "evos": [
                "Charizard"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Charizard",
        "hp": 78,
        "atk": 84,
        "def": 78,
        "spa": 109,
        "spd": 85,
        "spe": 100,
        "weight": 90.5,
        "height": 1.7,
        "types": [
            "Fire",
            "Flying"
        ],
        "abilities": [
            "Blaze",
            "Solar Power"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 6,
            "evos": [],
            "alts": [
                "Charizard-Gmax",
                "Charizard-Mega-Y",
                "Charizard-Mega-X"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Squirtle",
        "hp": 44,
        "atk": 48,
        "def": 65,
        "spa": 50,
        "spd": 64,
        "spe": 43,
        "weight": 9,
        "height": 0.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Rain Dish",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 7,
            "evos": [
                "Wartortle"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wartortle",
        "hp": 59,
        "atk": 63,
        "def": 80,
        "spa": 65,
        "spd": 80,
        "spe": 58,
        "weight": 22.5,
        "height": 1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Rain Dish",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 8,
            "evos": [
                "Blastoise"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Blastoise",
        "hp": 79,
        "atk": 83,
        "def": 100,
        "spa": 85,
        "spd": 105,
        "spe": 78,
        "weight": 85.5,
        "height": 1.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Rain Dish",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 9,
            "evos": [],
            "alts": [
                "Blastoise-Gmax",
                "Blastoise-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Caterpie",
        "hp": 45,
        "atk": 30,
        "def": 35,
        "spa": 20,
        "spd": 20,
        "spe": 45,
        "weight": 2.9,
        "height": 0.3,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Run Away",
            "Shield Dust"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 10,
            "evos": [
                "Metapod"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Metapod",
        "hp": 50,
        "atk": 20,
        "def": 55,
        "spa": 25,
        "spd": 25,
        "spe": 30,
        "weight": 9.9,
        "height": 0.7,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Shed Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 11,
            "evos": [
                "Butterfree"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Butterfree",
        "hp": 60,
        "atk": 45,
        "def": 50,
        "spa": 90,
        "spd": 80,
        "spe": 70,
        "weight": 32,
        "height": 1.1,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Compound Eyes",
            "Tinted Lens"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 12,
            "evos": [],
            "alts": [
                "Butterfree-Gmax"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Weedle",
        "hp": 40,
        "atk": 35,
        "def": 30,
        "spa": 20,
        "spd": 20,
        "spe": 50,
        "weight": 3.2,
        "height": 0.3,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Run Away",
            "Shield Dust"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 13,
            "evos": [
                "Kakuna"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kakuna",
        "hp": 45,
        "atk": 25,
        "def": 50,
        "spa": 25,
        "spd": 25,
        "spe": 35,
        "weight": 10,
        "height": 0.6,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Shed Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 14,
            "evos": [
                "Beedrill"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Beedrill",
        "hp": 65,
        "atk": 90,
        "def": 40,
        "spa": 45,
        "spd": 80,
        "spe": 75,
        "weight": 29.5,
        "height": 1,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Sniper",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 15,
            "evos": [],
            "alts": [
                "Beedrill-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pidgey",
        "hp": 40,
        "atk": 45,
        "def": 40,
        "spa": 35,
        "spd": 35,
        "spe": 56,
        "weight": 1.8,
        "height": 0.3,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Keen Eye",
            "Tangled Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 16,
            "evos": [
                "Pidgeotto"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pidgeotto",
        "hp": 63,
        "atk": 60,
        "def": 55,
        "spa": 50,
        "spd": 50,
        "spe": 71,
        "weight": 30,
        "height": 1.1,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Keen Eye",
            "Tangled Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 17,
            "evos": [
                "Pidgeot"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pidgeot",
        "hp": 83,
        "atk": 80,
        "def": 75,
        "spa": 70,
        "spd": 70,
        "spe": 101,
        "weight": 39.5,
        "height": 1.5,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Keen Eye",
            "Tangled Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 18,
            "evos": [],
            "alts": [
                "Pidgeot-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rattata",
        "hp": 30,
        "atk": 56,
        "def": 35,
        "spa": 25,
        "spd": 35,
        "spe": 72,
        "weight": 3.5,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Guts",
            "Hustle",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 19,
            "evos": [
                "Raticate"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Raticate",
        "hp": 55,
        "atk": 81,
        "def": 60,
        "spa": 50,
        "spd": 70,
        "spe": 97,
        "weight": 18.5,
        "height": 0.7,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Guts",
            "Hustle",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 20,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spearow",
        "hp": 40,
        "atk": 60,
        "def": 30,
        "spa": 31,
        "spd": 31,
        "spe": 70,
        "weight": 2,
        "height": 0.3,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Keen Eye",
            "Sniper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 21,
            "evos": [
                "Fearow"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Fearow",
        "hp": 65,
        "atk": 90,
        "def": 65,
        "spa": 61,
        "spd": 61,
        "spe": 100,
        "weight": 38,
        "height": 1.2,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Keen Eye",
            "Sniper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 22,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ekans",
        "hp": 35,
        "atk": 60,
        "def": 44,
        "spa": 40,
        "spd": 54,
        "spe": 55,
        "weight": 6.9,
        "height": 2,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Intimidate",
            "Shed Skin",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 23,
            "evos": [
                "Arbok"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arbok",
        "hp": 60,
        "atk": 95,
        "def": 69,
        "spa": 65,
        "spd": 79,
        "spe": 80,
        "weight": 65,
        "height": 3.5,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Intimidate",
            "Shed Skin",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 24,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Static"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 25,
            "evos": [
                "Raichu",
                "Raichu-Alola"
            ],
            "alts": [
                "Pikachu-Gmax"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Raichu",
        "hp": 60,
        "atk": 90,
        "def": 55,
        "spa": 90,
        "spd": 80,
        "spe": 110,
        "weight": 30,
        "height": 0.8,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Static"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 26,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sandshrew",
        "hp": 50,
        "atk": 75,
        "def": 85,
        "spa": 20,
        "spd": 30,
        "spe": 40,
        "weight": 12,
        "height": 0.6,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Rush",
            "Sand Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 27,
            "evos": [
                "Sandslash"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sandslash",
        "hp": 75,
        "atk": 100,
        "def": 110,
        "spa": 45,
        "spd": 55,
        "spe": 65,
        "weight": 29.5,
        "height": 1,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Rush",
            "Sand Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 28,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nidoran-F",
        "hp": 55,
        "atk": 47,
        "def": 52,
        "spa": 40,
        "spd": 40,
        "spe": 41,
        "weight": 7,
        "height": 0.4,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Hustle",
            "Poison Point",
            "Rivalry"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 29,
            "evos": [
                "Nidorina"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nidorina",
        "hp": 70,
        "atk": 62,
        "def": 67,
        "spa": 55,
        "spd": 55,
        "spe": 56,
        "weight": 20,
        "height": 0.8,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Hustle",
            "Poison Point",
            "Rivalry"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 30,
            "evos": [
                "Nidoqueen"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nidoqueen",
        "hp": 90,
        "atk": 92,
        "def": 87,
        "spa": 75,
        "spd": 85,
        "spe": 76,
        "weight": 60,
        "height": 1.3,
        "types": [
            "Poison",
            "Ground"
        ],
        "abilities": [
            "Poison Point",
            "Rivalry",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 31,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nidoran-M",
        "hp": 46,
        "atk": 57,
        "def": 40,
        "spa": 40,
        "spd": 40,
        "spe": 50,
        "weight": 9,
        "height": 0.5,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Hustle",
            "Poison Point",
            "Rivalry"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 32,
            "evos": [
                "Nidorino"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nidorino",
        "hp": 61,
        "atk": 72,
        "def": 57,
        "spa": 55,
        "spd": 55,
        "spe": 65,
        "weight": 19.5,
        "height": 0.9,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Hustle",
            "Poison Point",
            "Rivalry"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 33,
            "evos": [
                "Nidoking"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nidoking",
        "hp": 81,
        "atk": 102,
        "def": 77,
        "spa": 85,
        "spd": 75,
        "spe": 85,
        "weight": 62,
        "height": 1.4,
        "types": [
            "Poison",
            "Ground"
        ],
        "abilities": [
            "Poison Point",
            "Rivalry",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 34,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Clefairy",
        "hp": 70,
        "atk": 45,
        "def": 48,
        "spa": 60,
        "spd": 65,
        "spe": 35,
        "weight": 7.5,
        "height": 0.6,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Cute Charm",
            "Friend Guard",
            "Magic Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 35,
            "evos": [
                "Clefable"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Clefable",
        "hp": 95,
        "atk": 70,
        "def": 73,
        "spa": 95,
        "spd": 90,
        "spe": 60,
        "weight": 40,
        "height": 1.3,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Cute Charm",
            "Magic Guard",
            "Unaware"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 36,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vulpix",
        "hp": 38,
        "atk": 41,
        "def": 40,
        "spa": 50,
        "spd": 65,
        "spe": 65,
        "weight": 9.9,
        "height": 0.6,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Drought",
            "Flash Fire"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 37,
            "evos": [
                "Ninetales"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ninetales",
        "hp": 73,
        "atk": 76,
        "def": 75,
        "spa": 81,
        "spd": 100,
        "spe": 100,
        "weight": 19.9,
        "height": 1.1,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Drought",
            "Flash Fire"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 38,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Jigglypuff",
        "hp": 115,
        "atk": 45,
        "def": 20,
        "spa": 45,
        "spd": 25,
        "spe": 20,
        "weight": 5.5,
        "height": 0.5,
        "types": [
            "Normal",
            "Fairy"
        ],
        "abilities": [
            "Competitive",
            "Cute Charm",
            "Friend Guard"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 39,
            "evos": [
                "Wigglytuff"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wigglytuff",
        "hp": 140,
        "atk": 70,
        "def": 45,
        "spa": 85,
        "spd": 50,
        "spe": 45,
        "weight": 12,
        "height": 1,
        "types": [
            "Normal",
            "Fairy"
        ],
        "abilities": [
            "Competitive",
            "Cute Charm",
            "Frisk"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 40,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zubat",
        "hp": 40,
        "atk": 45,
        "def": 35,
        "spa": 30,
        "spd": 40,
        "spe": 55,
        "weight": 7.5,
        "height": 0.8,
        "types": [
            "Poison",
            "Flying"
        ],
        "abilities": [
            "Infiltrator",
            "Inner Focus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 41,
            "evos": [
                "Golbat"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Golbat",
        "hp": 75,
        "atk": 80,
        "def": 70,
        "spa": 65,
        "spd": 75,
        "spe": 90,
        "weight": 55,
        "height": 1.6,
        "types": [
            "Poison",
            "Flying"
        ],
        "abilities": [
            "Infiltrator",
            "Inner Focus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 42,
            "evos": [
                "Crobat"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Oddish",
        "hp": 45,
        "atk": 50,
        "def": 55,
        "spa": 75,
        "spd": 65,
        "spe": 30,
        "weight": 5.4,
        "height": 0.5,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 43,
            "evos": [
                "Gloom"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gloom",
        "hp": 60,
        "atk": 65,
        "def": 70,
        "spa": 85,
        "spd": 75,
        "spe": 40,
        "weight": 8.6,
        "height": 0.8,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Stench"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 44,
            "evos": [
                "Bellossom",
                "Vileplume"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vileplume",
        "hp": 75,
        "atk": 80,
        "def": 85,
        "spa": 110,
        "spd": 90,
        "spe": 50,
        "weight": 18.6,
        "height": 1.2,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Effect Spore"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 45,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Paras",
        "hp": 35,
        "atk": 70,
        "def": 55,
        "spa": 45,
        "spd": 55,
        "spe": 25,
        "weight": 5.4,
        "height": 0.3,
        "types": [
            "Bug",
            "Grass"
        ],
        "abilities": [
            "Damp",
            "Dry Skin",
            "Effect Spore"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 46,
            "evos": [
                "Parasect"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Parasect",
        "hp": 60,
        "atk": 95,
        "def": 80,
        "spa": 60,
        "spd": 80,
        "spe": 30,
        "weight": 29.5,
        "height": 1,
        "types": [
            "Bug",
            "Grass"
        ],
        "abilities": [
            "Damp",
            "Dry Skin",
            "Effect Spore"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 47,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Venonat",
        "hp": 60,
        "atk": 55,
        "def": 50,
        "spa": 40,
        "spd": 55,
        "spe": 45,
        "weight": 30,
        "height": 1,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Compound Eyes",
            "Run Away",
            "Tinted Lens"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 48,
            "evos": [
                "Venomoth"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Venomoth",
        "hp": 70,
        "atk": 65,
        "def": 60,
        "spa": 90,
        "spd": 75,
        "spe": 90,
        "weight": 12.5,
        "height": 1.5,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Shield Dust",
            "Tinted Lens",
            "Wonder Skin"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 49,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Diglett",
        "hp": 10,
        "atk": 55,
        "def": 25,
        "spa": 35,
        "spd": 45,
        "spe": 95,
        "weight": 0.8,
        "height": 0.2,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Arena Trap",
            "Sand Force",
            "Sand Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 50,
            "evos": [
                "Dugtrio"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dugtrio",
        "hp": 35,
        "atk": 100,
        "def": 50,
        "spa": 50,
        "spd": 70,
        "spe": 120,
        "weight": 33.3,
        "height": 0.7,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Arena Trap",
            "Sand Force",
            "Sand Veil"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 51,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meowth",
        "hp": 40,
        "atk": 45,
        "def": 35,
        "spa": 40,
        "spd": 40,
        "spe": 90,
        "weight": 4.2,
        "height": 0.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Pickup",
            "Technician",
            "Unnerve"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 52,
            "evos": [
                "Persian"
            ],
            "alts": [
                "Meowth-Gmax"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Persian",
        "hp": 65,
        "atk": 70,
        "def": 60,
        "spa": 65,
        "spd": 65,
        "spe": 115,
        "weight": 32,
        "height": 1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Limber",
            "Technician",
            "Unnerve"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 53,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Psyduck",
        "hp": 50,
        "atk": 52,
        "def": 48,
        "spa": 65,
        "spd": 50,
        "spe": 55,
        "weight": 19.6,
        "height": 0.8,
        "types": [
            "Water"
        ],
        "abilities": [
            "Cloud Nine",
            "Damp",
            "Swift Swim"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 54,
            "evos": [
                "Golduck"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Golduck",
        "hp": 80,
        "atk": 82,
        "def": 78,
        "spa": 95,
        "spd": 80,
        "spe": 85,
        "weight": 76.6,
        "height": 1.7,
        "types": [
            "Water"
        ],
        "abilities": [
            "Cloud Nine",
            "Damp",
            "Swift Swim"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 55,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mankey",
        "hp": 40,
        "atk": 80,
        "def": 35,
        "spa": 35,
        "spd": 45,
        "spe": 70,
        "weight": 28,
        "height": 0.5,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Anger Point",
            "Defiant",
            "Vital Spirit"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 56,
            "evos": [
                "Primeape"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Primeape",
        "hp": 65,
        "atk": 105,
        "def": 60,
        "spa": 60,
        "spd": 70,
        "spe": 95,
        "weight": 32,
        "height": 1,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Anger Point",
            "Defiant",
            "Vital Spirit"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 57,
            "evos": [
                "Annihilape"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Growlithe",
        "hp": 55,
        "atk": 70,
        "def": 45,
        "spa": 70,
        "spd": 50,
        "spe": 60,
        "weight": 19,
        "height": 0.7,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flash Fire",
            "Intimidate",
            "Justified"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 58,
            "evos": [
                "Arcanine"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arcanine",
        "hp": 90,
        "atk": 110,
        "def": 80,
        "spa": 100,
        "spd": 80,
        "spe": 95,
        "weight": 155,
        "height": 1.9,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flash Fire",
            "Intimidate",
            "Justified"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 59,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Poliwag",
        "hp": 40,
        "atk": 50,
        "def": 40,
        "spa": 40,
        "spd": 40,
        "spe": 90,
        "weight": 12.4,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Damp",
            "Swift Swim",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 60,
            "evos": [
                "Poliwhirl"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Poliwhirl",
        "hp": 65,
        "atk": 65,
        "def": 65,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 20,
        "height": 1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Damp",
            "Swift Swim",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 61,
            "evos": [
                "Politoed",
                "Poliwrath"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Poliwrath",
        "hp": 90,
        "atk": 95,
        "def": 95,
        "spa": 70,
        "spd": 90,
        "spe": 70,
        "weight": 54,
        "height": 1.3,
        "types": [
            "Water",
            "Fighting"
        ],
        "abilities": [
            "Damp",
            "Swift Swim",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 62,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Abra",
        "hp": 25,
        "atk": 20,
        "def": 15,
        "spa": 105,
        "spd": 55,
        "spe": 90,
        "weight": 19.5,
        "height": 0.9,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Inner Focus",
            "Magic Guard",
            "Synchronize"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 63,
            "evos": [
                "Kadabra"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kadabra",
        "hp": 40,
        "atk": 35,
        "def": 30,
        "spa": 120,
        "spd": 70,
        "spe": 105,
        "weight": 56.5,
        "height": 1.3,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Inner Focus",
            "Magic Guard",
            "Synchronize"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 64,
            "evos": [
                "Alakazam"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Alakazam",
        "hp": 55,
        "atk": 50,
        "def": 45,
        "spa": 135,
        "spd": 95,
        "spe": 120,
        "weight": 48,
        "height": 1.5,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Inner Focus",
            "Magic Guard",
            "Synchronize"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 65,
            "evos": [],
            "alts": [
                "Alakazam-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Machop",
        "hp": 70,
        "atk": 80,
        "def": 50,
        "spa": 35,
        "spd": 35,
        "spe": 35,
        "weight": 19.5,
        "height": 0.8,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "No Guard",
            "Steadfast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 66,
            "evos": [
                "Machoke"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Machoke",
        "hp": 80,
        "atk": 100,
        "def": 70,
        "spa": 50,
        "spd": 60,
        "spe": 45,
        "weight": 70.5,
        "height": 1.5,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "No Guard",
            "Steadfast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 67,
            "evos": [
                "Machamp"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Machamp",
        "hp": 90,
        "atk": 130,
        "def": 80,
        "spa": 65,
        "spd": 85,
        "spe": 55,
        "weight": 130,
        "height": 1.6,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "No Guard",
            "Steadfast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 68,
            "evos": [],
            "alts": [
                "Machamp-Gmax"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bellsprout",
        "hp": 50,
        "atk": 75,
        "def": 35,
        "spa": 70,
        "spd": 30,
        "spe": 40,
        "weight": 4,
        "height": 0.7,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Gluttony"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 69,
            "evos": [
                "Weepinbell"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Weepinbell",
        "hp": 65,
        "atk": 90,
        "def": 50,
        "spa": 85,
        "spd": 45,
        "spe": 55,
        "weight": 6.4,
        "height": 1,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Gluttony"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 70,
            "evos": [
                "Victreebel"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Victreebel",
        "hp": 80,
        "atk": 105,
        "def": 65,
        "spa": 100,
        "spd": 70,
        "spe": 70,
        "weight": 15.5,
        "height": 1.7,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Gluttony"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 71,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tentacool",
        "hp": 40,
        "atk": 40,
        "def": 35,
        "spa": 50,
        "spd": 100,
        "spe": 70,
        "weight": 45.5,
        "height": 0.9,
        "types": [
            "Water",
            "Poison"
        ],
        "abilities": [
            "Clear Body",
            "Liquid Ooze",
            "Rain Dish"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 72,
            "evos": [
                "Tentacruel"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tentacruel",
        "hp": 80,
        "atk": 70,
        "def": 65,
        "spa": 80,
        "spd": 120,
        "spe": 100,
        "weight": 55,
        "height": 1.6,
        "types": [
            "Water",
            "Poison"
        ],
        "abilities": [
            "Clear Body",
            "Liquid Ooze",
            "Rain Dish"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 73,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Geodude",
        "hp": 40,
        "atk": 80,
        "def": 100,
        "spa": 30,
        "spd": 30,
        "spe": 20,
        "weight": 20,
        "height": 0.4,
        "types": [
            "Rock",
            "Ground"
        ],
        "abilities": [
            "Rock Head",
            "Sand Veil",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 74,
            "evos": [
                "Graveler"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Graveler",
        "hp": 55,
        "atk": 95,
        "def": 115,
        "spa": 45,
        "spd": 45,
        "spe": 35,
        "weight": 105,
        "height": 1,
        "types": [
            "Rock",
            "Ground"
        ],
        "abilities": [
            "Rock Head",
            "Sand Veil",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 75,
            "evos": [
                "Golem"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Golem",
        "hp": 80,
        "atk": 120,
        "def": 130,
        "spa": 55,
        "spd": 65,
        "spe": 45,
        "weight": 300,
        "height": 1.4,
        "types": [
            "Rock",
            "Ground"
        ],
        "abilities": [
            "Rock Head",
            "Sand Veil",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 76,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ponyta",
        "hp": 50,
        "atk": 85,
        "def": 55,
        "spa": 65,
        "spd": 65,
        "spe": 90,
        "weight": 30,
        "height": 1,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 77,
            "evos": [
                "Rapidash"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rapidash",
        "hp": 65,
        "atk": 100,
        "def": 70,
        "spa": 80,
        "spd": 80,
        "spe": 105,
        "weight": 95,
        "height": 1.7,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 78,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slowpoke",
        "hp": 90,
        "atk": 65,
        "def": 65,
        "spa": 40,
        "spd": 40,
        "spe": 15,
        "weight": 36,
        "height": 1.2,
        "types": [
            "Water",
            "Psychic"
        ],
        "abilities": [
            "Oblivious",
            "Own Tempo",
            "Regenerator"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 79,
            "evos": [
                "Slowbro",
                "Slowking"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slowbro",
        "hp": 95,
        "atk": 75,
        "def": 110,
        "spa": 100,
        "spd": 80,
        "spe": 30,
        "weight": 78.5,
        "height": 1.6,
        "types": [
            "Water",
            "Psychic"
        ],
        "abilities": [
            "Oblivious",
            "Own Tempo",
            "Regenerator"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 80,
            "evos": [],
            "alts": [
                "Slowbro-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magnemite",
        "hp": 25,
        "atk": 35,
        "def": 70,
        "spa": 95,
        "spd": 55,
        "spe": 45,
        "weight": 6,
        "height": 0.3,
        "types": [
            "Electric",
            "Steel"
        ],
        "abilities": [
            "Analytic",
            "Magnet Pull",
            "Sturdy"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 81,
            "evos": [
                "Magneton"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magneton",
        "hp": 50,
        "atk": 60,
        "def": 95,
        "spa": 120,
        "spd": 70,
        "spe": 70,
        "weight": 60,
        "height": 1,
        "types": [
            "Electric",
            "Steel"
        ],
        "abilities": [
            "Analytic",
            "Magnet Pull",
            "Sturdy"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 82,
            "evos": [
                "Magnezone"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Farfetch'd",
        "hp": 52,
        "atk": 90,
        "def": 55,
        "spa": 58,
        "spd": 62,
        "spe": 60,
        "weight": 15,
        "height": 0.8,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Defiant",
            "Inner Focus",
            "Keen Eye"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 83,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Doduo",
        "hp": 35,
        "atk": 85,
        "def": 45,
        "spa": 35,
        "spd": 35,
        "spe": 75,
        "weight": 39.2,
        "height": 1.4,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Early Bird",
            "Run Away",
            "Tangled Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 84,
            "evos": [
                "Dodrio"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dodrio",
        "hp": 60,
        "atk": 110,
        "def": 70,
        "spa": 60,
        "spd": 60,
        "spe": 110,
        "weight": 85.2,
        "height": 1.8,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Early Bird",
            "Run Away",
            "Tangled Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 85,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Seel",
        "hp": 65,
        "atk": 45,
        "def": 55,
        "spa": 45,
        "spd": 70,
        "spe": 45,
        "weight": 90,
        "height": 1.1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hydration",
            "Ice Body",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 86,
            "evos": [
                "Dewgong"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dewgong",
        "hp": 90,
        "atk": 70,
        "def": 80,
        "spa": 70,
        "spd": 95,
        "spe": 70,
        "weight": 120,
        "height": 1.7,
        "types": [
            "Water",
            "Ice"
        ],
        "abilities": [
            "Hydration",
            "Ice Body",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 87,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grimer",
        "hp": 80,
        "atk": 80,
        "def": 50,
        "spa": 40,
        "spd": 50,
        "spe": 25,
        "weight": 30,
        "height": 0.9,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Poison Touch",
            "Stench",
            "Sticky Hold"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 88,
            "evos": [
                "Muk"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Muk",
        "hp": 105,
        "atk": 105,
        "def": 75,
        "spa": 65,
        "spd": 100,
        "spe": 50,
        "weight": 30,
        "height": 1.2,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Poison Touch",
            "Stench",
            "Sticky Hold"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 89,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shellder",
        "hp": 30,
        "atk": 65,
        "def": 100,
        "spa": 45,
        "spd": 25,
        "spe": 40,
        "weight": 4,
        "height": 0.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Overcoat",
            "Shell Armor",
            "Skill Link"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 90,
            "evos": [
                "Cloyster"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cloyster",
        "hp": 50,
        "atk": 95,
        "def": 180,
        "spa": 85,
        "spd": 45,
        "spe": 70,
        "weight": 132.5,
        "height": 1.5,
        "types": [
            "Water",
            "Ice"
        ],
        "abilities": [
            "Overcoat",
            "Shell Armor",
            "Skill Link"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 91,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gastly",
        "hp": 30,
        "atk": 35,
        "def": 30,
        "spa": 100,
        "spd": 35,
        "spe": 80,
        "weight": 0.1,
        "height": 1.3,
        "types": [
            "Ghost",
            "Poison"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 92,
            "evos": [
                "Haunter"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Haunter",
        "hp": 45,
        "atk": 50,
        "def": 45,
        "spa": 115,
        "spd": 55,
        "spe": 95,
        "weight": 0.1,
        "height": 1.6,
        "types": [
            "Ghost",
            "Poison"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 93,
            "evos": [
                "Gengar"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gengar",
        "hp": 60,
        "atk": 65,
        "def": 60,
        "spa": 130,
        "spd": 75,
        "spe": 110,
        "weight": 40.5,
        "height": 1.5,
        "types": [
            "Ghost",
            "Poison"
        ],
        "abilities": [
            "Cursed Body"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 94,
            "evos": [],
            "alts": [
                "Gengar-Gmax",
                "Gengar-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Onix",
        "hp": 35,
        "atk": 45,
        "def": 160,
        "spa": 30,
        "spd": 45,
        "spe": 70,
        "weight": 210,
        "height": 8.8,
        "types": [
            "Rock",
            "Ground"
        ],
        "abilities": [
            "Rock Head",
            "Sturdy",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 95,
            "evos": [
                "Steelix"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drowzee",
        "hp": 60,
        "atk": 48,
        "def": 45,
        "spa": 43,
        "spd": 90,
        "spe": 42,
        "weight": 32.4,
        "height": 1,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Forewarn",
            "Inner Focus",
            "Insomnia"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 96,
            "evos": [
                "Hypno"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hypno",
        "hp": 85,
        "atk": 73,
        "def": 70,
        "spa": 73,
        "spd": 115,
        "spe": 67,
        "weight": 75.6,
        "height": 1.6,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Forewarn",
            "Inner Focus",
            "Insomnia"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 97,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Krabby",
        "hp": 30,
        "atk": 105,
        "def": 90,
        "spa": 25,
        "spd": 25,
        "spe": 50,
        "weight": 6.5,
        "height": 0.4,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hyper Cutter",
            "Sheer Force",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 98,
            "evos": [
                "Kingler"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kingler",
        "hp": 55,
        "atk": 130,
        "def": 115,
        "spa": 50,
        "spd": 50,
        "spe": 75,
        "weight": 60,
        "height": 1.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hyper Cutter",
            "Sheer Force",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 99,
            "evos": [],
            "alts": [
                "Kingler-Gmax"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Voltorb",
        "hp": 40,
        "atk": 30,
        "def": 50,
        "spa": 55,
        "spd": 55,
        "spe": 100,
        "weight": 10.4,
        "height": 0.5,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Aftermath",
            "Soundproof",
            "Static"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 100,
            "evos": [
                "Electrode"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Electrode",
        "hp": 60,
        "atk": 50,
        "def": 70,
        "spa": 80,
        "spd": 80,
        "spe": 150,
        "weight": 66.6,
        "height": 1.2,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Aftermath",
            "Soundproof",
            "Static"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 101,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Exeggcute",
        "hp": 60,
        "atk": 40,
        "def": 80,
        "spa": 60,
        "spd": 45,
        "spe": 40,
        "weight": 2.5,
        "height": 0.4,
        "types": [
            "Grass",
            "Psychic"
        ],
        "abilities": [
            "Chlorophyll",
            "Harvest"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 102,
            "evos": [
                "Exeggutor",
                "Exeggutor-Alola"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Exeggutor",
        "hp": 95,
        "atk": 95,
        "def": 85,
        "spa": 125,
        "spd": 75,
        "spe": 55,
        "weight": 120,
        "height": 2,
        "types": [
            "Grass",
            "Psychic"
        ],
        "abilities": [
            "Chlorophyll",
            "Harvest"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 103,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cubone",
        "hp": 50,
        "atk": 50,
        "def": 95,
        "spa": 40,
        "spd": 50,
        "spe": 35,
        "weight": 6.5,
        "height": 0.4,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Battle Armor",
            "Lightning Rod",
            "Rock Head"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 104,
            "evos": [
                "Marowak",
                "Marowak-Alola"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Marowak",
        "hp": 60,
        "atk": 80,
        "def": 110,
        "spa": 50,
        "spd": 80,
        "spe": 45,
        "weight": 45,
        "height": 1,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Battle Armor",
            "Lightning Rod",
            "Rock Head"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 105,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hitmonlee",
        "hp": 50,
        "atk": 120,
        "def": 53,
        "spa": 35,
        "spd": 110,
        "spe": 87,
        "weight": 49.8,
        "height": 1.5,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Limber",
            "Reckless",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 106,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hitmonchan",
        "hp": 50,
        "atk": 105,
        "def": 79,
        "spa": 35,
        "spd": 110,
        "spe": 76,
        "weight": 50.2,
        "height": 1.4,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Inner Focus",
            "Iron Fist",
            "Keen Eye"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 107,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lickitung",
        "hp": 90,
        "atk": 55,
        "def": 75,
        "spa": 60,
        "spd": 75,
        "spe": 30,
        "weight": 65.5,
        "height": 1.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cloud Nine",
            "Oblivious",
            "Own Tempo"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 108,
            "evos": [
                "Lickilicky"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Koffing",
        "hp": 40,
        "atk": 65,
        "def": 95,
        "spa": 60,
        "spd": 45,
        "spe": 35,
        "weight": 1,
        "height": 0.6,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 109,
            "evos": [
                "Weezing",
                "Weezing-Galar"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Weezing",
        "hp": 65,
        "atk": 90,
        "def": 120,
        "spa": 85,
        "spd": 70,
        "spe": 60,
        "weight": 9.5,
        "height": 1.2,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 110,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rhyhorn",
        "hp": 80,
        "atk": 85,
        "def": 95,
        "spa": 30,
        "spd": 30,
        "spe": 25,
        "weight": 115,
        "height": 1,
        "types": [
            "Ground",
            "Rock"
        ],
        "abilities": [
            "Lightning Rod",
            "Reckless",
            "Rock Head"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 111,
            "evos": [
                "Rhydon"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rhydon",
        "hp": 105,
        "atk": 130,
        "def": 120,
        "spa": 45,
        "spd": 45,
        "spe": 40,
        "weight": 120,
        "height": 1.9,
        "types": [
            "Ground",
            "Rock"
        ],
        "abilities": [
            "Lightning Rod",
            "Reckless",
            "Rock Head"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 112,
            "evos": [
                "Rhyperior"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chansey",
        "hp": 250,
        "atk": 5,
        "def": 5,
        "spa": 35,
        "spd": 105,
        "spe": 50,
        "weight": 34.6,
        "height": 1.1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Healer",
            "Natural Cure",
            "Serene Grace"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 113,
            "evos": [
                "Blissey"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tangela",
        "hp": 65,
        "atk": 55,
        "def": 115,
        "spa": 100,
        "spd": 40,
        "spe": 60,
        "weight": 35,
        "height": 1,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 114,
            "evos": [
                "Tangrowth"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kangaskhan",
        "hp": 105,
        "atk": 95,
        "def": 80,
        "spa": 40,
        "spd": 80,
        "spe": 90,
        "weight": 80,
        "height": 2.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Early Bird",
            "Inner Focus",
            "Scrappy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 115,
            "evos": [],
            "alts": [
                "Kangaskhan-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Horsea",
        "hp": 30,
        "atk": 40,
        "def": 70,
        "spa": 70,
        "spd": 25,
        "spe": 60,
        "weight": 8,
        "height": 0.4,
        "types": [
            "Water"
        ],
        "abilities": [
            "Damp",
            "Sniper",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 116,
            "evos": [
                "Seadra"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Seadra",
        "hp": 55,
        "atk": 65,
        "def": 95,
        "spa": 95,
        "spd": 45,
        "spe": 85,
        "weight": 25,
        "height": 1.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Damp",
            "Poison Point",
            "Sniper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 117,
            "evos": [
                "Kingdra"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Goldeen",
        "hp": 45,
        "atk": 67,
        "def": 60,
        "spa": 35,
        "spd": 50,
        "spe": 63,
        "weight": 15,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Lightning Rod",
            "Swift Swim",
            "Water Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 118,
            "evos": [
                "Seaking"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Seaking",
        "hp": 80,
        "atk": 92,
        "def": 65,
        "spa": 65,
        "spd": 80,
        "spe": 68,
        "weight": 39,
        "height": 1.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Lightning Rod",
            "Swift Swim",
            "Water Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 119,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Staryu",
        "hp": 30,
        "atk": 45,
        "def": 55,
        "spa": 70,
        "spd": 55,
        "spe": 85,
        "weight": 34.5,
        "height": 0.8,
        "types": [
            "Water"
        ],
        "abilities": [
            "Analytic",
            "Illuminate",
            "Natural Cure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 120,
            "evos": [
                "Starmie"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Starmie",
        "hp": 60,
        "atk": 75,
        "def": 85,
        "spa": 100,
        "spd": 85,
        "spe": 115,
        "weight": 80,
        "height": 1.1,
        "types": [
            "Water",
            "Psychic"
        ],
        "abilities": [
            "Analytic",
            "Illuminate",
            "Natural Cure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 121,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mr. Mime",
        "hp": 40,
        "atk": 45,
        "def": 65,
        "spa": 100,
        "spd": 120,
        "spe": 90,
        "weight": 54.5,
        "height": 1.3,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Filter",
            "Soundproof",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 122,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Scyther",
        "hp": 70,
        "atk": 110,
        "def": 80,
        "spa": 55,
        "spd": 80,
        "spe": 105,
        "weight": 56,
        "height": 1.5,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Steadfast",
            "Swarm",
            "Technician"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 123,
            "evos": [
                "Kleavor",
                "Scizor"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Jynx",
        "hp": 65,
        "atk": 50,
        "def": 35,
        "spa": 115,
        "spd": 95,
        "spe": 95,
        "weight": 40.6,
        "height": 1.4,
        "types": [
            "Ice",
            "Psychic"
        ],
        "abilities": [
            "Dry Skin",
            "Forewarn",
            "Oblivious"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 124,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Electabuzz",
        "hp": 65,
        "atk": 83,
        "def": 57,
        "spa": 95,
        "spd": 85,
        "spe": 105,
        "weight": 30,
        "height": 1.1,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 125,
            "evos": [
                "Electivire"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magmar",
        "hp": 65,
        "atk": 95,
        "def": 57,
        "spa": 100,
        "spd": 85,
        "spe": 93,
        "weight": 44.5,
        "height": 1.3,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 126,
            "evos": [
                "Magmortar"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pinsir",
        "hp": 65,
        "atk": 125,
        "def": 100,
        "spa": 55,
        "spd": 70,
        "spe": 85,
        "weight": 55,
        "height": 1.5,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Hyper Cutter",
            "Mold Breaker",
            "Moxie"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 127,
            "evos": [],
            "alts": [
                "Pinsir-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tauros",
        "hp": 75,
        "atk": 100,
        "def": 95,
        "spa": 40,
        "spd": 70,
        "spe": 110,
        "weight": 88.4,
        "height": 1.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Anger Point",
            "Intimidate",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 128,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magikarp",
        "hp": 20,
        "atk": 10,
        "def": 55,
        "spa": 15,
        "spd": 20,
        "spe": 80,
        "weight": 10,
        "height": 0.9,
        "types": [
            "Water"
        ],
        "abilities": [
            "Rattled",
            "Swift Swim"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 129,
            "evos": [
                "Gyarados"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gyarados",
        "hp": 95,
        "atk": 125,
        "def": 79,
        "spa": 60,
        "spd": 100,
        "spe": 81,
        "weight": 235,
        "height": 6.5,
        "types": [
            "Water",
            "Flying"
        ],
        "abilities": [
            "Intimidate",
            "Moxie"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 130,
            "evos": [],
            "alts": [
                "Gyarados-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lapras",
        "hp": 130,
        "atk": 85,
        "def": 80,
        "spa": 85,
        "spd": 95,
        "spe": 60,
        "weight": 220,
        "height": 2.5,
        "types": [
            "Water",
            "Ice"
        ],
        "abilities": [
            "Hydration",
            "Shell Armor",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 131,
            "evos": [],
            "alts": [
                "Lapras-Gmax"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ditto",
        "hp": 48,
        "atk": 48,
        "def": 48,
        "spa": 48,
        "spd": 48,
        "spe": 48,
        "weight": 4,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Imposter",
            "Limber"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 132,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Eevee",
        "hp": 55,
        "atk": 55,
        "def": 50,
        "spa": 45,
        "spd": 65,
        "spe": 55,
        "weight": 6.5,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Adaptability",
            "Anticipation",
            "Run Away"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 133,
            "evos": [
                "Espeon",
                "Flareon",
                "Glaceon",
                "Jolteon",
                "Leafeon",
                "Sylveon",
                "Umbreon",
                "Vaporeon"
            ],
            "alts": [
                "Eevee-Gmax"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vaporeon",
        "hp": 130,
        "atk": 65,
        "def": 60,
        "spa": 110,
        "spd": 95,
        "spe": 65,
        "weight": 29,
        "height": 1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hydration",
            "Water Absorb"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 134,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Jolteon",
        "hp": 65,
        "atk": 65,
        "def": 60,
        "spa": 110,
        "spd": 95,
        "spe": 130,
        "weight": 24.5,
        "height": 0.8,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Quick Feet",
            "Volt Absorb"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 135,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Flareon",
        "hp": 65,
        "atk": 130,
        "def": 60,
        "spa": 95,
        "spd": 110,
        "spe": 65,
        "weight": 25,
        "height": 0.9,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flash Fire",
            "Guts"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 136,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Porygon",
        "hp": 65,
        "atk": 60,
        "def": 70,
        "spa": 85,
        "spd": 75,
        "spe": 40,
        "weight": 36.5,
        "height": 0.8,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Analytic",
            "Download",
            "Trace"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 137,
            "evos": [
                "Porygon2"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Omanyte",
        "hp": 35,
        "atk": 40,
        "def": 100,
        "spa": 90,
        "spd": 55,
        "spe": 35,
        "weight": 7.5,
        "height": 0.4,
        "types": [
            "Rock",
            "Water"
        ],
        "abilities": [
            "Shell Armor",
            "Swift Swim",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 138,
            "evos": [
                "Omastar"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Omastar",
        "hp": 70,
        "atk": 60,
        "def": 125,
        "spa": 115,
        "spd": 70,
        "spe": 55,
        "weight": 35,
        "height": 1,
        "types": [
            "Rock",
            "Water"
        ],
        "abilities": [
            "Shell Armor",
            "Swift Swim",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 139,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kabuto",
        "hp": 30,
        "atk": 80,
        "def": 90,
        "spa": 55,
        "spd": 45,
        "spe": 55,
        "weight": 11.5,
        "height": 0.5,
        "types": [
            "Rock",
            "Water"
        ],
        "abilities": [
            "Battle Armor",
            "Swift Swim",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 140,
            "evos": [
                "Kabutops"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kabutops",
        "hp": 60,
        "atk": 115,
        "def": 105,
        "spa": 65,
        "spd": 70,
        "spe": 80,
        "weight": 40.5,
        "height": 1.3,
        "types": [
            "Rock",
            "Water"
        ],
        "abilities": [
            "Battle Armor",
            "Swift Swim",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 141,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Aerodactyl",
        "hp": 80,
        "atk": 105,
        "def": 65,
        "spa": 60,
        "spd": 75,
        "spe": 130,
        "weight": 59,
        "height": 1.8,
        "types": [
            "Rock",
            "Flying"
        ],
        "abilities": [
            "Pressure",
            "Rock Head",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 142,
            "evos": [],
            "alts": [
                "Aerodactyl-Mega"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Snorlax",
        "hp": 160,
        "atk": 110,
        "def": 65,
        "spa": 65,
        "spd": 110,
        "spe": 30,
        "weight": 460,
        "height": 2.1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Immunity",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 143,
            "evos": [],
            "alts": [
                "Snorlax-Gmax"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Articuno",
        "hp": 90,
        "atk": 85,
        "def": 100,
        "spa": 95,
        "spd": 125,
        "spe": 85,
        "weight": 55.4,
        "height": 1.7,
        "types": [
            "Ice",
            "Flying"
        ],
        "abilities": [
            "Pressure",
            "Snow Cloak"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 144,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zapdos",
        "hp": 90,
        "atk": 90,
        "def": 85,
        "spa": 125,
        "spd": 90,
        "spe": 100,
        "weight": 52.6,
        "height": 1.6,
        "types": [
            "Electric",
            "Flying"
        ],
        "abilities": [
            "Pressure",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 145,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Moltres",
        "hp": 90,
        "atk": 100,
        "def": 90,
        "spa": 125,
        "spd": 85,
        "spe": 90,
        "weight": 60,
        "height": 2,
        "types": [
            "Fire",
            "Flying"
        ],
        "abilities": [
            "Flame Body",
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 146,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dratini",
        "hp": 41,
        "atk": 64,
        "def": 45,
        "spa": 50,
        "spd": 50,
        "spe": 50,
        "weight": 3.3,
        "height": 1.8,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Marvel Scale",
            "Shed Skin"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 147,
            "evos": [
                "Dragonair"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dragonair",
        "hp": 61,
        "atk": 84,
        "def": 65,
        "spa": 70,
        "spd": 70,
        "spe": 70,
        "weight": 16.5,
        "height": 4,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Marvel Scale",
            "Shed Skin"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 148,
            "evos": [
                "Dragonite"
            ],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dragonite",
        "hp": 91,
        "atk": 134,
        "def": 95,
        "spa": 100,
        "spd": 100,
        "spe": 80,
        "weight": 210,
        "height": 2.2,
        "types": [
            "Dragon",
            "Flying"
        ],
        "abilities": [
            "Inner Focus",
            "Multiscale"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 149,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mewtwo",
        "hp": 106,
        "atk": 110,
        "def": 90,
        "spa": 154,
        "spd": 90,
        "spe": 130,
        "weight": 122,
        "height": 2,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Pressure",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 150,
            "evos": [],
            "alts": [
                "Mewtwo-Mega-Y",
                "Mewtwo-Mega-X"
            ],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mew",
        "hp": 100,
        "atk": 100,
        "def": 100,
        "spa": 100,
        "spd": 100,
        "spe": 100,
        "weight": 4,
        "height": 0.4,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Synchronize"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 151,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RB",
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Unown",
        "hp": 48,
        "atk": 72,
        "def": 48,
        "spa": 72,
        "spd": 48,
        "spe": 48,
        "weight": 5,
        "height": 0.5,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 201,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chikorita",
        "hp": 45,
        "atk": 49,
        "def": 65,
        "spa": 49,
        "spd": 65,
        "spe": 45,
        "weight": 6.4,
        "height": 0.9,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Leaf Guard",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 152,
            "evos": [
                "Bayleef"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bayleef",
        "hp": 60,
        "atk": 62,
        "def": 80,
        "spa": 63,
        "spd": 80,
        "spe": 60,
        "weight": 15.8,
        "height": 1.2,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Leaf Guard",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 153,
            "evos": [
                "Meganium"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meganium",
        "hp": 80,
        "atk": 82,
        "def": 100,
        "spa": 83,
        "spd": 100,
        "spe": 80,
        "weight": 100.5,
        "height": 1.8,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Leaf Guard",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 154,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cyndaquil",
        "hp": 39,
        "atk": 52,
        "def": 43,
        "spa": 60,
        "spd": 50,
        "spe": 65,
        "weight": 7.9,
        "height": 0.5,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Flash Fire"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 155,
            "evos": [
                "Quilava"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Quilava",
        "hp": 58,
        "atk": 64,
        "def": 58,
        "spa": 80,
        "spd": 65,
        "spe": 80,
        "weight": 19,
        "height": 0.9,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Flash Fire"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 156,
            "evos": [
                "Typhlosion"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Typhlosion",
        "hp": 78,
        "atk": 84,
        "def": 78,
        "spa": 109,
        "spd": 85,
        "spe": 100,
        "weight": 79.5,
        "height": 1.7,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Flash Fire"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 157,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Totodile",
        "hp": 50,
        "atk": 65,
        "def": 64,
        "spa": 44,
        "spd": 48,
        "spe": 43,
        "weight": 9.5,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Sheer Force",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 158,
            "evos": [
                "Croconaw"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Croconaw",
        "hp": 65,
        "atk": 80,
        "def": 80,
        "spa": 59,
        "spd": 63,
        "spe": 58,
        "weight": 25,
        "height": 1.1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Sheer Force",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 159,
            "evos": [
                "Feraligatr"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Feraligatr",
        "hp": 85,
        "atk": 105,
        "def": 100,
        "spa": 79,
        "spd": 83,
        "spe": 78,
        "weight": 88.8,
        "height": 2.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Sheer Force",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 160,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Igglybuff",
        "hp": 90,
        "atk": 30,
        "def": 15,
        "spa": 40,
        "spd": 20,
        "spe": 15,
        "weight": 1,
        "height": 0.3,
        "types": [
            "Normal",
            "Fairy"
        ],
        "abilities": [
            "Competitive",
            "Cute Charm",
            "Friend Guard"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 174,
            "evos": [
                "Jigglypuff"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Togepi",
        "hp": 35,
        "atk": 20,
        "def": 65,
        "spa": 40,
        "spd": 65,
        "spe": 20,
        "weight": 1.5,
        "height": 0.3,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Hustle",
            "Serene Grace",
            "Super Luck"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 175,
            "evos": [
                "Togetic"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Togetic",
        "hp": 55,
        "atk": 40,
        "def": 85,
        "spa": 80,
        "spd": 105,
        "spe": 40,
        "weight": 3.2,
        "height": 0.6,
        "types": [
            "Fairy",
            "Flying"
        ],
        "abilities": [
            "Hustle",
            "Serene Grace",
            "Super Luck"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 176,
            "evos": [
                "Togekiss"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cleffa",
        "hp": 50,
        "atk": 25,
        "def": 28,
        "spa": 45,
        "spd": 55,
        "spe": 15,
        "weight": 3,
        "height": 0.3,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Cute Charm",
            "Friend Guard",
            "Magic Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 173,
            "evos": [
                "Clefairy"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ampharos",
        "hp": 90,
        "atk": 75,
        "def": 85,
        "spa": 115,
        "spd": 90,
        "spe": 55,
        "weight": 61.5,
        "height": 1.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Plus",
            "Static"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 181,
            "evos": [],
            "alts": [
                "Ampharos-Mega"
            ],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bellossom",
        "hp": 75,
        "atk": 80,
        "def": 95,
        "spa": 90,
        "spd": 100,
        "spe": 50,
        "weight": 5.8,
        "height": 0.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Healer"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 182,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Marill",
        "hp": 70,
        "atk": 20,
        "def": 50,
        "spa": 20,
        "spd": 50,
        "spe": 40,
        "weight": 8.5,
        "height": 0.4,
        "types": [
            "Water",
            "Fairy"
        ],
        "abilities": [
            "Huge Power",
            "Sap Sipper",
            "Thick Fat"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 183,
            "evos": [
                "Azumarill"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Azumarill",
        "hp": 100,
        "atk": 50,
        "def": 80,
        "spa": 60,
        "spd": 80,
        "spe": 50,
        "weight": 28.5,
        "height": 0.8,
        "types": [
            "Water",
            "Fairy"
        ],
        "abilities": [
            "Huge Power",
            "Sap Sipper",
            "Thick Fat"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 184,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Jumpluff",
        "hp": 75,
        "atk": 55,
        "def": 70,
        "spa": 55,
        "spd": 95,
        "spe": 110,
        "weight": 3,
        "height": 0.8,
        "types": [
            "Grass",
            "Flying"
        ],
        "abilities": [
            "Chlorophyll",
            "Infiltrator",
            "Leaf Guard"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 189,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Snubbull",
        "hp": 60,
        "atk": 80,
        "def": 50,
        "spa": 40,
        "spd": 40,
        "spe": 30,
        "weight": 7.8,
        "height": 0.6,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Intimidate",
            "Rattled",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 209,
            "evos": [
                "Granbull"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Granbull",
        "hp": 90,
        "atk": 120,
        "def": 75,
        "spa": 60,
        "spd": 60,
        "spe": 45,
        "weight": 48.7,
        "height": 1.4,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Intimidate",
            "Quick Feet",
            "Rattled"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 210,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tyrogue",
        "hp": 35,
        "atk": 35,
        "def": 35,
        "spa": 35,
        "spd": 35,
        "spe": 35,
        "weight": 21,
        "height": 0.7,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "Steadfast",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 236,
            "evos": [
                "Hitmonchan",
                "Hitmonlee",
                "Hitmontop"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hitmontop",
        "hp": 50,
        "atk": 95,
        "def": 95,
        "spa": 35,
        "spd": 110,
        "spe": 70,
        "weight": 48,
        "height": 1.4,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Intimidate",
            "Steadfast",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 237,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Noctowl",
        "hp": 100,
        "atk": 50,
        "def": 50,
        "spa": 86,
        "spd": 96,
        "spe": 70,
        "weight": 40.8,
        "height": 1.6,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Insomnia",
            "Keen Eye",
            "Tinted Lens"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 164,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ariados",
        "hp": 70,
        "atk": 90,
        "def": 70,
        "spa": 60,
        "spd": 70,
        "spe": 40,
        "weight": 33.5,
        "height": 1.1,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Insomnia",
            "Sniper",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 168,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Qwilfish",
        "hp": 65,
        "atk": 95,
        "def": 85,
        "spa": 55,
        "spd": 55,
        "spe": 85,
        "weight": 3.9,
        "height": 0.5,
        "types": [
            "Water",
            "Poison"
        ],
        "abilities": [
            "Intimidate",
            "Poison Point",
            "Swift Swim"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 211,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magcargo",
        "hp": 60,
        "atk": 50,
        "def": 120,
        "spa": 90,
        "spd": 80,
        "spe": 30,
        "weight": 55,
        "height": 0.8,
        "types": [
            "Fire",
            "Rock"
        ],
        "abilities": [
            "Flame Body",
            "Magma Armor",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 219,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Corsola",
        "hp": 65,
        "atk": 55,
        "def": 95,
        "spa": 65,
        "spd": 95,
        "spe": 35,
        "weight": 5,
        "height": 0.6,
        "types": [
            "Water",
            "Rock"
        ],
        "abilities": [
            "Hustle",
            "Natural Cure",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 222,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mantine",
        "hp": 85,
        "atk": 40,
        "def": 70,
        "spa": 80,
        "spd": 140,
        "spe": 70,
        "weight": 220,
        "height": 2.1,
        "types": [
            "Water",
            "Flying"
        ],
        "abilities": [
            "Swift Swim",
            "Water Absorb",
            "Water Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 226,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Raikou",
        "hp": 90,
        "atk": 85,
        "def": 75,
        "spa": 115,
        "spd": 100,
        "spe": 115,
        "weight": 178,
        "height": 1.9,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Inner Focus",
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 243,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Entei",
        "hp": 115,
        "atk": 115,
        "def": 85,
        "spa": 90,
        "spd": 75,
        "spe": 100,
        "weight": 198,
        "height": 2.1,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Inner Focus",
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 244,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Suicune",
        "hp": 100,
        "atk": 75,
        "def": 115,
        "spa": 90,
        "spd": 115,
        "spe": 85,
        "weight": 187,
        "height": 2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Inner Focus",
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 245,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sentret",
        "hp": 35,
        "atk": 46,
        "def": 34,
        "spa": 35,
        "spd": 45,
        "spe": 20,
        "weight": 6,
        "height": 0.8,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Frisk",
            "Keen Eye",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 161,
            "evos": [
                "Furret"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Furret",
        "hp": 85,
        "atk": 76,
        "def": 64,
        "spa": 45,
        "spd": 55,
        "spe": 90,
        "weight": 32.5,
        "height": 1.8,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Frisk",
            "Keen Eye",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 162,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hoothoot",
        "hp": 60,
        "atk": 30,
        "def": 30,
        "spa": 36,
        "spd": 56,
        "spe": 50,
        "weight": 21.2,
        "height": 0.7,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Insomnia",
            "Keen Eye",
            "Tinted Lens"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 163,
            "evos": [
                "Noctowl"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ledyba",
        "hp": 40,
        "atk": 20,
        "def": 30,
        "spa": 40,
        "spd": 80,
        "spe": 55,
        "weight": 10.8,
        "height": 1,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Early Bird",
            "Rattled",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 165,
            "evos": [
                "Ledian"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ledian",
        "hp": 55,
        "atk": 35,
        "def": 50,
        "spa": 55,
        "spd": 110,
        "spe": 85,
        "weight": 35.6,
        "height": 1.4,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Early Bird",
            "Iron Fist",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 166,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spinarak",
        "hp": 40,
        "atk": 60,
        "def": 40,
        "spa": 40,
        "spd": 40,
        "spe": 30,
        "weight": 8.5,
        "height": 0.5,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Insomnia",
            "Sniper",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 167,
            "evos": [
                "Ariados"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Crobat",
        "hp": 85,
        "atk": 90,
        "def": 80,
        "spa": 70,
        "spd": 80,
        "spe": 130,
        "weight": 75,
        "height": 1.8,
        "types": [
            "Poison",
            "Flying"
        ],
        "abilities": [
            "Infiltrator",
            "Inner Focus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 169,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chinchou",
        "hp": 75,
        "atk": 38,
        "def": 38,
        "spa": 56,
        "spd": 56,
        "spe": 67,
        "weight": 12,
        "height": 0.5,
        "types": [
            "Water",
            "Electric"
        ],
        "abilities": [
            "Illuminate",
            "Volt Absorb",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 170,
            "evos": [
                "Lanturn"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lanturn",
        "hp": 125,
        "atk": 58,
        "def": 58,
        "spa": 76,
        "spd": 76,
        "spe": 67,
        "weight": 22.5,
        "height": 1.2,
        "types": [
            "Water",
            "Electric"
        ],
        "abilities": [
            "Illuminate",
            "Volt Absorb",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 171,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pichu",
        "hp": 20,
        "atk": 40,
        "def": 15,
        "spa": 35,
        "spd": 35,
        "spe": 60,
        "weight": 2,
        "height": 0.3,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Static"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 172,
            "evos": [
                "Pikachu"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Natu",
        "hp": 40,
        "atk": 50,
        "def": 45,
        "spa": 70,
        "spd": 45,
        "spe": 70,
        "weight": 2,
        "height": 0.2,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Early Bird",
            "Magic Bounce",
            "Synchronize"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 177,
            "evos": [
                "Xatu"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Xatu",
        "hp": 65,
        "atk": 75,
        "def": 70,
        "spa": 95,
        "spd": 70,
        "spe": 95,
        "weight": 15,
        "height": 1.5,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Early Bird",
            "Magic Bounce",
            "Synchronize"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 178,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mareep",
        "hp": 55,
        "atk": 40,
        "def": 40,
        "spa": 65,
        "spd": 45,
        "spe": 35,
        "weight": 7.8,
        "height": 0.6,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Plus",
            "Static"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 179,
            "evos": [
                "Flaaffy"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Flaaffy",
        "hp": 70,
        "atk": 55,
        "def": 55,
        "spa": 80,
        "spd": 60,
        "spe": 45,
        "weight": 13.3,
        "height": 0.8,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Plus",
            "Static"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 180,
            "evos": [
                "Ampharos"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sudowoodo",
        "hp": 70,
        "atk": 100,
        "def": 115,
        "spa": 30,
        "spd": 65,
        "spe": 30,
        "weight": 38,
        "height": 1.2,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Rattled",
            "Rock Head",
            "Sturdy"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 185,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Politoed",
        "hp": 90,
        "atk": 75,
        "def": 75,
        "spa": 90,
        "spd": 100,
        "spe": 70,
        "weight": 33.9,
        "height": 1.1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Damp",
            "Drizzle",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 186,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hoppip",
        "hp": 35,
        "atk": 35,
        "def": 40,
        "spa": 35,
        "spd": 55,
        "spe": 50,
        "weight": 0.5,
        "height": 0.4,
        "types": [
            "Grass",
            "Flying"
        ],
        "abilities": [
            "Chlorophyll",
            "Infiltrator",
            "Leaf Guard"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 187,
            "evos": [
                "Skiploom"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Skiploom",
        "hp": 55,
        "atk": 45,
        "def": 50,
        "spa": 45,
        "spd": 65,
        "spe": 80,
        "weight": 1,
        "height": 0.6,
        "types": [
            "Grass",
            "Flying"
        ],
        "abilities": [
            "Chlorophyll",
            "Infiltrator",
            "Leaf Guard"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 188,
            "evos": [
                "Jumpluff"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Aipom",
        "hp": 55,
        "atk": 70,
        "def": 55,
        "spa": 40,
        "spd": 55,
        "spe": 85,
        "weight": 11.5,
        "height": 0.8,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Pickup",
            "Run Away",
            "Skill Link"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 190,
            "evos": [
                "Ambipom"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sunkern",
        "hp": 30,
        "atk": 30,
        "def": 30,
        "spa": 30,
        "spd": 30,
        "spe": 30,
        "weight": 1.8,
        "height": 0.3,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Early Bird",
            "Solar Power"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 191,
            "evos": [
                "Sunflora"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sunflora",
        "hp": 75,
        "atk": 75,
        "def": 55,
        "spa": 105,
        "spd": 85,
        "spe": 30,
        "weight": 8.5,
        "height": 0.8,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Early Bird",
            "Solar Power"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 192,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Yanma",
        "hp": 65,
        "atk": 65,
        "def": 45,
        "spa": 75,
        "spd": 45,
        "spe": 95,
        "weight": 38,
        "height": 1.2,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Compound Eyes",
            "Frisk",
            "Speed Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 193,
            "evos": [
                "Yanmega"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wooper",
        "hp": 55,
        "atk": 45,
        "def": 45,
        "spa": 25,
        "spd": 25,
        "spe": 15,
        "weight": 8.5,
        "height": 0.4,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Damp",
            "Unaware",
            "Water Absorb"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 194,
            "evos": [
                "Quagsire"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Quagsire",
        "hp": 95,
        "atk": 85,
        "def": 85,
        "spa": 65,
        "spd": 65,
        "spe": 35,
        "weight": 75,
        "height": 1.4,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Damp",
            "Unaware",
            "Water Absorb"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 195,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Espeon",
        "hp": 65,
        "atk": 65,
        "def": 60,
        "spa": 130,
        "spd": 95,
        "spe": 110,
        "weight": 26.5,
        "height": 0.9,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Magic Bounce",
            "Synchronize"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 196,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Umbreon",
        "hp": 95,
        "atk": 65,
        "def": 110,
        "spa": 60,
        "spd": 130,
        "spe": 65,
        "weight": 27,
        "height": 1,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Inner Focus",
            "Synchronize"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 197,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Murkrow",
        "hp": 60,
        "atk": 85,
        "def": 42,
        "spa": 85,
        "spd": 42,
        "spe": 91,
        "weight": 2.1,
        "height": 0.5,
        "types": [
            "Dark",
            "Flying"
        ],
        "abilities": [
            "Insomnia",
            "Prankster",
            "Super Luck"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 198,
            "evos": [
                "Honchkrow"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slowking",
        "hp": 95,
        "atk": 75,
        "def": 80,
        "spa": 100,
        "spd": 110,
        "spe": 30,
        "weight": 79.5,
        "height": 2,
        "types": [
            "Water",
            "Psychic"
        ],
        "abilities": [
            "Oblivious",
            "Own Tempo",
            "Regenerator"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 199,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Misdreavus",
        "hp": 60,
        "atk": 60,
        "def": 60,
        "spa": 85,
        "spd": 85,
        "spe": 85,
        "weight": 1,
        "height": 0.7,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 200,
            "evos": [
                "Mismagius"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wobbuffet",
        "hp": 190,
        "atk": 33,
        "def": 58,
        "spa": 33,
        "spd": 58,
        "spe": 33,
        "weight": 28.5,
        "height": 1.3,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Shadow Tag",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 202,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Girafarig",
        "hp": 70,
        "atk": 80,
        "def": 65,
        "spa": 90,
        "spd": 65,
        "spe": 85,
        "weight": 41.5,
        "height": 1.5,
        "types": [
            "Normal",
            "Psychic"
        ],
        "abilities": [
            "Early Bird",
            "Inner Focus",
            "Sap Sipper"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 203,
            "evos": [
                "Farigiraf"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pineco",
        "hp": 50,
        "atk": 65,
        "def": 90,
        "spa": 35,
        "spd": 35,
        "spe": 15,
        "weight": 7.2,
        "height": 0.6,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Overcoat",
            "Sturdy"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 204,
            "evos": [
                "Forretress"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Forretress",
        "hp": 75,
        "atk": 90,
        "def": 140,
        "spa": 60,
        "spd": 60,
        "spe": 40,
        "weight": 125.8,
        "height": 1.2,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Overcoat",
            "Sturdy"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 205,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dunsparce",
        "hp": 100,
        "atk": 70,
        "def": 70,
        "spa": 65,
        "spd": 65,
        "spe": 45,
        "weight": 14,
        "height": 1.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Rattled",
            "Run Away",
            "Serene Grace"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 206,
            "evos": [
                "Dudunsparce",
                "Dudunsparce-Three-Segment"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gligar",
        "hp": 65,
        "atk": 75,
        "def": 105,
        "spa": 35,
        "spd": 65,
        "spe": 85,
        "weight": 64.8,
        "height": 1.1,
        "types": [
            "Ground",
            "Flying"
        ],
        "abilities": [
            "Hyper Cutter",
            "Immunity",
            "Sand Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 207,
            "evos": [
                "Gliscor"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Steelix",
        "hp": 75,
        "atk": 85,
        "def": 200,
        "spa": 55,
        "spd": 65,
        "spe": 30,
        "weight": 400,
        "height": 9.2,
        "types": [
            "Steel",
            "Ground"
        ],
        "abilities": [
            "Rock Head",
            "Sheer Force",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 208,
            "evos": [],
            "alts": [
                "Steelix-Mega"
            ],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Scizor",
        "hp": 70,
        "atk": 130,
        "def": 100,
        "spa": 55,
        "spd": 80,
        "spe": 65,
        "weight": 118,
        "height": 1.8,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Light Metal",
            "Swarm",
            "Technician"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 212,
            "evos": [],
            "alts": [
                "Scizor-Mega"
            ],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shuckle",
        "hp": 20,
        "atk": 10,
        "def": 230,
        "spa": 10,
        "spd": 230,
        "spe": 5,
        "weight": 20.5,
        "height": 0.6,
        "types": [
            "Bug",
            "Rock"
        ],
        "abilities": [
            "Contrary",
            "Gluttony",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 213,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Heracross",
        "hp": 80,
        "atk": 125,
        "def": 75,
        "spa": 40,
        "spd": 95,
        "spe": 85,
        "weight": 54,
        "height": 1.5,
        "types": [
            "Bug",
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "Moxie",
            "Swarm"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 214,
            "evos": [],
            "alts": [
                "Heracross-Mega"
            ],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sneasel",
        "hp": 55,
        "atk": 95,
        "def": 55,
        "spa": 35,
        "spd": 75,
        "spe": 115,
        "weight": 28,
        "height": 0.9,
        "types": [
            "Dark",
            "Ice"
        ],
        "abilities": [
            "Inner Focus",
            "Keen Eye",
            "Pickpocket"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 215,
            "evos": [
                "Weavile"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Teddiursa",
        "hp": 60,
        "atk": 80,
        "def": 50,
        "spa": 50,
        "spd": 50,
        "spe": 40,
        "weight": 8.8,
        "height": 0.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Honey Gather",
            "Pickup",
            "Quick Feet"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 216,
            "evos": [
                "Ursaring"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ursaring",
        "hp": 90,
        "atk": 130,
        "def": 75,
        "spa": 75,
        "spd": 75,
        "spe": 55,
        "weight": 125.8,
        "height": 1.8,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Guts",
            "Quick Feet",
            "Unnerve"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 217,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slugma",
        "hp": 40,
        "atk": 40,
        "def": 40,
        "spa": 70,
        "spd": 40,
        "spe": 20,
        "weight": 35,
        "height": 0.7,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Magma Armor",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 218,
            "evos": [
                "Magcargo"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swinub",
        "hp": 50,
        "atk": 50,
        "def": 40,
        "spa": 30,
        "spd": 30,
        "spe": 50,
        "weight": 6.5,
        "height": 0.4,
        "types": [
            "Ice",
            "Ground"
        ],
        "abilities": [
            "Oblivious",
            "Snow Cloak",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 220,
            "evos": [
                "Piloswine"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Piloswine",
        "hp": 100,
        "atk": 100,
        "def": 80,
        "spa": 60,
        "spd": 60,
        "spe": 50,
        "weight": 55.8,
        "height": 1.1,
        "types": [
            "Ice",
            "Ground"
        ],
        "abilities": [
            "Oblivious",
            "Snow Cloak",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 221,
            "evos": [
                "Mamoswine"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Remoraid",
        "hp": 35,
        "atk": 65,
        "def": 35,
        "spa": 65,
        "spd": 35,
        "spe": 65,
        "weight": 12,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hustle",
            "Moody",
            "Sniper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 223,
            "evos": [
                "Octillery"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Octillery",
        "hp": 75,
        "atk": 105,
        "def": 75,
        "spa": 105,
        "spd": 75,
        "spe": 45,
        "weight": 28.5,
        "height": 0.9,
        "types": [
            "Water"
        ],
        "abilities": [
            "Moody",
            "Sniper",
            "Suction Cups"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 224,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Delibird",
        "hp": 45,
        "atk": 55,
        "def": 45,
        "spa": 65,
        "spd": 45,
        "spe": 75,
        "weight": 16,
        "height": 0.9,
        "types": [
            "Ice",
            "Flying"
        ],
        "abilities": [
            "Hustle",
            "Insomnia",
            "Vital Spirit"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 225,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Skarmory",
        "hp": 65,
        "atk": 80,
        "def": 140,
        "spa": 40,
        "spd": 70,
        "spe": 70,
        "weight": 50.5,
        "height": 1.7,
        "types": [
            "Steel",
            "Flying"
        ],
        "abilities": [
            "Keen Eye",
            "Sturdy",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 227,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Houndour",
        "hp": 45,
        "atk": 60,
        "def": 30,
        "spa": 80,
        "spd": 50,
        "spe": 65,
        "weight": 10.8,
        "height": 0.6,
        "types": [
            "Dark",
            "Fire"
        ],
        "abilities": [
            "Early Bird",
            "Flash Fire",
            "Unnerve"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 228,
            "evos": [
                "Houndoom"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Houndoom",
        "hp": 75,
        "atk": 90,
        "def": 50,
        "spa": 110,
        "spd": 80,
        "spe": 95,
        "weight": 35,
        "height": 1.4,
        "types": [
            "Dark",
            "Fire"
        ],
        "abilities": [
            "Early Bird",
            "Flash Fire",
            "Unnerve"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 229,
            "evos": [],
            "alts": [
                "Houndoom-Mega"
            ],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kingdra",
        "hp": 75,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 85,
        "weight": 152,
        "height": 1.8,
        "types": [
            "Water",
            "Dragon"
        ],
        "abilities": [
            "Damp",
            "Sniper",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 230,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Phanpy",
        "hp": 90,
        "atk": 60,
        "def": 60,
        "spa": 40,
        "spd": 40,
        "spe": 40,
        "weight": 33.5,
        "height": 0.5,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Pickup",
            "Sand Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 231,
            "evos": [
                "Donphan"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Donphan",
        "hp": 90,
        "atk": 120,
        "def": 120,
        "spa": 60,
        "spd": 60,
        "spe": 50,
        "weight": 120,
        "height": 1.1,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Veil",
            "Sturdy"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 232,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Porygon2",
        "hp": 85,
        "atk": 80,
        "def": 90,
        "spa": 105,
        "spd": 95,
        "spe": 60,
        "weight": 32.5,
        "height": 0.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Analytic",
            "Download",
            "Trace"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 233,
            "evos": [
                "Porygon-Z"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stantler",
        "hp": 73,
        "atk": 95,
        "def": 62,
        "spa": 85,
        "spd": 65,
        "spe": 85,
        "weight": 71.2,
        "height": 1.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Frisk",
            "Intimidate",
            "Sap Sipper"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 234,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Smeargle",
        "hp": 55,
        "atk": 20,
        "def": 35,
        "spa": 20,
        "spd": 45,
        "spe": 75,
        "weight": 58,
        "height": 1.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Moody",
            "Own Tempo",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 235,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Smoochum",
        "hp": 45,
        "atk": 30,
        "def": 15,
        "spa": 85,
        "spd": 65,
        "spe": 65,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Ice",
            "Psychic"
        ],
        "abilities": [
            "Forewarn",
            "Hydration",
            "Oblivious"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 238,
            "evos": [
                "Jynx"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Elekid",
        "hp": 45,
        "atk": 63,
        "def": 37,
        "spa": 65,
        "spd": 55,
        "spe": 95,
        "weight": 23.5,
        "height": 0.6,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 239,
            "evos": [
                "Electabuzz"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magby",
        "hp": 45,
        "atk": 75,
        "def": 37,
        "spa": 70,
        "spd": 55,
        "spe": 83,
        "weight": 21.4,
        "height": 0.7,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 240,
            "evos": [
                "Magmar"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Miltank",
        "hp": 95,
        "atk": 80,
        "def": 105,
        "spa": 40,
        "spd": 70,
        "spe": 100,
        "weight": 75.5,
        "height": 1.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Sap Sipper",
            "Scrappy",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 241,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Blissey",
        "hp": 255,
        "atk": 10,
        "def": 10,
        "spa": 75,
        "spd": 135,
        "spe": 55,
        "weight": 46.8,
        "height": 1.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Healer",
            "Natural Cure",
            "Serene Grace"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 242,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Larvitar",
        "hp": 50,
        "atk": 64,
        "def": 50,
        "spa": 45,
        "spd": 50,
        "spe": 41,
        "weight": 72,
        "height": 0.6,
        "types": [
            "Rock",
            "Ground"
        ],
        "abilities": [
            "Guts",
            "Sand Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 246,
            "evos": [
                "Pupitar"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pupitar",
        "hp": 70,
        "atk": 84,
        "def": 70,
        "spa": 65,
        "spd": 70,
        "spe": 51,
        "weight": 152,
        "height": 1.2,
        "types": [
            "Rock",
            "Ground"
        ],
        "abilities": [
            "Shed Skin"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 247,
            "evos": [
                "Tyranitar"
            ],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tyranitar",
        "hp": 100,
        "atk": 134,
        "def": 110,
        "spa": 95,
        "spd": 100,
        "spe": 61,
        "weight": 202,
        "height": 2,
        "types": [
            "Rock",
            "Dark"
        ],
        "abilities": [
            "Sand Stream",
            "Unnerve"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 248,
            "evos": [],
            "alts": [
                "Tyranitar-Mega"
            ],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lugia",
        "hp": 106,
        "atk": 90,
        "def": 130,
        "spa": 90,
        "spd": 154,
        "spe": 110,
        "weight": 216,
        "height": 5.2,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Multiscale",
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 249,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ho-Oh",
        "hp": 106,
        "atk": 130,
        "def": 90,
        "spa": 110,
        "spd": 154,
        "spe": 90,
        "weight": 199,
        "height": 3.8,
        "types": [
            "Fire",
            "Flying"
        ],
        "abilities": [
            "Pressure",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 250,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Celebi",
        "hp": 100,
        "atk": 100,
        "def": 100,
        "spa": 100,
        "spd": 100,
        "spe": 100,
        "weight": 5,
        "height": 0.6,
        "types": [
            "Psychic",
            "Grass"
        ],
        "abilities": [
            "Natural Cure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 251,
            "evos": [],
            "alts": [],
            "genfamily": [
                "GS",
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Milotic",
        "hp": 95,
        "atk": 60,
        "def": 79,
        "spa": 100,
        "spd": 125,
        "spe": 81,
        "weight": 162,
        "height": 6.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Competitive",
            "Cute Charm",
            "Marvel Scale"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 350,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Treecko",
        "hp": 40,
        "atk": 45,
        "def": 35,
        "spa": 65,
        "spd": 55,
        "spe": 70,
        "weight": 5,
        "height": 0.5,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Overgrow",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 252,
            "evos": [
                "Grovyle"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grovyle",
        "hp": 50,
        "atk": 65,
        "def": 45,
        "spa": 85,
        "spd": 65,
        "spe": 95,
        "weight": 21.6,
        "height": 0.9,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Overgrow",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 253,
            "evos": [
                "Sceptile"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sceptile",
        "hp": 70,
        "atk": 85,
        "def": 65,
        "spa": 105,
        "spd": 85,
        "spe": 120,
        "weight": 52.2,
        "height": 1.7,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Overgrow",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 254,
            "evos": [],
            "alts": [
                "Sceptile-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Torchic",
        "hp": 45,
        "atk": 60,
        "def": 40,
        "spa": 70,
        "spd": 50,
        "spe": 45,
        "weight": 2.5,
        "height": 0.4,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Speed Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 255,
            "evos": [
                "Combusken"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Combusken",
        "hp": 60,
        "atk": 85,
        "def": 60,
        "spa": 85,
        "spd": 60,
        "spe": 55,
        "weight": 19.5,
        "height": 0.9,
        "types": [
            "Fire",
            "Fighting"
        ],
        "abilities": [
            "Blaze",
            "Speed Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 256,
            "evos": [
                "Blaziken"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Blaziken",
        "hp": 80,
        "atk": 120,
        "def": 70,
        "spa": 110,
        "spd": 70,
        "spe": 80,
        "weight": 52,
        "height": 1.9,
        "types": [
            "Fire",
            "Fighting"
        ],
        "abilities": [
            "Blaze",
            "Speed Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 257,
            "evos": [],
            "alts": [
                "Blaziken-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mudkip",
        "hp": 50,
        "atk": 70,
        "def": 50,
        "spa": 50,
        "spd": 50,
        "spe": 40,
        "weight": 7.6,
        "height": 0.4,
        "types": [
            "Water"
        ],
        "abilities": [
            "Damp",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 258,
            "evos": [
                "Marshtomp"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Marshtomp",
        "hp": 70,
        "atk": 85,
        "def": 70,
        "spa": 60,
        "spd": 70,
        "spe": 50,
        "weight": 28,
        "height": 0.7,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Damp",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 259,
            "evos": [
                "Swampert"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swampert",
        "hp": 100,
        "atk": 110,
        "def": 90,
        "spa": 85,
        "spd": 90,
        "spe": 60,
        "weight": 81.9,
        "height": 1.5,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Damp",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 260,
            "evos": [],
            "alts": [
                "Swampert-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Beautifly",
        "hp": 60,
        "atk": 70,
        "def": 50,
        "spa": 100,
        "spd": 50,
        "spe": 65,
        "weight": 28.4,
        "height": 1,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Rivalry",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 267,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ralts",
        "hp": 28,
        "atk": 25,
        "def": 25,
        "spa": 45,
        "spd": 35,
        "spe": 40,
        "weight": 6.6,
        "height": 0.4,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Synchronize",
            "Telepathy",
            "Trace"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 280,
            "evos": [
                "Kirlia"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kirlia",
        "hp": 38,
        "atk": 35,
        "def": 35,
        "spa": 65,
        "spd": 55,
        "spe": 50,
        "weight": 20.2,
        "height": 0.8,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Synchronize",
            "Telepathy",
            "Trace"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 281,
            "evos": [
                "Gallade",
                "Gardevoir"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gardevoir",
        "hp": 68,
        "atk": 65,
        "def": 65,
        "spa": 125,
        "spd": 115,
        "spe": 80,
        "weight": 48.4,
        "height": 1.6,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Synchronize",
            "Telepathy",
            "Trace"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 282,
            "evos": [],
            "alts": [
                "Gardevoir-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Exploud",
        "hp": 104,
        "atk": 91,
        "def": 63,
        "spa": 91,
        "spd": 73,
        "spe": 68,
        "weight": 84,
        "height": 1.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Scrappy",
            "Soundproof"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 295,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Azurill",
        "hp": 50,
        "atk": 20,
        "def": 40,
        "spa": 20,
        "spd": 40,
        "spe": 20,
        "weight": 2,
        "height": 0.2,
        "types": [
            "Normal",
            "Fairy"
        ],
        "abilities": [
            "Huge Power",
            "Sap Sipper",
            "Thick Fat"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 298,
            "evos": [
                "Marill"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mawile",
        "hp": 50,
        "atk": 85,
        "def": 85,
        "spa": 55,
        "spd": 55,
        "spe": 50,
        "weight": 11.5,
        "height": 0.6,
        "types": [
            "Steel",
            "Fairy"
        ],
        "abilities": [
            "Hyper Cutter",
            "Intimidate",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 303,
            "evos": [],
            "alts": [
                "Mawile-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Plusle",
        "hp": 60,
        "atk": 50,
        "def": 40,
        "spa": 85,
        "spd": 75,
        "spe": 95,
        "weight": 4.2,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Plus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 311,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Minun",
        "hp": 60,
        "atk": 40,
        "def": 50,
        "spa": 75,
        "spd": 85,
        "spe": 95,
        "weight": 4.2,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Minus",
            "Volt Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 312,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kecleon",
        "hp": 60,
        "atk": 90,
        "def": 70,
        "spa": 60,
        "spd": 120,
        "spe": 40,
        "weight": 22,
        "height": 1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Color Change",
            "Protean"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 352,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Feebas",
        "hp": 20,
        "atk": 15,
        "def": 20,
        "spa": 10,
        "spd": 55,
        "spe": 80,
        "weight": 7.4,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Adaptability",
            "Oblivious",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 349,
            "evos": [
                "Milotic"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Duskull",
        "hp": 20,
        "atk": 40,
        "def": 90,
        "spa": 30,
        "spd": 90,
        "spe": 25,
        "weight": 15,
        "height": 0.8,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Frisk",
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 355,
            "evos": [
                "Dusclops"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dusclops",
        "hp": 40,
        "atk": 70,
        "def": 130,
        "spa": 60,
        "spd": 130,
        "spe": 25,
        "weight": 30.6,
        "height": 1.6,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Frisk",
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 356,
            "evos": [
                "Dusknoir"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Regirock",
        "hp": 80,
        "atk": 100,
        "def": 200,
        "spa": 50,
        "spd": 100,
        "spe": 50,
        "weight": 230,
        "height": 1.7,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Clear Body",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 377,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Regice",
        "hp": 80,
        "atk": 50,
        "def": 100,
        "spa": 100,
        "spd": 200,
        "spe": 50,
        "weight": 175,
        "height": 1.8,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Clear Body",
            "Ice Body"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 378,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Registeel",
        "hp": 80,
        "atk": 75,
        "def": 150,
        "spa": 75,
        "spd": 150,
        "spe": 50,
        "weight": 205,
        "height": 1.9,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Clear Body",
            "Light Metal"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 379,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swellow",
        "hp": 60,
        "atk": 85,
        "def": 60,
        "spa": 75,
        "spd": 50,
        "spe": 125,
        "weight": 19.8,
        "height": 0.7,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Guts",
            "Scrappy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 277,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wingull",
        "hp": 40,
        "atk": 30,
        "def": 30,
        "spa": 55,
        "spd": 30,
        "spe": 85,
        "weight": 9.5,
        "height": 0.6,
        "types": [
            "Water",
            "Flying"
        ],
        "abilities": [
            "Hydration",
            "Keen Eye",
            "Rain Dish"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 278,
            "evos": [
                "Pelipper"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pelipper",
        "hp": 60,
        "atk": 50,
        "def": 100,
        "spa": 95,
        "spd": 70,
        "spe": 65,
        "weight": 28,
        "height": 1.2,
        "types": [
            "Water",
            "Flying"
        ],
        "abilities": [
            "Drizzle",
            "Keen Eye",
            "Rain Dish"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 279,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Masquerain",
        "hp": 70,
        "atk": 60,
        "def": 62,
        "spa": 100,
        "spd": 82,
        "spe": 80,
        "weight": 3.6,
        "height": 0.8,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Intimidate",
            "Unnerve"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 284,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Delcatty",
        "hp": 70,
        "atk": 65,
        "def": 65,
        "spa": 55,
        "spd": 55,
        "spe": 90,
        "weight": 32.6,
        "height": 1.1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cute Charm",
            "Normalize",
            "Wonder Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 301,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Volbeat",
        "hp": 65,
        "atk": 73,
        "def": 75,
        "spa": 47,
        "spd": 85,
        "spe": 85,
        "weight": 17.7,
        "height": 0.7,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Illuminate",
            "Prankster",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 313,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Illumise",
        "hp": 65,
        "atk": 47,
        "def": 75,
        "spa": 73,
        "spd": 85,
        "spe": 85,
        "weight": 17.7,
        "height": 0.6,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Oblivious",
            "Prankster",
            "Tinted Lens"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 314,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Torkoal",
        "hp": 70,
        "atk": 85,
        "def": 140,
        "spa": 85,
        "spd": 70,
        "spe": 20,
        "weight": 80.4,
        "height": 0.5,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Drought",
            "Shell Armor",
            "White Smoke"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 324,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lunatone",
        "hp": 90,
        "atk": 55,
        "def": 65,
        "spa": 95,
        "spd": 85,
        "spe": 70,
        "weight": 168,
        "height": 1,
        "types": [
            "Rock",
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 337,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Solrock",
        "hp": 90,
        "atk": 95,
        "def": 85,
        "spa": 55,
        "spd": 65,
        "spe": 70,
        "weight": 154,
        "height": 1.2,
        "types": [
            "Rock",
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 338,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Castform",
        "hp": 70,
        "atk": 70,
        "def": 70,
        "spa": 70,
        "spd": 70,
        "spe": 70,
        "weight": 0.8,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Forecast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 351,
            "evos": [],
            "alts": [
                "Castform-Snowy",
                "Castform-Rainy",
                "Castform-Sunny"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chimecho",
        "hp": 75,
        "atk": 50,
        "def": 80,
        "spa": 95,
        "spd": 90,
        "spe": 65,
        "weight": 1,
        "height": 0.6,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 358,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Trapinch",
        "hp": 45,
        "atk": 100,
        "def": 45,
        "spa": 45,
        "spd": 45,
        "spe": 10,
        "weight": 15,
        "height": 0.7,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Arena Trap",
            "Hyper Cutter",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 328,
            "evos": [
                "Vibrava"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vibrava",
        "hp": 50,
        "atk": 70,
        "def": 50,
        "spa": 50,
        "spd": 50,
        "spe": 70,
        "weight": 15.3,
        "height": 1.1,
        "types": [
            "Ground",
            "Dragon"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 329,
            "evos": [
                "Flygon"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Flygon",
        "hp": 80,
        "atk": 100,
        "def": 80,
        "spa": 80,
        "spd": 80,
        "spe": 100,
        "weight": 82,
        "height": 2,
        "types": [
            "Ground",
            "Dragon"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 330,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Poochyena",
        "hp": 35,
        "atk": 55,
        "def": 35,
        "spa": 30,
        "spd": 30,
        "spe": 35,
        "weight": 13.6,
        "height": 0.5,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Quick Feet",
            "Rattled",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 261,
            "evos": [
                "Mightyena"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mightyena",
        "hp": 70,
        "atk": 90,
        "def": 70,
        "spa": 60,
        "spd": 60,
        "spe": 70,
        "weight": 37,
        "height": 1,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Intimidate",
            "Moxie",
            "Quick Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 262,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zigzagoon",
        "hp": 38,
        "atk": 30,
        "def": 41,
        "spa": 30,
        "spd": 41,
        "spe": 60,
        "weight": 17.5,
        "height": 0.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Pickup",
            "Quick Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 263,
            "evos": [
                "Linoone"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Linoone",
        "hp": 78,
        "atk": 70,
        "def": 61,
        "spa": 50,
        "spd": 61,
        "spe": 100,
        "weight": 32.5,
        "height": 0.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Pickup",
            "Quick Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 264,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wurmple",
        "hp": 45,
        "atk": 45,
        "def": 35,
        "spa": 20,
        "spd": 30,
        "spe": 20,
        "weight": 3.6,
        "height": 0.3,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Run Away",
            "Shield Dust"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 265,
            "evos": [
                "Cascoon",
                "Silcoon"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silcoon",
        "hp": 50,
        "atk": 35,
        "def": 55,
        "spa": 25,
        "spd": 25,
        "spe": 15,
        "weight": 10,
        "height": 0.6,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Shed Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 266,
            "evos": [
                "Beautifly"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cascoon",
        "hp": 50,
        "atk": 35,
        "def": 55,
        "spa": 25,
        "spd": 25,
        "spe": 15,
        "weight": 11.5,
        "height": 0.7,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Shed Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 268,
            "evos": [
                "Dustox"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dustox",
        "hp": 60,
        "atk": 50,
        "def": 70,
        "spa": 50,
        "spd": 90,
        "spe": 65,
        "weight": 31.6,
        "height": 1.2,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Compound Eyes",
            "Shield Dust"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 269,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lotad",
        "hp": 40,
        "atk": 30,
        "def": 30,
        "spa": 40,
        "spd": 50,
        "spe": 30,
        "weight": 2.6,
        "height": 0.5,
        "types": [
            "Water",
            "Grass"
        ],
        "abilities": [
            "Own Tempo",
            "Rain Dish",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 270,
            "evos": [
                "Lombre"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lombre",
        "hp": 60,
        "atk": 50,
        "def": 50,
        "spa": 60,
        "spd": 70,
        "spe": 50,
        "weight": 32.5,
        "height": 1.2,
        "types": [
            "Water",
            "Grass"
        ],
        "abilities": [
            "Own Tempo",
            "Rain Dish",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 271,
            "evos": [
                "Ludicolo"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ludicolo",
        "hp": 80,
        "atk": 70,
        "def": 70,
        "spa": 90,
        "spd": 100,
        "spe": 70,
        "weight": 55,
        "height": 1.5,
        "types": [
            "Water",
            "Grass"
        ],
        "abilities": [
            "Own Tempo",
            "Rain Dish",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 272,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Seedot",
        "hp": 40,
        "atk": 40,
        "def": 50,
        "spa": 30,
        "spd": 30,
        "spe": 30,
        "weight": 4,
        "height": 0.5,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Early Bird",
            "Pickpocket"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 273,
            "evos": [
                "Nuzleaf"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nuzleaf",
        "hp": 70,
        "atk": 70,
        "def": 40,
        "spa": 60,
        "spd": 40,
        "spe": 60,
        "weight": 28,
        "height": 1,
        "types": [
            "Grass",
            "Dark"
        ],
        "abilities": [
            "Chlorophyll",
            "Early Bird",
            "Pickpocket"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 274,
            "evos": [
                "Shiftry"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shiftry",
        "hp": 90,
        "atk": 100,
        "def": 60,
        "spa": 90,
        "spd": 60,
        "spe": 80,
        "weight": 59.6,
        "height": 1.3,
        "types": [
            "Grass",
            "Dark"
        ],
        "abilities": [
            "Chlorophyll",
            "Early Bird",
            "Pickpocket"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 275,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Taillow",
        "hp": 40,
        "atk": 55,
        "def": 30,
        "spa": 30,
        "spd": 30,
        "spe": 85,
        "weight": 2.3,
        "height": 0.3,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Guts",
            "Scrappy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 276,
            "evos": [
                "Swellow"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Surskit",
        "hp": 40,
        "atk": 30,
        "def": 32,
        "spa": 50,
        "spd": 52,
        "spe": 65,
        "weight": 1.7,
        "height": 0.5,
        "types": [
            "Bug",
            "Water"
        ],
        "abilities": [
            "Rain Dish",
            "Swift Swim"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 283,
            "evos": [
                "Masquerain"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shroomish",
        "hp": 60,
        "atk": 40,
        "def": 60,
        "spa": 40,
        "spd": 60,
        "spe": 35,
        "weight": 4.5,
        "height": 0.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Effect Spore",
            "Poison Heal",
            "Quick Feet"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 285,
            "evos": [
                "Breloom"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Breloom",
        "hp": 60,
        "atk": 130,
        "def": 80,
        "spa": 60,
        "spd": 60,
        "spe": 70,
        "weight": 39.2,
        "height": 1.2,
        "types": [
            "Grass",
            "Fighting"
        ],
        "abilities": [
            "Effect Spore",
            "Poison Heal",
            "Technician"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 286,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slakoth",
        "hp": 60,
        "atk": 60,
        "def": 60,
        "spa": 35,
        "spd": 35,
        "spe": 30,
        "weight": 24,
        "height": 0.8,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Truant"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 287,
            "evos": [
                "Vigoroth"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vigoroth",
        "hp": 80,
        "atk": 80,
        "def": 80,
        "spa": 55,
        "spd": 55,
        "spe": 90,
        "weight": 46.5,
        "height": 1.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Vital Spirit"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 288,
            "evos": [
                "Slaking"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slaking",
        "hp": 150,
        "atk": 160,
        "def": 100,
        "spa": 95,
        "spd": 65,
        "spe": 100,
        "weight": 130.5,
        "height": 2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Truant"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 289,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nincada",
        "hp": 31,
        "atk": 45,
        "def": 90,
        "spa": 30,
        "spd": 30,
        "spe": 40,
        "weight": 5.5,
        "height": 0.5,
        "types": [
            "Bug",
            "Ground"
        ],
        "abilities": [
            "Compound Eyes",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 290,
            "evos": [
                "Ninjask",
                "Shedinja"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ninjask",
        "hp": 61,
        "atk": 90,
        "def": 45,
        "spa": 50,
        "spd": 50,
        "spe": 160,
        "weight": 12,
        "height": 0.8,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Infiltrator",
            "Speed Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 291,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shedinja",
        "hp": 1,
        "atk": 90,
        "def": 45,
        "spa": 30,
        "spd": 30,
        "spe": 40,
        "weight": 1.2,
        "height": 0.8,
        "types": [
            "Bug",
            "Ghost"
        ],
        "abilities": [
            "Wonder Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 292,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Whismur",
        "hp": 64,
        "atk": 51,
        "def": 23,
        "spa": 51,
        "spd": 23,
        "spe": 28,
        "weight": 16.3,
        "height": 0.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Rattled",
            "Soundproof"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 293,
            "evos": [
                "Loudred"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Loudred",
        "hp": 84,
        "atk": 71,
        "def": 43,
        "spa": 71,
        "spd": 43,
        "spe": 48,
        "weight": 40.5,
        "height": 1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Scrappy",
            "Soundproof"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 294,
            "evos": [
                "Exploud"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Makuhita",
        "hp": 72,
        "atk": 60,
        "def": 30,
        "spa": 20,
        "spd": 30,
        "spe": 25,
        "weight": 86.4,
        "height": 1,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "Sheer Force",
            "Thick Fat"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 296,
            "evos": [
                "Hariyama"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hariyama",
        "hp": 144,
        "atk": 120,
        "def": 60,
        "spa": 40,
        "spd": 60,
        "spe": 50,
        "weight": 253.8,
        "height": 2.3,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "Sheer Force",
            "Thick Fat"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 297,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nosepass",
        "hp": 30,
        "atk": 45,
        "def": 135,
        "spa": 45,
        "spd": 90,
        "spe": 30,
        "weight": 97,
        "height": 1,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Magnet Pull",
            "Sand Force",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 299,
            "evos": [
                "Probopass"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Skitty",
        "hp": 50,
        "atk": 45,
        "def": 45,
        "spa": 35,
        "spd": 35,
        "spe": 50,
        "weight": 11,
        "height": 0.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cute Charm",
            "Normalize",
            "Wonder Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 300,
            "evos": [
                "Delcatty"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sableye",
        "hp": 50,
        "atk": 75,
        "def": 75,
        "spa": 65,
        "spd": 65,
        "spe": 50,
        "weight": 11,
        "height": 0.5,
        "types": [
            "Dark",
            "Ghost"
        ],
        "abilities": [
            "Keen Eye",
            "Prankster",
            "Stall"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 302,
            "evos": [],
            "alts": [
                "Sableye-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Aron",
        "hp": 50,
        "atk": 70,
        "def": 100,
        "spa": 40,
        "spd": 40,
        "spe": 30,
        "weight": 60,
        "height": 0.4,
        "types": [
            "Steel",
            "Rock"
        ],
        "abilities": [
            "Heavy Metal",
            "Rock Head",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 304,
            "evos": [
                "Lairon"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lairon",
        "hp": 60,
        "atk": 90,
        "def": 140,
        "spa": 50,
        "spd": 50,
        "spe": 40,
        "weight": 120,
        "height": 0.9,
        "types": [
            "Steel",
            "Rock"
        ],
        "abilities": [
            "Heavy Metal",
            "Rock Head",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 305,
            "evos": [
                "Aggron"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Aggron",
        "hp": 70,
        "atk": 110,
        "def": 180,
        "spa": 60,
        "spd": 60,
        "spe": 50,
        "weight": 360,
        "height": 2.1,
        "types": [
            "Steel",
            "Rock"
        ],
        "abilities": [
            "Heavy Metal",
            "Rock Head",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 306,
            "evos": [],
            "alts": [
                "Aggron-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meditite",
        "hp": 30,
        "atk": 40,
        "def": 55,
        "spa": 40,
        "spd": 55,
        "spe": 60,
        "weight": 11.2,
        "height": 0.6,
        "types": [
            "Fighting",
            "Psychic"
        ],
        "abilities": [
            "Pure Power",
            "Telepathy"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 307,
            "evos": [
                "Medicham"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Medicham",
        "hp": 60,
        "atk": 60,
        "def": 75,
        "spa": 60,
        "spd": 75,
        "spe": 80,
        "weight": 31.5,
        "height": 1.3,
        "types": [
            "Fighting",
            "Psychic"
        ],
        "abilities": [
            "Pure Power",
            "Telepathy"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 308,
            "evos": [],
            "alts": [
                "Medicham-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Electrike",
        "hp": 40,
        "atk": 45,
        "def": 40,
        "spa": 65,
        "spd": 40,
        "spe": 65,
        "weight": 15.2,
        "height": 0.6,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Minus",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 309,
            "evos": [
                "Manectric"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Manectric",
        "hp": 70,
        "atk": 75,
        "def": 60,
        "spa": 105,
        "spd": 60,
        "spe": 105,
        "weight": 40.2,
        "height": 1.5,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Minus",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 310,
            "evos": [],
            "alts": [
                "Manectric-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Roselia",
        "hp": 50,
        "atk": 60,
        "def": 45,
        "spa": 100,
        "spd": 80,
        "spe": 65,
        "weight": 2,
        "height": 0.3,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Leaf Guard",
            "Natural Cure",
            "Poison Point"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 315,
            "evos": [
                "Roserade"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gulpin",
        "hp": 70,
        "atk": 43,
        "def": 53,
        "spa": 43,
        "spd": 53,
        "spe": 40,
        "weight": 10.3,
        "height": 0.4,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Gluttony",
            "Liquid Ooze",
            "Sticky Hold"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 316,
            "evos": [
                "Swalot"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swalot",
        "hp": 100,
        "atk": 73,
        "def": 83,
        "spa": 73,
        "spd": 83,
        "spe": 55,
        "weight": 80,
        "height": 1.7,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Gluttony",
            "Liquid Ooze",
            "Sticky Hold"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 317,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Carvanha",
        "hp": 45,
        "atk": 90,
        "def": 20,
        "spa": 65,
        "spd": 20,
        "spe": 65,
        "weight": 20.8,
        "height": 0.8,
        "types": [
            "Water",
            "Dark"
        ],
        "abilities": [
            "Rough Skin",
            "Speed Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 318,
            "evos": [
                "Sharpedo"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sharpedo",
        "hp": 70,
        "atk": 120,
        "def": 40,
        "spa": 95,
        "spd": 40,
        "spe": 95,
        "weight": 88.8,
        "height": 1.8,
        "types": [
            "Water",
            "Dark"
        ],
        "abilities": [
            "Rough Skin",
            "Speed Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 319,
            "evos": [],
            "alts": [
                "Sharpedo-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wailmer",
        "hp": 130,
        "atk": 70,
        "def": 35,
        "spa": 70,
        "spd": 35,
        "spe": 60,
        "weight": 130,
        "height": 2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Oblivious",
            "Pressure",
            "Water Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 320,
            "evos": [
                "Wailord"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wailord",
        "hp": 170,
        "atk": 90,
        "def": 45,
        "spa": 90,
        "spd": 45,
        "spe": 60,
        "weight": 398,
        "height": 14.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Oblivious",
            "Pressure",
            "Water Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 321,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Numel",
        "hp": 60,
        "atk": 60,
        "def": 40,
        "spa": 65,
        "spd": 45,
        "spe": 35,
        "weight": 24,
        "height": 0.7,
        "types": [
            "Fire",
            "Ground"
        ],
        "abilities": [
            "Oblivious",
            "Own Tempo",
            "Simple"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 322,
            "evos": [
                "Camerupt"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Camerupt",
        "hp": 70,
        "atk": 100,
        "def": 70,
        "spa": 105,
        "spd": 75,
        "spe": 40,
        "weight": 220,
        "height": 1.9,
        "types": [
            "Fire",
            "Ground"
        ],
        "abilities": [
            "Anger Point",
            "Magma Armor",
            "Solid Rock"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 323,
            "evos": [],
            "alts": [
                "Camerupt-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spoink",
        "hp": 60,
        "atk": 25,
        "def": 35,
        "spa": 70,
        "spd": 80,
        "spe": 60,
        "weight": 30.6,
        "height": 0.7,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Gluttony",
            "Own Tempo",
            "Thick Fat"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 325,
            "evos": [
                "Grumpig"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grumpig",
        "hp": 80,
        "atk": 45,
        "def": 65,
        "spa": 90,
        "spd": 110,
        "spe": 80,
        "weight": 71.5,
        "height": 0.9,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Gluttony",
            "Own Tempo",
            "Thick Fat"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 326,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spinda",
        "hp": 60,
        "atk": 60,
        "def": 60,
        "spa": 60,
        "spd": 60,
        "spe": 60,
        "weight": 5,
        "height": 1.1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Contrary",
            "Own Tempo",
            "Tangled Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 327,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cacnea",
        "hp": 50,
        "atk": 85,
        "def": 40,
        "spa": 85,
        "spd": 40,
        "spe": 35,
        "weight": 51.3,
        "height": 0.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Sand Veil",
            "Water Absorb"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 331,
            "evos": [
                "Cacturne"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cacturne",
        "hp": 70,
        "atk": 115,
        "def": 60,
        "spa": 115,
        "spd": 60,
        "spe": 55,
        "weight": 77.4,
        "height": 1.3,
        "types": [
            "Grass",
            "Dark"
        ],
        "abilities": [
            "Sand Veil",
            "Water Absorb"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 332,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swablu",
        "hp": 45,
        "atk": 40,
        "def": 60,
        "spa": 40,
        "spd": 75,
        "spe": 50,
        "weight": 1.2,
        "height": 0.4,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Cloud Nine",
            "Natural Cure"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 333,
            "evos": [
                "Altaria"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Altaria",
        "hp": 75,
        "atk": 70,
        "def": 90,
        "spa": 70,
        "spd": 105,
        "spe": 80,
        "weight": 20.6,
        "height": 1.1,
        "types": [
            "Dragon",
            "Flying"
        ],
        "abilities": [
            "Cloud Nine",
            "Natural Cure"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 334,
            "evos": [],
            "alts": [
                "Altaria-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zangoose",
        "hp": 73,
        "atk": 115,
        "def": 60,
        "spa": 60,
        "spd": 60,
        "spe": 90,
        "weight": 40.3,
        "height": 1.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Immunity",
            "Toxic Boost"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 335,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Seviper",
        "hp": 73,
        "atk": 100,
        "def": 60,
        "spa": 100,
        "spd": 60,
        "spe": 65,
        "weight": 52.5,
        "height": 2.7,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Infiltrator",
            "Shed Skin"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 336,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Barboach",
        "hp": 50,
        "atk": 48,
        "def": 43,
        "spa": 46,
        "spd": 41,
        "spe": 60,
        "weight": 1.9,
        "height": 0.4,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Anticipation",
            "Hydration",
            "Oblivious"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 339,
            "evos": [
                "Whiscash"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Whiscash",
        "hp": 110,
        "atk": 78,
        "def": 73,
        "spa": 76,
        "spd": 71,
        "spe": 60,
        "weight": 23.6,
        "height": 0.9,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Anticipation",
            "Hydration",
            "Oblivious"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 340,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Corphish",
        "hp": 43,
        "atk": 80,
        "def": 65,
        "spa": 50,
        "spd": 35,
        "spe": 35,
        "weight": 11.5,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Adaptability",
            "Hyper Cutter",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 341,
            "evos": [
                "Crawdaunt"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Crawdaunt",
        "hp": 63,
        "atk": 120,
        "def": 85,
        "spa": 90,
        "spd": 55,
        "spe": 55,
        "weight": 32.8,
        "height": 1.1,
        "types": [
            "Water",
            "Dark"
        ],
        "abilities": [
            "Adaptability",
            "Hyper Cutter",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 342,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Baltoy",
        "hp": 40,
        "atk": 40,
        "def": 55,
        "spa": 40,
        "spd": 70,
        "spe": 55,
        "weight": 21.5,
        "height": 0.5,
        "types": [
            "Ground",
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 343,
            "evos": [
                "Claydol"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Claydol",
        "hp": 60,
        "atk": 70,
        "def": 105,
        "spa": 70,
        "spd": 120,
        "spe": 75,
        "weight": 108,
        "height": 1.5,
        "types": [
            "Ground",
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 344,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lileep",
        "hp": 66,
        "atk": 41,
        "def": 77,
        "spa": 61,
        "spd": 87,
        "spe": 23,
        "weight": 23.8,
        "height": 1,
        "types": [
            "Rock",
            "Grass"
        ],
        "abilities": [
            "Storm Drain",
            "Suction Cups"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 345,
            "evos": [
                "Cradily"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cradily",
        "hp": 86,
        "atk": 81,
        "def": 97,
        "spa": 81,
        "spd": 107,
        "spe": 43,
        "weight": 60.4,
        "height": 1.5,
        "types": [
            "Rock",
            "Grass"
        ],
        "abilities": [
            "Storm Drain",
            "Suction Cups"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 346,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Anorith",
        "hp": 45,
        "atk": 95,
        "def": 50,
        "spa": 40,
        "spd": 50,
        "spe": 75,
        "weight": 12.5,
        "height": 0.7,
        "types": [
            "Rock",
            "Bug"
        ],
        "abilities": [
            "Battle Armor",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 347,
            "evos": [
                "Armaldo"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Armaldo",
        "hp": 75,
        "atk": 125,
        "def": 100,
        "spa": 70,
        "spd": 80,
        "spe": 45,
        "weight": 68.2,
        "height": 1.5,
        "types": [
            "Rock",
            "Bug"
        ],
        "abilities": [
            "Battle Armor",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 348,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shuppet",
        "hp": 44,
        "atk": 75,
        "def": 35,
        "spa": 63,
        "spd": 33,
        "spe": 45,
        "weight": 2.3,
        "height": 0.6,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Frisk",
            "Insomnia"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 353,
            "evos": [
                "Banette"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Banette",
        "hp": 64,
        "atk": 115,
        "def": 65,
        "spa": 83,
        "spd": 63,
        "spe": 65,
        "weight": 12.5,
        "height": 1.1,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Frisk",
            "Insomnia"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 354,
            "evos": [],
            "alts": [
                "Banette-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tropius",
        "hp": 99,
        "atk": 68,
        "def": 83,
        "spa": 72,
        "spd": 87,
        "spe": 51,
        "weight": 100,
        "height": 2,
        "types": [
            "Grass",
            "Flying"
        ],
        "abilities": [
            "Chlorophyll",
            "Harvest",
            "Solar Power"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 357,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Absol",
        "hp": 65,
        "atk": 130,
        "def": 60,
        "spa": 75,
        "spd": 60,
        "spe": 75,
        "weight": 47,
        "height": 1.2,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Justified",
            "Pressure",
            "Super Luck"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 359,
            "evos": [],
            "alts": [
                "Absol-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wynaut",
        "hp": 95,
        "atk": 23,
        "def": 48,
        "spa": 23,
        "spd": 48,
        "spe": 23,
        "weight": 14,
        "height": 0.6,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Shadow Tag",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 360,
            "evos": [
                "Wobbuffet"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Snorunt",
        "hp": 50,
        "atk": 50,
        "def": 50,
        "spa": 50,
        "spd": 50,
        "spe": 50,
        "weight": 16.8,
        "height": 0.7,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Inner Focus",
            "Moody"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 361,
            "evos": [
                "Froslass",
                "Glalie"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Glalie",
        "hp": 80,
        "atk": 80,
        "def": 80,
        "spa": 80,
        "spd": 80,
        "spe": 80,
        "weight": 256.5,
        "height": 1.5,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Inner Focus",
            "Moody"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 362,
            "evos": [],
            "alts": [
                "Glalie-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spheal",
        "hp": 70,
        "atk": 40,
        "def": 50,
        "spa": 55,
        "spd": 50,
        "spe": 25,
        "weight": 39.5,
        "height": 0.8,
        "types": [
            "Ice",
            "Water"
        ],
        "abilities": [
            "Ice Body",
            "Oblivious",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 363,
            "evos": [
                "Sealeo"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sealeo",
        "hp": 90,
        "atk": 60,
        "def": 70,
        "spa": 75,
        "spd": 70,
        "spe": 45,
        "weight": 87.6,
        "height": 1.1,
        "types": [
            "Ice",
            "Water"
        ],
        "abilities": [
            "Ice Body",
            "Oblivious",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 364,
            "evos": [
                "Walrein"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Walrein",
        "hp": 110,
        "atk": 80,
        "def": 90,
        "spa": 95,
        "spd": 90,
        "spe": 65,
        "weight": 150.6,
        "height": 1.4,
        "types": [
            "Ice",
            "Water"
        ],
        "abilities": [
            "Ice Body",
            "Oblivious",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 365,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Clamperl",
        "hp": 35,
        "atk": 64,
        "def": 85,
        "spa": 74,
        "spd": 55,
        "spe": 32,
        "weight": 52.5,
        "height": 0.4,
        "types": [
            "Water"
        ],
        "abilities": [
            "Rattled",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 366,
            "evos": [
                "Gorebyss",
                "Huntail"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Huntail",
        "hp": 55,
        "atk": 104,
        "def": 105,
        "spa": 94,
        "spd": 75,
        "spe": 52,
        "weight": 27,
        "height": 1.7,
        "types": [
            "Water"
        ],
        "abilities": [
            "Swift Swim",
            "Water Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 367,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gorebyss",
        "hp": 55,
        "atk": 84,
        "def": 105,
        "spa": 114,
        "spd": 75,
        "spe": 52,
        "weight": 22.6,
        "height": 1.8,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hydration",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 368,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Relicanth",
        "hp": 100,
        "atk": 90,
        "def": 130,
        "spa": 45,
        "spd": 65,
        "spe": 55,
        "weight": 23.4,
        "height": 1,
        "types": [
            "Water",
            "Rock"
        ],
        "abilities": [
            "Rock Head",
            "Sturdy",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 369,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Luvdisc",
        "hp": 43,
        "atk": 30,
        "def": 55,
        "spa": 40,
        "spd": 65,
        "spe": 97,
        "weight": 8.7,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hydration",
            "Swift Swim"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 370,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bagon",
        "hp": 45,
        "atk": 75,
        "def": 60,
        "spa": 40,
        "spd": 30,
        "spe": 50,
        "weight": 42.1,
        "height": 0.6,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Rock Head",
            "Sheer Force"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 371,
            "evos": [
                "Shelgon"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shelgon",
        "hp": 65,
        "atk": 95,
        "def": 100,
        "spa": 60,
        "spd": 50,
        "spe": 50,
        "weight": 110.5,
        "height": 1.1,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Overcoat",
            "Rock Head"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 372,
            "evos": [
                "Salamence"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Salamence",
        "hp": 95,
        "atk": 135,
        "def": 80,
        "spa": 110,
        "spd": 80,
        "spe": 100,
        "weight": 102.6,
        "height": 1.5,
        "types": [
            "Dragon",
            "Flying"
        ],
        "abilities": [
            "Intimidate",
            "Moxie"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 373,
            "evos": [],
            "alts": [
                "Salamence-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Beldum",
        "hp": 40,
        "atk": 55,
        "def": 80,
        "spa": 35,
        "spd": 60,
        "spe": 30,
        "weight": 95.2,
        "height": 0.6,
        "types": [
            "Steel",
            "Psychic"
        ],
        "abilities": [
            "Clear Body",
            "Light Metal"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 374,
            "evos": [
                "Metang"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Metang",
        "hp": 60,
        "atk": 75,
        "def": 100,
        "spa": 55,
        "spd": 80,
        "spe": 50,
        "weight": 202.5,
        "height": 1.2,
        "types": [
            "Steel",
            "Psychic"
        ],
        "abilities": [
            "Clear Body",
            "Light Metal"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 375,
            "evos": [
                "Metagross"
            ],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Metagross",
        "hp": 80,
        "atk": 135,
        "def": 130,
        "spa": 95,
        "spd": 90,
        "spe": 70,
        "weight": 550,
        "height": 1.6,
        "types": [
            "Steel",
            "Psychic"
        ],
        "abilities": [
            "Clear Body",
            "Light Metal"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 376,
            "evos": [],
            "alts": [
                "Metagross-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Latias",
        "hp": 80,
        "atk": 80,
        "def": 90,
        "spa": 110,
        "spd": 130,
        "spe": 110,
        "weight": 40,
        "height": 1.4,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 380,
            "evos": [],
            "alts": [
                "Latias-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Latios",
        "hp": 80,
        "atk": 90,
        "def": 80,
        "spa": 130,
        "spd": 110,
        "spe": 110,
        "weight": 60,
        "height": 2,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 381,
            "evos": [],
            "alts": [
                "Latios-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kyogre",
        "hp": 100,
        "atk": 100,
        "def": 90,
        "spa": 150,
        "spd": 140,
        "spe": 90,
        "weight": 352,
        "height": 4.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Drizzle"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 382,
            "evos": [],
            "alts": [
                "Kyogre-Primal"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Groudon",
        "hp": 100,
        "atk": 150,
        "def": 140,
        "spa": 100,
        "spd": 90,
        "spe": 90,
        "weight": 950,
        "height": 3.5,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Drought"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 383,
            "evos": [],
            "alts": [
                "Groudon-Primal"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rayquaza",
        "hp": 105,
        "atk": 150,
        "def": 90,
        "spa": 150,
        "spd": 90,
        "spe": 95,
        "weight": 206.5,
        "height": 7,
        "types": [
            "Dragon",
            "Flying"
        ],
        "abilities": [
            "Air Lock"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 384,
            "evos": [],
            "alts": [
                "Rayquaza-Mega"
            ],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Jirachi",
        "hp": 100,
        "atk": 100,
        "def": 100,
        "spa": 100,
        "spd": 100,
        "spe": 100,
        "weight": 1.1,
        "height": 0.3,
        "types": [
            "Steel",
            "Psychic"
        ],
        "abilities": [
            "Serene Grace"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 385,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Deoxys",
        "hp": 50,
        "atk": 150,
        "def": 50,
        "spa": 150,
        "spd": 50,
        "spe": 150,
        "weight": 60.8,
        "height": 1.7,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 386,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Deoxys-Attack",
        "hp": 50,
        "atk": 180,
        "def": 20,
        "spa": 180,
        "spd": 20,
        "spe": 150,
        "weight": 60.8,
        "height": 1.7,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 386,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Deoxys-Defense",
        "hp": 50,
        "atk": 70,
        "def": 160,
        "spa": 70,
        "spd": 160,
        "spe": 90,
        "weight": 60.8,
        "height": 1.7,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 386,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Deoxys-Speed",
        "hp": 50,
        "atk": 95,
        "def": 90,
        "spa": 95,
        "spd": 90,
        "spe": 180,
        "weight": 60.8,
        "height": 1.7,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 386,
            "evos": [],
            "alts": [],
            "genfamily": [
                "RS",
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rotom-Heat",
        "hp": 50,
        "atk": 65,
        "def": 107,
        "spa": 105,
        "spd": 107,
        "spe": 86,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Electric",
            "Fire"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 479,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rotom-Wash",
        "hp": 50,
        "atk": 65,
        "def": 107,
        "spa": 105,
        "spd": 107,
        "spe": 86,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Electric",
            "Water"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 479,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rotom-Frost",
        "hp": 50,
        "atk": 65,
        "def": 107,
        "spa": 105,
        "spd": 107,
        "spe": 86,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Electric",
            "Ice"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 479,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rotom-Fan",
        "hp": 50,
        "atk": 65,
        "def": 107,
        "spa": 105,
        "spd": 107,
        "spe": 86,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Electric",
            "Flying"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 479,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rotom-Mow",
        "hp": 50,
        "atk": 65,
        "def": 107,
        "spa": 105,
        "spd": 107,
        "spe": 86,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Electric",
            "Grass"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 479,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Turtwig",
        "hp": 55,
        "atk": 68,
        "def": 64,
        "spa": 45,
        "spd": 55,
        "spe": 31,
        "weight": 10.2,
        "height": 0.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Overgrow",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 387,
            "evos": [
                "Grotle"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grotle",
        "hp": 75,
        "atk": 89,
        "def": 85,
        "spa": 55,
        "spd": 65,
        "spe": 36,
        "weight": 97,
        "height": 1.1,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Overgrow",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 388,
            "evos": [
                "Torterra"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Torterra",
        "hp": 95,
        "atk": 109,
        "def": 105,
        "spa": 75,
        "spd": 85,
        "spe": 56,
        "weight": 310,
        "height": 2.2,
        "types": [
            "Grass",
            "Ground"
        ],
        "abilities": [
            "Overgrow",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 389,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chimchar",
        "hp": 44,
        "atk": 58,
        "def": 44,
        "spa": 58,
        "spd": 44,
        "spe": 61,
        "weight": 6.2,
        "height": 0.5,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Iron Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 390,
            "evos": [
                "Monferno"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Monferno",
        "hp": 64,
        "atk": 78,
        "def": 52,
        "spa": 78,
        "spd": 52,
        "spe": 81,
        "weight": 22,
        "height": 0.9,
        "types": [
            "Fire",
            "Fighting"
        ],
        "abilities": [
            "Blaze",
            "Iron Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 391,
            "evos": [
                "Infernape"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Infernape",
        "hp": 76,
        "atk": 104,
        "def": 71,
        "spa": 104,
        "spd": 71,
        "spe": 108,
        "weight": 55,
        "height": 1.2,
        "types": [
            "Fire",
            "Fighting"
        ],
        "abilities": [
            "Blaze",
            "Iron Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 392,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Piplup",
        "hp": 53,
        "atk": 51,
        "def": 53,
        "spa": 61,
        "spd": 56,
        "spe": 40,
        "weight": 5.2,
        "height": 0.4,
        "types": [
            "Water"
        ],
        "abilities": [
            "Defiant",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 393,
            "evos": [
                "Prinplup"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Prinplup",
        "hp": 64,
        "atk": 66,
        "def": 68,
        "spa": 81,
        "spd": 76,
        "spe": 50,
        "weight": 23,
        "height": 0.8,
        "types": [
            "Water"
        ],
        "abilities": [
            "Defiant",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 394,
            "evos": [
                "Empoleon"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Empoleon",
        "hp": 84,
        "atk": 86,
        "def": 88,
        "spa": 111,
        "spd": 101,
        "spe": 60,
        "weight": 84.5,
        "height": 1.7,
        "types": [
            "Water",
            "Steel"
        ],
        "abilities": [
            "Defiant",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 395,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Starly",
        "hp": 40,
        "atk": 55,
        "def": 30,
        "spa": 30,
        "spd": 30,
        "spe": 60,
        "weight": 2,
        "height": 0.3,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Keen Eye",
            "Reckless"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 396,
            "evos": [
                "Staravia"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Staraptor",
        "hp": 85,
        "atk": 120,
        "def": 70,
        "spa": 50,
        "spd": 60,
        "spe": 100,
        "weight": 24.9,
        "height": 1.2,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Intimidate",
            "Reckless"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 398,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Roserade",
        "hp": 60,
        "atk": 70,
        "def": 65,
        "spa": 125,
        "spd": 105,
        "spe": 90,
        "weight": 14.5,
        "height": 0.9,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Natural Cure",
            "Poison Point",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 407,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mime Jr.",
        "hp": 20,
        "atk": 25,
        "def": 45,
        "spa": 70,
        "spd": 90,
        "spe": 60,
        "weight": 13,
        "height": 0.6,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Filter",
            "Soundproof",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 439,
            "evos": [
                "Mr. Mime",
                "Mr. Mime-Galar"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Togekiss",
        "hp": 85,
        "atk": 50,
        "def": 95,
        "spa": 120,
        "spd": 115,
        "spe": 80,
        "weight": 38,
        "height": 1.5,
        "types": [
            "Fairy",
            "Flying"
        ],
        "abilities": [
            "Hustle",
            "Serene Grace",
            "Super Luck"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 468,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dusknoir",
        "hp": 45,
        "atk": 100,
        "def": 135,
        "spa": 65,
        "spd": 135,
        "spe": 45,
        "weight": 106.6,
        "height": 2.2,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Frisk",
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 477,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Burmy",
        "hp": 40,
        "atk": 29,
        "def": 45,
        "spa": 29,
        "spd": 45,
        "spe": 36,
        "weight": 3.4,
        "height": 0.2,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Overcoat",
            "Shed Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 412,
            "evos": [
                "Mothim",
                "Wormadam",
                "Wormadam-Sandy",
                "Wormadam-Trash"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wormadam",
        "hp": 60,
        "atk": 59,
        "def": 85,
        "spa": 79,
        "spd": 105,
        "spe": 36,
        "weight": 6.5,
        "height": 0.5,
        "types": [
            "Bug",
            "Grass"
        ],
        "abilities": [
            "Anticipation",
            "Overcoat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 413,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wormadam-Sandy",
        "hp": 60,
        "atk": 79,
        "def": 105,
        "spa": 59,
        "spd": 85,
        "spe": 36,
        "weight": 6.5,
        "height": 0.5,
        "types": [
            "Bug",
            "Ground"
        ],
        "abilities": [
            "Anticipation",
            "Overcoat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 413,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wormadam-Trash",
        "hp": 60,
        "atk": 69,
        "def": 95,
        "spa": 69,
        "spd": 95,
        "spe": 36,
        "weight": 6.5,
        "height": 0.5,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Anticipation",
            "Overcoat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 413,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cherrim",
        "hp": 70,
        "atk": 60,
        "def": 70,
        "spa": 87,
        "spd": 78,
        "spe": 85,
        "weight": 9.3,
        "height": 0.5,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Flower Gift"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 421,
            "evos": [],
            "alts": [
                "Cherrim-Sunshine"
            ],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Bug",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Dark",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Dragon",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Electric",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Fighting",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Fire",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Flying",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Flying"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Ghost",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Grass",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Ground",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Ice",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Poison",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Psychic",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Rock",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Steel",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Water",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Syclant",
        "hp": 70,
        "atk": 116,
        "def": 70,
        "spa": 114,
        "spd": 64,
        "spe": 121,
        "weight": 52,
        "height": 1.7,
        "types": [
            "Ice",
            "Bug"
        ],
        "abilities": [
            "Compound Eyes",
            "Ice Body"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -2,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Revenankh",
        "hp": 90,
        "atk": 105,
        "def": 90,
        "spa": 65,
        "spd": 110,
        "spe": 65,
        "weight": 44,
        "height": 1.8,
        "types": [
            "Ghost",
            "Fighting"
        ],
        "abilities": [
            "Air Lock",
            "Shed Skin",
            "Triage"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -3,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pyroak",
        "hp": 120,
        "atk": 70,
        "def": 105,
        "spa": 70,
        "spd": 65,
        "spe": 60,
        "weight": 168,
        "height": 2.1,
        "types": [
            "Fire",
            "Grass"
        ],
        "abilities": [
            "Battle Armor",
            "Contrary",
            "Rock Head"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -6,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Fidgit",
        "hp": 95,
        "atk": 76,
        "def": 109,
        "spa": 90,
        "spd": 80,
        "spe": 105,
        "weight": 53,
        "height": 0.9,
        "types": [
            "Poison",
            "Ground"
        ],
        "abilities": [
            "Frisk",
            "Vital Spirit"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -8,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stratagem",
        "hp": 90,
        "atk": 60,
        "def": 65,
        "spa": 120,
        "spd": 70,
        "spe": 130,
        "weight": 45,
        "height": 0.9,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Levitate",
            "Sniper",
            "Technician"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -11,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arghonaut",
        "hp": 105,
        "atk": 110,
        "def": 95,
        "spa": 70,
        "spd": 100,
        "spe": 75,
        "weight": 151,
        "height": 1.7,
        "types": [
            "Water",
            "Fighting"
        ],
        "abilities": [
            "Technician",
            "Unaware"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -13,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kitsunoh",
        "hp": 80,
        "atk": 103,
        "def": 85,
        "spa": 55,
        "spd": 80,
        "spe": 110,
        "weight": 51,
        "height": 1.1,
        "types": [
            "Ghost",
            "Steel"
        ],
        "abilities": [
            "Frisk",
            "Iron Fist",
            "Limber"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -14,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cyclohm",
        "hp": 108,
        "atk": 60,
        "def": 118,
        "spa": 112,
        "spd": 70,
        "spe": 80,
        "weight": 59,
        "height": 1.6,
        "types": [
            "Electric",
            "Dragon"
        ],
        "abilities": [
            "Damp",
            "Shield Dust",
            "Static"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -15,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Colossoil",
        "hp": 133,
        "atk": 122,
        "def": 72,
        "spa": 71,
        "spd": 72,
        "spe": 95,
        "weight": 683.6,
        "height": 2.6,
        "types": [
            "Ground",
            "Dark"
        ],
        "abilities": [
            "Guts",
            "Unnerve"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -16,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Krilowatt",
        "hp": 151,
        "atk": 84,
        "def": 73,
        "spa": 83,
        "spd": 74,
        "spe": 105,
        "weight": 10.6,
        "height": 0.7,
        "types": [
            "Electric",
            "Water"
        ],
        "abilities": [
            "Magic Guard",
            "Minus",
            "Trace"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -17,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Voodoom",
        "hp": 90,
        "atk": 85,
        "def": 80,
        "spa": 130,
        "spd": 80,
        "spe": 110,
        "weight": 75.5,
        "height": 2,
        "types": [
            "Fighting",
            "Dark"
        ],
        "abilities": [
            "Cursed Body",
            "Lightning Rod",
            "Volt Absorb"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -19,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magnezone",
        "hp": 70,
        "atk": 70,
        "def": 115,
        "spa": 130,
        "spd": 90,
        "spe": 60,
        "weight": 180,
        "height": 1.2,
        "types": [
            "Electric",
            "Steel"
        ],
        "abilities": [
            "Analytic",
            "Magnet Pull",
            "Sturdy"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 462,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Leafeon",
        "hp": 65,
        "atk": 110,
        "def": 130,
        "spa": 60,
        "spd": 65,
        "spe": 95,
        "weight": 25.5,
        "height": 1,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Leaf Guard"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 470,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Glaceon",
        "hp": 65,
        "atk": 60,
        "def": 110,
        "spa": 130,
        "spd": 95,
        "spe": 65,
        "weight": 25.9,
        "height": 0.8,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Snow Cloak"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 471,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gallade",
        "hp": 68,
        "atk": 125,
        "def": 65,
        "spa": 65,
        "spd": 115,
        "spe": 80,
        "weight": 52,
        "height": 1.6,
        "types": [
            "Psychic",
            "Fighting"
        ],
        "abilities": [
            "Justified",
            "Sharpness",
            "Steadfast"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 475,
            "evos": [],
            "alts": [
                "Gallade-Mega"
            ],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Heatran",
        "hp": 91,
        "atk": 90,
        "def": 106,
        "spa": 130,
        "spd": 106,
        "spe": 77,
        "weight": 430,
        "height": 1.7,
        "types": [
            "Fire",
            "Steel"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 485,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Giratina-Origin",
        "hp": 150,
        "atk": 120,
        "def": 100,
        "spa": 120,
        "spd": 100,
        "spe": 90,
        "weight": 650,
        "height": 6.9,
        "types": [
            "Ghost",
            "Dragon"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 487,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cresselia",
        "hp": 120,
        "atk": 70,
        "def": 120,
        "spa": 75,
        "spd": 130,
        "spe": 85,
        "weight": 85.6,
        "height": 1.5,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 488,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Staravia",
        "hp": 55,
        "atk": 75,
        "def": 50,
        "spa": 40,
        "spd": 40,
        "spe": 80,
        "weight": 15.5,
        "height": 0.6,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Intimidate",
            "Reckless"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 397,
            "evos": [
                "Staraptor"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bidoof",
        "hp": 59,
        "atk": 45,
        "def": 40,
        "spa": 35,
        "spd": 40,
        "spe": 31,
        "weight": 20,
        "height": 0.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Moody",
            "Simple",
            "Unaware"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 399,
            "evos": [
                "Bibarel"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bibarel",
        "hp": 79,
        "atk": 85,
        "def": 60,
        "spa": 55,
        "spd": 60,
        "spe": 71,
        "weight": 31.5,
        "height": 1,
        "types": [
            "Normal",
            "Water"
        ],
        "abilities": [
            "Moody",
            "Simple",
            "Unaware"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 400,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kricketot",
        "hp": 37,
        "atk": 25,
        "def": 41,
        "spa": 25,
        "spd": 41,
        "spe": 25,
        "weight": 2.2,
        "height": 0.3,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Run Away",
            "Shed Skin"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 401,
            "evos": [
                "Kricketune"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kricketune",
        "hp": 77,
        "atk": 85,
        "def": 51,
        "spa": 55,
        "spd": 51,
        "spe": 65,
        "weight": 25.5,
        "height": 1,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Swarm",
            "Technician"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 402,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shinx",
        "hp": 45,
        "atk": 65,
        "def": 34,
        "spa": 40,
        "spd": 34,
        "spe": 45,
        "weight": 9.5,
        "height": 0.5,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Guts",
            "Intimidate",
            "Rivalry"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 403,
            "evos": [
                "Luxio"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Luxio",
        "hp": 60,
        "atk": 85,
        "def": 49,
        "spa": 60,
        "spd": 49,
        "spe": 60,
        "weight": 30.5,
        "height": 0.9,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Guts",
            "Intimidate",
            "Rivalry"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 404,
            "evos": [
                "Luxray"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Luxray",
        "hp": 80,
        "atk": 120,
        "def": 79,
        "spa": 95,
        "spd": 79,
        "spe": 70,
        "weight": 42,
        "height": 1.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Guts",
            "Intimidate",
            "Rivalry"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 405,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Budew",
        "hp": 40,
        "atk": 30,
        "def": 35,
        "spa": 50,
        "spd": 70,
        "spe": 55,
        "weight": 1.2,
        "height": 0.2,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Leaf Guard",
            "Natural Cure",
            "Poison Point"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 406,
            "evos": [
                "Roselia"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cranidos",
        "hp": 67,
        "atk": 125,
        "def": 40,
        "spa": 30,
        "spd": 30,
        "spe": 58,
        "weight": 31.5,
        "height": 0.9,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Mold Breaker",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 408,
            "evos": [
                "Rampardos"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rampardos",
        "hp": 97,
        "atk": 165,
        "def": 60,
        "spa": 65,
        "spd": 50,
        "spe": 58,
        "weight": 102.5,
        "height": 1.6,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Mold Breaker",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 409,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shieldon",
        "hp": 30,
        "atk": 42,
        "def": 118,
        "spa": 42,
        "spd": 88,
        "spe": 30,
        "weight": 57,
        "height": 0.5,
        "types": [
            "Rock",
            "Steel"
        ],
        "abilities": [
            "Soundproof",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 410,
            "evos": [
                "Bastiodon"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bastiodon",
        "hp": 60,
        "atk": 52,
        "def": 168,
        "spa": 47,
        "spd": 138,
        "spe": 30,
        "weight": 149.5,
        "height": 1.3,
        "types": [
            "Rock",
            "Steel"
        ],
        "abilities": [
            "Soundproof",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 411,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mothim",
        "hp": 70,
        "atk": 94,
        "def": 50,
        "spa": 94,
        "spd": 50,
        "spe": 66,
        "weight": 23.3,
        "height": 0.9,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Swarm",
            "Tinted Lens"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 414,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Combee",
        "hp": 30,
        "atk": 30,
        "def": 42,
        "spa": 30,
        "spd": 42,
        "spe": 70,
        "weight": 5.5,
        "height": 0.3,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Honey Gather",
            "Hustle"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 415,
            "evos": [
                "Vespiquen"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vespiquen",
        "hp": 70,
        "atk": 80,
        "def": 102,
        "spa": 80,
        "spd": 102,
        "spe": 40,
        "weight": 38.5,
        "height": 1.2,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Pressure",
            "Unnerve"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 416,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pachirisu",
        "hp": 60,
        "atk": 45,
        "def": 70,
        "spa": 45,
        "spd": 90,
        "spe": 95,
        "weight": 3.9,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Pickup",
            "Run Away",
            "Volt Absorb"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 417,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Buizel",
        "hp": 55,
        "atk": 65,
        "def": 35,
        "spa": 60,
        "spd": 30,
        "spe": 85,
        "weight": 29.5,
        "height": 0.7,
        "types": [
            "Water"
        ],
        "abilities": [
            "Swift Swim",
            "Water Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 418,
            "evos": [
                "Floatzel"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Floatzel",
        "hp": 85,
        "atk": 105,
        "def": 55,
        "spa": 85,
        "spd": 50,
        "spe": 115,
        "weight": 33.5,
        "height": 1.1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Swift Swim",
            "Water Veil"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 419,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cherubi",
        "hp": 45,
        "atk": 35,
        "def": 45,
        "spa": 62,
        "spd": 53,
        "spe": 35,
        "weight": 3.3,
        "height": 0.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 420,
            "evos": [
                "Cherrim"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shellos",
        "hp": 76,
        "atk": 48,
        "def": 48,
        "spa": 57,
        "spd": 62,
        "spe": 34,
        "weight": 6.3,
        "height": 0.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Sand Force",
            "Sticky Hold",
            "Storm Drain"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 422,
            "evos": [
                "Gastrodon"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gastrodon",
        "hp": 111,
        "atk": 83,
        "def": 68,
        "spa": 92,
        "spd": 82,
        "spe": 39,
        "weight": 29.9,
        "height": 0.9,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Sand Force",
            "Sticky Hold",
            "Storm Drain"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 423,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ambipom",
        "hp": 75,
        "atk": 100,
        "def": 66,
        "spa": 60,
        "spd": 66,
        "spe": 115,
        "weight": 20.3,
        "height": 1.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Pickup",
            "Skill Link",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 424,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drifloon",
        "hp": 90,
        "atk": 50,
        "def": 34,
        "spa": 60,
        "spd": 44,
        "spe": 70,
        "weight": 1.2,
        "height": 0.4,
        "types": [
            "Ghost",
            "Flying"
        ],
        "abilities": [
            "Aftermath",
            "Flare Boost",
            "Unburden"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 425,
            "evos": [
                "Drifblim"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drifblim",
        "hp": 150,
        "atk": 80,
        "def": 44,
        "spa": 90,
        "spd": 54,
        "spe": 80,
        "weight": 15,
        "height": 1.2,
        "types": [
            "Ghost",
            "Flying"
        ],
        "abilities": [
            "Aftermath",
            "Flare Boost",
            "Unburden"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 426,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Buneary",
        "hp": 55,
        "atk": 66,
        "def": 44,
        "spa": 44,
        "spd": 56,
        "spe": 85,
        "weight": 5.5,
        "height": 0.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Klutz",
            "Limber",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 427,
            "evos": [
                "Lopunny"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lopunny",
        "hp": 65,
        "atk": 76,
        "def": 84,
        "spa": 54,
        "spd": 96,
        "spe": 105,
        "weight": 33.3,
        "height": 1.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cute Charm",
            "Klutz",
            "Limber"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 428,
            "evos": [],
            "alts": [
                "Lopunny-Mega"
            ],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mismagius",
        "hp": 60,
        "atk": 60,
        "def": 60,
        "spa": 105,
        "spd": 105,
        "spe": 105,
        "weight": 4.4,
        "height": 0.9,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 429,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Honchkrow",
        "hp": 100,
        "atk": 125,
        "def": 52,
        "spa": 105,
        "spd": 52,
        "spe": 71,
        "weight": 27.3,
        "height": 0.9,
        "types": [
            "Dark",
            "Flying"
        ],
        "abilities": [
            "Insomnia",
            "Moxie",
            "Super Luck"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 430,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Glameow",
        "hp": 49,
        "atk": 55,
        "def": 42,
        "spa": 42,
        "spd": 37,
        "spe": 85,
        "weight": 3.9,
        "height": 0.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Keen Eye",
            "Limber",
            "Own Tempo"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 431,
            "evos": [
                "Purugly"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Purugly",
        "hp": 71,
        "atk": 82,
        "def": 64,
        "spa": 64,
        "spd": 59,
        "spe": 112,
        "weight": 43.8,
        "height": 1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Defiant",
            "Own Tempo",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 432,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chingling",
        "hp": 45,
        "atk": 30,
        "def": 50,
        "spa": 65,
        "spd": 50,
        "spe": 45,
        "weight": 0.6,
        "height": 0.2,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 433,
            "evos": [
                "Chimecho"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stunky",
        "hp": 63,
        "atk": 63,
        "def": 47,
        "spa": 41,
        "spd": 41,
        "spe": 74,
        "weight": 19.2,
        "height": 0.4,
        "types": [
            "Poison",
            "Dark"
        ],
        "abilities": [
            "Aftermath",
            "Keen Eye",
            "Stench"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 434,
            "evos": [
                "Skuntank"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Skuntank",
        "hp": 103,
        "atk": 93,
        "def": 67,
        "spa": 71,
        "spd": 61,
        "spe": 84,
        "weight": 38,
        "height": 1,
        "types": [
            "Poison",
            "Dark"
        ],
        "abilities": [
            "Aftermath",
            "Keen Eye",
            "Stench"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 435,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bronzor",
        "hp": 57,
        "atk": 24,
        "def": 86,
        "spa": 24,
        "spd": 86,
        "spe": 23,
        "weight": 60.5,
        "height": 0.5,
        "types": [
            "Steel",
            "Psychic"
        ],
        "abilities": [
            "Heatproof",
            "Heavy Metal",
            "Levitate"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 436,
            "evos": [
                "Bronzong"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bronzong",
        "hp": 67,
        "atk": 89,
        "def": 116,
        "spa": 79,
        "spd": 116,
        "spe": 33,
        "weight": 187,
        "height": 1.3,
        "types": [
            "Steel",
            "Psychic"
        ],
        "abilities": [
            "Heatproof",
            "Heavy Metal",
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 437,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bonsly",
        "hp": 50,
        "atk": 80,
        "def": 95,
        "spa": 10,
        "spd": 45,
        "spe": 10,
        "weight": 15,
        "height": 0.5,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Rattled",
            "Rock Head",
            "Sturdy"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 438,
            "evos": [
                "Sudowoodo"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Happiny",
        "hp": 100,
        "atk": 5,
        "def": 5,
        "spa": 15,
        "spd": 65,
        "spe": 30,
        "weight": 24.4,
        "height": 0.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Friend Guard",
            "Natural Cure",
            "Serene Grace"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 440,
            "evos": [
                "Chansey"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chatot",
        "hp": 76,
        "atk": 65,
        "def": 45,
        "spa": 92,
        "spd": 42,
        "spe": 91,
        "weight": 1.9,
        "height": 0.5,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Keen Eye",
            "Tangled Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 441,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spiritomb",
        "hp": 50,
        "atk": 92,
        "def": 108,
        "spa": 92,
        "spd": 108,
        "spe": 35,
        "weight": 108,
        "height": 1,
        "types": [
            "Ghost",
            "Dark"
        ],
        "abilities": [
            "Infiltrator",
            "Pressure"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 442,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gible",
        "hp": 58,
        "atk": 70,
        "def": 45,
        "spa": 40,
        "spd": 45,
        "spe": 42,
        "weight": 20.5,
        "height": 0.7,
        "types": [
            "Dragon",
            "Ground"
        ],
        "abilities": [
            "Rough Skin",
            "Sand Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 443,
            "evos": [
                "Gabite"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gabite",
        "hp": 68,
        "atk": 90,
        "def": 65,
        "spa": 50,
        "spd": 55,
        "spe": 82,
        "weight": 56,
        "height": 1.4,
        "types": [
            "Dragon",
            "Ground"
        ],
        "abilities": [
            "Rough Skin",
            "Sand Veil"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 444,
            "evos": [
                "Garchomp"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Garchomp",
        "hp": 108,
        "atk": 130,
        "def": 95,
        "spa": 80,
        "spd": 85,
        "spe": 102,
        "weight": 95,
        "height": 1.9,
        "types": [
            "Dragon",
            "Ground"
        ],
        "abilities": [
            "Rough Skin",
            "Sand Veil"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 445,
            "evos": [],
            "alts": [
                "Garchomp-Mega"
            ],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Munchlax",
        "hp": 135,
        "atk": 85,
        "def": 40,
        "spa": 40,
        "spd": 85,
        "spe": 5,
        "weight": 105,
        "height": 0.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Pickup",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 446,
            "evos": [
                "Snorlax"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Riolu",
        "hp": 40,
        "atk": 70,
        "def": 40,
        "spa": 35,
        "spd": 40,
        "spe": 60,
        "weight": 20.2,
        "height": 0.7,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Inner Focus",
            "Prankster",
            "Steadfast"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 447,
            "evos": [
                "Lucario"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lucario",
        "hp": 70,
        "atk": 110,
        "def": 70,
        "spa": 115,
        "spd": 70,
        "spe": 90,
        "weight": 54,
        "height": 1.2,
        "types": [
            "Fighting",
            "Steel"
        ],
        "abilities": [
            "Inner Focus",
            "Justified",
            "Steadfast"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 448,
            "evos": [],
            "alts": [
                "Lucario-Mega"
            ],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hippopotas",
        "hp": 68,
        "atk": 72,
        "def": 78,
        "spa": 38,
        "spd": 42,
        "spe": 32,
        "weight": 49.5,
        "height": 0.8,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Force",
            "Sand Stream"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 449,
            "evos": [
                "Hippowdon"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hippowdon",
        "hp": 108,
        "atk": 112,
        "def": 118,
        "spa": 68,
        "spd": 72,
        "spe": 47,
        "weight": 300,
        "height": 2,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Force",
            "Sand Stream"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 450,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Skorupi",
        "hp": 40,
        "atk": 50,
        "def": 90,
        "spa": 30,
        "spd": 55,
        "spe": 65,
        "weight": 12,
        "height": 0.8,
        "types": [
            "Poison",
            "Bug"
        ],
        "abilities": [
            "Battle Armor",
            "Keen Eye",
            "Sniper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 451,
            "evos": [
                "Drapion"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drapion",
        "hp": 70,
        "atk": 90,
        "def": 110,
        "spa": 60,
        "spd": 75,
        "spe": 95,
        "weight": 61.5,
        "height": 1.3,
        "types": [
            "Poison",
            "Dark"
        ],
        "abilities": [
            "Battle Armor",
            "Keen Eye",
            "Sniper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 452,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Croagunk",
        "hp": 48,
        "atk": 61,
        "def": 40,
        "spa": 61,
        "spd": 40,
        "spe": 50,
        "weight": 23,
        "height": 0.7,
        "types": [
            "Poison",
            "Fighting"
        ],
        "abilities": [
            "Anticipation",
            "Dry Skin",
            "Poison Touch"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 453,
            "evos": [
                "Toxicroak"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Toxicroak",
        "hp": 83,
        "atk": 106,
        "def": 65,
        "spa": 86,
        "spd": 65,
        "spe": 85,
        "weight": 44.4,
        "height": 1.3,
        "types": [
            "Poison",
            "Fighting"
        ],
        "abilities": [
            "Anticipation",
            "Dry Skin",
            "Poison Touch"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 454,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Carnivine",
        "hp": 74,
        "atk": 100,
        "def": 72,
        "spa": 90,
        "spd": 72,
        "spe": 46,
        "weight": 27,
        "height": 1.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 455,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Finneon",
        "hp": 49,
        "atk": 49,
        "def": 56,
        "spa": 49,
        "spd": 61,
        "spe": 66,
        "weight": 7,
        "height": 0.4,
        "types": [
            "Water"
        ],
        "abilities": [
            "Storm Drain",
            "Swift Swim",
            "Water Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 456,
            "evos": [
                "Lumineon"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lumineon",
        "hp": 69,
        "atk": 69,
        "def": 76,
        "spa": 69,
        "spd": 86,
        "spe": 91,
        "weight": 24,
        "height": 1.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Storm Drain",
            "Swift Swim",
            "Water Veil"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 457,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mantyke",
        "hp": 45,
        "atk": 20,
        "def": 50,
        "spa": 60,
        "spd": 120,
        "spe": 50,
        "weight": 65,
        "height": 1,
        "types": [
            "Water",
            "Flying"
        ],
        "abilities": [
            "Swift Swim",
            "Water Absorb",
            "Water Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 458,
            "evos": [
                "Mantine"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Snover",
        "hp": 60,
        "atk": 62,
        "def": 50,
        "spa": 62,
        "spd": 60,
        "spe": 40,
        "weight": 50.5,
        "height": 1,
        "types": [
            "Grass",
            "Ice"
        ],
        "abilities": [
            "Snow Warning",
            "Soundproof"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 459,
            "evos": [
                "Abomasnow"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Abomasnow",
        "hp": 90,
        "atk": 92,
        "def": 75,
        "spa": 92,
        "spd": 85,
        "spe": 60,
        "weight": 135.5,
        "height": 2.2,
        "types": [
            "Grass",
            "Ice"
        ],
        "abilities": [
            "Snow Warning",
            "Soundproof"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 460,
            "evos": [],
            "alts": [
                "Abomasnow-Mega"
            ],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Weavile",
        "hp": 70,
        "atk": 120,
        "def": 65,
        "spa": 45,
        "spd": 85,
        "spe": 125,
        "weight": 34,
        "height": 1.1,
        "types": [
            "Dark",
            "Ice"
        ],
        "abilities": [
            "Pickpocket",
            "Pressure"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 461,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lickilicky",
        "hp": 110,
        "atk": 85,
        "def": 95,
        "spa": 80,
        "spd": 95,
        "spe": 50,
        "weight": 140,
        "height": 1.7,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cloud Nine",
            "Oblivious",
            "Own Tempo"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 463,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rhyperior",
        "hp": 115,
        "atk": 140,
        "def": 130,
        "spa": 55,
        "spd": 55,
        "spe": 40,
        "weight": 282.8,
        "height": 2.4,
        "types": [
            "Ground",
            "Rock"
        ],
        "abilities": [
            "Lightning Rod",
            "Reckless",
            "Solid Rock"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 464,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tangrowth",
        "hp": 100,
        "atk": 100,
        "def": 125,
        "spa": 110,
        "spd": 50,
        "spe": 50,
        "weight": 128.6,
        "height": 2,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 465,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Electivire",
        "hp": 75,
        "atk": 123,
        "def": 67,
        "spa": 95,
        "spd": 85,
        "spe": 95,
        "weight": 138.6,
        "height": 1.8,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Motor Drive",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 466,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magmortar",
        "hp": 75,
        "atk": 95,
        "def": 67,
        "spa": 125,
        "spd": 95,
        "spe": 83,
        "weight": 68,
        "height": 1.6,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 467,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Yanmega",
        "hp": 86,
        "atk": 76,
        "def": 86,
        "spa": 116,
        "spd": 56,
        "spe": 95,
        "weight": 51.5,
        "height": 1.9,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Frisk",
            "Speed Boost",
            "Tinted Lens"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 469,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gliscor",
        "hp": 75,
        "atk": 95,
        "def": 125,
        "spa": 45,
        "spd": 75,
        "spe": 95,
        "weight": 42.5,
        "height": 2,
        "types": [
            "Ground",
            "Flying"
        ],
        "abilities": [
            "Hyper Cutter",
            "Poison Heal",
            "Sand Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 472,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mamoswine",
        "hp": 110,
        "atk": 130,
        "def": 80,
        "spa": 70,
        "spd": 60,
        "spe": 80,
        "weight": 291,
        "height": 2.5,
        "types": [
            "Ice",
            "Ground"
        ],
        "abilities": [
            "Oblivious",
            "Snow Cloak",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 473,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Porygon-Z",
        "hp": 85,
        "atk": 80,
        "def": 70,
        "spa": 135,
        "spd": 75,
        "spe": 90,
        "weight": 34,
        "height": 0.9,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Adaptability",
            "Analytic",
            "Download"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 474,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Probopass",
        "hp": 60,
        "atk": 55,
        "def": 145,
        "spa": 75,
        "spd": 150,
        "spe": 40,
        "weight": 340,
        "height": 1.4,
        "types": [
            "Rock",
            "Steel"
        ],
        "abilities": [
            "Magnet Pull",
            "Sand Force",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 476,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Froslass",
        "hp": 70,
        "atk": 80,
        "def": 70,
        "spa": 80,
        "spd": 70,
        "spe": 110,
        "weight": 26.6,
        "height": 1.3,
        "types": [
            "Ice",
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Snow Cloak"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 478,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rotom",
        "hp": 50,
        "atk": 50,
        "def": 77,
        "spa": 95,
        "spd": 77,
        "spe": 91,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Electric",
            "Ghost"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 479,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Uxie",
        "hp": 75,
        "atk": 75,
        "def": 130,
        "spa": 75,
        "spd": 130,
        "spe": 95,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 480,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mesprit",
        "hp": 80,
        "atk": 105,
        "def": 105,
        "spa": 105,
        "spd": 105,
        "spe": 80,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 481,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Azelf",
        "hp": 75,
        "atk": 125,
        "def": 70,
        "spa": 125,
        "spd": 70,
        "spe": 115,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 482,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dialga",
        "hp": 100,
        "atk": 120,
        "def": 120,
        "spa": 150,
        "spd": 100,
        "spe": 90,
        "weight": 683,
        "height": 5.4,
        "types": [
            "Steel",
            "Dragon"
        ],
        "abilities": [
            "Pressure",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 483,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Palkia",
        "hp": 90,
        "atk": 120,
        "def": 100,
        "spa": 150,
        "spd": 120,
        "spe": 100,
        "weight": 336,
        "height": 4.2,
        "types": [
            "Water",
            "Dragon"
        ],
        "abilities": [
            "Pressure",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 484,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Regigigas",
        "hp": 110,
        "atk": 160,
        "def": 110,
        "spa": 80,
        "spd": 110,
        "spe": 100,
        "weight": 420,
        "height": 3.7,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Slow Start"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 486,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Giratina",
        "hp": 150,
        "atk": 100,
        "def": 120,
        "spa": 100,
        "spd": 120,
        "spe": 90,
        "weight": 750,
        "height": 4.5,
        "types": [
            "Ghost",
            "Dragon"
        ],
        "abilities": [
            "Pressure",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 487,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Phione",
        "hp": 80,
        "atk": 80,
        "def": 80,
        "spa": 80,
        "spd": 80,
        "spe": 80,
        "weight": 3.1,
        "height": 0.4,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hydration"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 489,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Manaphy",
        "hp": 100,
        "atk": 100,
        "def": 100,
        "spa": 100,
        "spd": 100,
        "spe": 100,
        "weight": 1.4,
        "height": 0.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hydration"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 490,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Darkrai",
        "hp": 70,
        "atk": 90,
        "def": 90,
        "spa": 135,
        "spd": 90,
        "spe": 125,
        "weight": 50.5,
        "height": 1.5,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Bad Dreams"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 491,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shaymin",
        "hp": 100,
        "atk": 100,
        "def": 100,
        "spa": 100,
        "spd": 100,
        "spe": 100,
        "weight": 2.1,
        "height": 0.2,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Natural Cure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 492,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shaymin-Sky",
        "hp": 100,
        "atk": 103,
        "def": 75,
        "spa": 120,
        "spd": 75,
        "spe": 127,
        "weight": 5.2,
        "height": 0.4,
        "types": [
            "Grass",
            "Flying"
        ],
        "abilities": [
            "Serene Grace"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 492,
            "evos": [],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Syclar",
        "hp": 40,
        "atk": 76,
        "def": 45,
        "spa": 74,
        "spd": 39,
        "spe": 91,
        "weight": 4,
        "height": 0.2,
        "types": [
            "Ice",
            "Bug"
        ],
        "abilities": [
            "Compound Eyes",
            "Ice Body",
            "Snow Cloak"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -1,
            "evos": [
                "Syclant"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Embirch",
        "hp": 60,
        "atk": 40,
        "def": 55,
        "spa": 65,
        "spd": 40,
        "spe": 60,
        "weight": 15,
        "height": 0.6,
        "types": [
            "Fire",
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Reckless"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -4,
            "evos": [
                "Flarelm"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Flarelm",
        "hp": 90,
        "atk": 50,
        "def": 95,
        "spa": 75,
        "spd": 70,
        "spe": 40,
        "weight": 73,
        "height": 1.4,
        "types": [
            "Fire",
            "Grass"
        ],
        "abilities": [
            "Battle Armor",
            "Rock Head",
            "White Smoke"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -5,
            "evos": [
                "Pyroak"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Breezi",
        "hp": 50,
        "atk": 46,
        "def": 69,
        "spa": 60,
        "spd": 50,
        "spe": 75,
        "weight": 0.6,
        "height": 0.4,
        "types": [
            "Poison",
            "Flying"
        ],
        "abilities": [
            "Frisk",
            "Own Tempo",
            "Unburden"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -7,
            "evos": [
                "Fidgit"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rebble",
        "hp": 45,
        "atk": 25,
        "def": 65,
        "spa": 75,
        "spd": 55,
        "spe": 80,
        "weight": 7,
        "height": 0.3,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Levitate",
            "Sniper",
            "Solid Rock"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -9,
            "evos": [
                "Tactite"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tactite",
        "hp": 70,
        "atk": 40,
        "def": 65,
        "spa": 100,
        "spd": 65,
        "spe": 95,
        "weight": 16,
        "height": 0.6,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Levitate",
            "Sniper",
            "Technician"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -10,
            "evos": [
                "Stratagem"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Privatyke",
        "hp": 65,
        "atk": 75,
        "def": 65,
        "spa": 40,
        "spd": 60,
        "spe": 45,
        "weight": 35,
        "height": 1,
        "types": [
            "Water",
            "Fighting"
        ],
        "abilities": [
            "Technician",
            "Unaware"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -12,
            "evos": [
                "Arghonaut"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Voodoll",
        "hp": 55,
        "atk": 40,
        "def": 55,
        "spa": 75,
        "spd": 50,
        "spe": 70,
        "weight": 25,
        "height": 1,
        "types": [
            "Normal",
            "Dark"
        ],
        "abilities": [
            "Cursed Body",
            "Lightning Rod",
            "Volt Absorb"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -18,
            "evos": [
                "Voodoom"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nohface",
        "hp": 50,
        "atk": 73,
        "def": 50,
        "spa": 30,
        "spd": 50,
        "spe": 80,
        "weight": 5.9,
        "height": 0.5,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Frisk",
            "Limber",
            "Unnerve"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -61,
            "evos": [
                "Kitsunoh"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Monohm",
        "hp": 53,
        "atk": 40,
        "def": 58,
        "spa": 67,
        "spd": 55,
        "spe": 55,
        "weight": 4.1,
        "height": 0.6,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Damp",
            "Shield Dust",
            "Static"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -62,
            "evos": [
                "Duohm"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Duohm",
        "hp": 88,
        "atk": 40,
        "def": 103,
        "spa": 77,
        "spd": 60,
        "spe": 60,
        "weight": 19.2,
        "height": 1.1,
        "types": [
            "Electric",
            "Dragon"
        ],
        "abilities": [
            "Damp",
            "Shield Dust",
            "Static"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -63,
            "evos": [
                "Cyclohm"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dorsoil",
        "hp": 103,
        "atk": 72,
        "def": 52,
        "spa": 61,
        "spd": 52,
        "spe": 65,
        "weight": 145,
        "height": 1.3,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Guts",
            "Oblivious",
            "Unnerve"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -64,
            "evos": [
                "Colossoil"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Protowatt",
        "hp": 51,
        "atk": 44,
        "def": 33,
        "spa": 43,
        "spd": 34,
        "spe": 65,
        "weight": 0.1,
        "height": 0.1,
        "types": [
            "Electric",
            "Water"
        ],
        "abilities": [
            "Magic Guard",
            "Minus",
            "Trace"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -65,
            "evos": [
                "Krilowatt"
            ],
            "alts": [],
            "genfamily": [
                "DP",
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Snivy",
        "hp": 45,
        "atk": 45,
        "def": 55,
        "spa": 45,
        "spd": 55,
        "spe": 63,
        "weight": 8.1,
        "height": 0.6,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Contrary",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 495,
            "evos": [
                "Servine"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Servine",
        "hp": 60,
        "atk": 60,
        "def": 75,
        "spa": 60,
        "spd": 75,
        "spe": 83,
        "weight": 16,
        "height": 0.8,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Contrary",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 496,
            "evos": [
                "Serperior"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Serperior",
        "hp": 75,
        "atk": 75,
        "def": 95,
        "spa": 75,
        "spd": 95,
        "spe": 113,
        "weight": 63,
        "height": 3.3,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Contrary",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 497,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tepig",
        "hp": 65,
        "atk": 63,
        "def": 45,
        "spa": 45,
        "spd": 45,
        "spe": 45,
        "weight": 9.9,
        "height": 0.5,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 498,
            "evos": [
                "Pignite"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pignite",
        "hp": 90,
        "atk": 93,
        "def": 55,
        "spa": 70,
        "spd": 55,
        "spe": 55,
        "weight": 55.5,
        "height": 1,
        "types": [
            "Fire",
            "Fighting"
        ],
        "abilities": [
            "Blaze",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 499,
            "evos": [
                "Emboar"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Emboar",
        "hp": 110,
        "atk": 123,
        "def": 65,
        "spa": 100,
        "spd": 65,
        "spe": 65,
        "weight": 150,
        "height": 1.6,
        "types": [
            "Fire",
            "Fighting"
        ],
        "abilities": [
            "Blaze",
            "Reckless"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 500,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Oshawott",
        "hp": 55,
        "atk": 55,
        "def": 45,
        "spa": 63,
        "spd": 45,
        "spe": 45,
        "weight": 5.9,
        "height": 0.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Shell Armor",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 501,
            "evos": [
                "Dewott"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dewott",
        "hp": 75,
        "atk": 75,
        "def": 60,
        "spa": 83,
        "spd": 60,
        "spe": 60,
        "weight": 24.5,
        "height": 0.8,
        "types": [
            "Water"
        ],
        "abilities": [
            "Shell Armor",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 502,
            "evos": [
                "Samurott"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Samurott",
        "hp": 95,
        "atk": 100,
        "def": 85,
        "spa": 108,
        "spd": 70,
        "spe": 70,
        "weight": 94.6,
        "height": 1.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Shell Armor",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 503,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stoutland",
        "hp": 85,
        "atk": 110,
        "def": 90,
        "spa": 45,
        "spd": 90,
        "spe": 80,
        "weight": 61,
        "height": 1.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Intimidate",
            "Sand Rush",
            "Scrappy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 508,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pansage",
        "hp": 50,
        "atk": 53,
        "def": 48,
        "spa": 53,
        "spd": 48,
        "spe": 64,
        "weight": 10.5,
        "height": 0.6,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Gluttony",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 511,
            "evos": [
                "Simisage"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Simisage",
        "hp": 75,
        "atk": 98,
        "def": 63,
        "spa": 98,
        "spd": 63,
        "spe": 101,
        "weight": 30.5,
        "height": 1.1,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Gluttony",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 512,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pansear",
        "hp": 50,
        "atk": 53,
        "def": 48,
        "spa": 53,
        "spd": 48,
        "spe": 64,
        "weight": 11,
        "height": 0.6,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Gluttony"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 513,
            "evos": [
                "Simisear"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Simisear",
        "hp": 75,
        "atk": 98,
        "def": 63,
        "spa": 98,
        "spd": 63,
        "spe": 101,
        "weight": 28,
        "height": 1,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Gluttony"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 514,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Panpour",
        "hp": 50,
        "atk": 53,
        "def": 48,
        "spa": 53,
        "spd": 48,
        "spe": 64,
        "weight": 13.5,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Gluttony",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 515,
            "evos": [
                "Simipour"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Simipour",
        "hp": 75,
        "atk": 98,
        "def": 63,
        "spa": 98,
        "spd": 63,
        "spe": 101,
        "weight": 29,
        "height": 1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Gluttony",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 516,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Unfezant",
        "hp": 80,
        "atk": 115,
        "def": 80,
        "spa": 65,
        "spd": 55,
        "spe": 93,
        "weight": 29,
        "height": 1.2,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Rivalry",
            "Super Luck"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 521,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gigalith",
        "hp": 85,
        "atk": 135,
        "def": 130,
        "spa": 60,
        "spd": 80,
        "spe": 25,
        "weight": 260,
        "height": 1.7,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Sand Force",
            "Sand Stream",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 526,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Seismitoad",
        "hp": 105,
        "atk": 95,
        "def": 75,
        "spa": 85,
        "spd": 75,
        "spe": 74,
        "weight": 62,
        "height": 1.5,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Poison Touch",
            "Swift Swim",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 537,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Leavanny",
        "hp": 75,
        "atk": 103,
        "def": 80,
        "spa": 70,
        "spd": 80,
        "spe": 92,
        "weight": 20.5,
        "height": 1.2,
        "types": [
            "Bug",
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Overcoat",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 542,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Venipede",
        "hp": 30,
        "atk": 45,
        "def": 59,
        "spa": 30,
        "spd": 39,
        "spe": 57,
        "weight": 5.3,
        "height": 0.4,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Poison Point",
            "Speed Boost",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 543,
            "evos": [
                "Whirlipede"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Whirlipede",
        "hp": 40,
        "atk": 55,
        "def": 99,
        "spa": 40,
        "spd": 79,
        "spe": 47,
        "weight": 58.5,
        "height": 1.2,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Poison Point",
            "Speed Boost",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 544,
            "evos": [
                "Scolipede"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Scolipede",
        "hp": 60,
        "atk": 100,
        "def": 89,
        "spa": 55,
        "spd": 69,
        "spe": 112,
        "weight": 200.5,
        "height": 2.5,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Poison Point",
            "Speed Boost",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 545,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cottonee",
        "hp": 40,
        "atk": 27,
        "def": 60,
        "spa": 37,
        "spd": 50,
        "spe": 66,
        "weight": 0.6,
        "height": 0.3,
        "types": [
            "Grass",
            "Fairy"
        ],
        "abilities": [
            "Chlorophyll",
            "Infiltrator",
            "Prankster"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 546,
            "evos": [
                "Whimsicott"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Whimsicott",
        "hp": 60,
        "atk": 67,
        "def": 85,
        "spa": 77,
        "spd": 75,
        "spe": 116,
        "weight": 6.6,
        "height": 0.7,
        "types": [
            "Grass",
            "Fairy"
        ],
        "abilities": [
            "Chlorophyll",
            "Infiltrator",
            "Prankster"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 547,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Basculin-Blue-Striped",
        "hp": 70,
        "atk": 92,
        "def": 65,
        "spa": 80,
        "spd": 55,
        "spe": 98,
        "weight": 18,
        "height": 1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Adaptability",
            "Mold Breaker",
            "Rock Head"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 550,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Krookodile",
        "hp": 95,
        "atk": 117,
        "def": 80,
        "spa": 65,
        "spd": 70,
        "spe": 92,
        "weight": 96.3,
        "height": 1.5,
        "types": [
            "Ground",
            "Dark"
        ],
        "abilities": [
            "Anger Point",
            "Intimidate",
            "Moxie"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 553,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gothita",
        "hp": 45,
        "atk": 30,
        "def": 50,
        "spa": 55,
        "spd": 65,
        "spe": 45,
        "weight": 5.8,
        "height": 0.4,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Competitive",
            "Frisk",
            "Shadow Tag"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 574,
            "evos": [
                "Gothorita"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gothorita",
        "hp": 60,
        "atk": 45,
        "def": 70,
        "spa": 75,
        "spd": 85,
        "spe": 55,
        "weight": 18,
        "height": 0.7,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Competitive",
            "Frisk",
            "Shadow Tag"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 575,
            "evos": [
                "Gothitelle"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gothitelle",
        "hp": 70,
        "atk": 55,
        "def": 95,
        "spa": 95,
        "spd": 110,
        "spe": 65,
        "weight": 44,
        "height": 1.5,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Competitive",
            "Frisk",
            "Shadow Tag"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 576,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ferrothorn",
        "hp": 74,
        "atk": 94,
        "def": 131,
        "spa": 54,
        "spd": 116,
        "spe": 20,
        "weight": 110,
        "height": 1,
        "types": [
            "Grass",
            "Steel"
        ],
        "abilities": [
            "Anticipation",
            "Iron Barbs"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 598,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Klink",
        "hp": 40,
        "atk": 55,
        "def": 70,
        "spa": 45,
        "spd": 60,
        "spe": 30,
        "weight": 21,
        "height": 0.3,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Clear Body",
            "Minus",
            "Plus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 599,
            "evos": [
                "Klang"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Litwick",
        "hp": 50,
        "atk": 30,
        "def": 55,
        "spa": 65,
        "spd": 55,
        "spe": 20,
        "weight": 3.1,
        "height": 0.3,
        "types": [
            "Ghost",
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "Infiltrator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 607,
            "evos": [
                "Lampent"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lampent",
        "hp": 60,
        "atk": 40,
        "def": 60,
        "spa": 95,
        "spd": 60,
        "spe": 55,
        "weight": 13,
        "height": 0.6,
        "types": [
            "Ghost",
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "Infiltrator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 608,
            "evos": [
                "Chandelure"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chandelure",
        "hp": 60,
        "atk": 55,
        "def": 90,
        "spa": 145,
        "spd": 90,
        "spe": 80,
        "weight": 34.3,
        "height": 1,
        "types": [
            "Ghost",
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "Infiltrator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 609,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rufflet",
        "hp": 70,
        "atk": 83,
        "def": 50,
        "spa": 37,
        "spd": 50,
        "spe": 60,
        "weight": 10.5,
        "height": 0.5,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Hustle",
            "Keen Eye",
            "Sheer Force"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 627,
            "evos": [
                "Braviary",
                "Braviary-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Larvesta",
        "hp": 55,
        "atk": 85,
        "def": 55,
        "spa": 50,
        "spd": 55,
        "spe": 60,
        "weight": 28.8,
        "height": 1.1,
        "types": [
            "Bug",
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Swarm"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 636,
            "evos": [
                "Volcarona"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Volcarona",
        "hp": 85,
        "atk": 60,
        "def": 65,
        "spa": 135,
        "spd": 105,
        "spe": 100,
        "weight": 46,
        "height": 1.6,
        "types": [
            "Bug",
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Swarm"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 637,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Roggenrola",
        "hp": 55,
        "atk": 75,
        "def": 85,
        "spa": 25,
        "spd": 25,
        "spe": 15,
        "weight": 18,
        "height": 0.4,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Sand Force",
            "Sturdy",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 524,
            "evos": [
                "Boldore"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Boldore",
        "hp": 70,
        "atk": 105,
        "def": 105,
        "spa": 50,
        "spd": 40,
        "spe": 20,
        "weight": 102,
        "height": 0.9,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Sand Force",
            "Sturdy",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 525,
            "evos": [
                "Gigalith"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Woobat",
        "hp": 65,
        "atk": 45,
        "def": 43,
        "spa": 55,
        "spd": 43,
        "spe": 72,
        "weight": 2.1,
        "height": 0.4,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Klutz",
            "Simple",
            "Unaware"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 527,
            "evos": [
                "Swoobat"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Crustle",
        "hp": 70,
        "atk": 105,
        "def": 125,
        "spa": 65,
        "spd": 75,
        "spe": 45,
        "weight": 200,
        "height": 1.4,
        "types": [
            "Bug",
            "Rock"
        ],
        "abilities": [
            "Shell Armor",
            "Sturdy",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 558,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vanillite",
        "hp": 36,
        "atk": 50,
        "def": 50,
        "spa": 65,
        "spd": 60,
        "spe": 44,
        "weight": 5.7,
        "height": 0.4,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Snow Cloak",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 582,
            "evos": [
                "Vanillish"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vanillish",
        "hp": 51,
        "atk": 65,
        "def": 65,
        "spa": 80,
        "spd": 75,
        "spe": 59,
        "weight": 41,
        "height": 1.1,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Snow Cloak",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 583,
            "evos": [
                "Vanilluxe"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vanilluxe",
        "hp": 71,
        "atk": 95,
        "def": 85,
        "spa": 110,
        "spd": 95,
        "spe": 79,
        "weight": 57.5,
        "height": 1.3,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Snow Warning",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 584,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Deerling",
        "hp": 60,
        "atk": 60,
        "def": 50,
        "spa": 40,
        "spd": 50,
        "spe": 75,
        "weight": 19.5,
        "height": 0.6,
        "types": [
            "Normal",
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Sap Sipper",
            "Serene Grace"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 585,
            "evos": [
                "Sawsbuck"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cubchoo",
        "hp": 55,
        "atk": 70,
        "def": 40,
        "spa": 60,
        "spd": 40,
        "spe": 40,
        "weight": 8.5,
        "height": 0.5,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Rattled",
            "Slush Rush",
            "Snow Cloak"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 613,
            "evos": [
                "Beartic"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Beartic",
        "hp": 95,
        "atk": 130,
        "def": 80,
        "spa": 70,
        "spd": 80,
        "spe": 50,
        "weight": 260,
        "height": 2.6,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Slush Rush",
            "Snow Cloak",
            "Swift Swim"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 614,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cryogonal",
        "hp": 80,
        "atk": 50,
        "def": 50,
        "spa": 95,
        "spd": 135,
        "spe": 105,
        "weight": 148,
        "height": 1.1,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 615,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Necturna",
        "hp": 64,
        "atk": 120,
        "def": 100,
        "spa": 85,
        "spd": 120,
        "spe": 58,
        "weight": 49.6,
        "height": 1.65,
        "types": [
            "Grass",
            "Ghost"
        ],
        "abilities": [
            "Forewarn",
            "Telepathy"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -23,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Malaconda",
        "hp": 115,
        "atk": 100,
        "def": 60,
        "spa": 40,
        "spd": 130,
        "spe": 55,
        "weight": 108.8,
        "height": 5.5,
        "types": [
            "Dark",
            "Grass"
        ],
        "abilities": [
            "Drought",
            "Harvest",
            "Infiltrator"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -29,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Victini",
        "hp": 100,
        "atk": 100,
        "def": 100,
        "spa": 100,
        "spd": 100,
        "spe": 100,
        "weight": 4,
        "height": 0.4,
        "types": [
            "Psychic",
            "Fire"
        ],
        "abilities": [
            "Victory Star"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 494,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Patrat",
        "hp": 45,
        "atk": 55,
        "def": 39,
        "spa": 35,
        "spd": 39,
        "spe": 42,
        "weight": 11.6,
        "height": 0.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Analytic",
            "Keen Eye",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 504,
            "evos": [
                "Watchog"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Watchog",
        "hp": 60,
        "atk": 85,
        "def": 69,
        "spa": 60,
        "spd": 69,
        "spe": 77,
        "weight": 27,
        "height": 1.1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Analytic",
            "Illuminate",
            "Keen Eye"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 505,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lillipup",
        "hp": 45,
        "atk": 60,
        "def": 45,
        "spa": 25,
        "spd": 45,
        "spe": 55,
        "weight": 4.1,
        "height": 0.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Pickup",
            "Run Away",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 506,
            "evos": [
                "Herdier"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Herdier",
        "hp": 65,
        "atk": 80,
        "def": 65,
        "spa": 35,
        "spd": 65,
        "spe": 60,
        "weight": 14.7,
        "height": 0.9,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Intimidate",
            "Sand Rush",
            "Scrappy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 507,
            "evos": [
                "Stoutland"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Purrloin",
        "hp": 41,
        "atk": 50,
        "def": 37,
        "spa": 50,
        "spd": 37,
        "spe": 66,
        "weight": 10.1,
        "height": 0.4,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Limber",
            "Prankster",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 509,
            "evos": [
                "Liepard"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Liepard",
        "hp": 64,
        "atk": 88,
        "def": 50,
        "spa": 88,
        "spd": 50,
        "spe": 106,
        "weight": 37.5,
        "height": 1.1,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Limber",
            "Prankster",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 510,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Munna",
        "hp": 76,
        "atk": 25,
        "def": 45,
        "spa": 67,
        "spd": 55,
        "spe": 24,
        "weight": 23.3,
        "height": 0.6,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Forewarn",
            "Synchronize",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 517,
            "evos": [
                "Musharna"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Musharna",
        "hp": 116,
        "atk": 55,
        "def": 85,
        "spa": 107,
        "spd": 95,
        "spe": 29,
        "weight": 60.5,
        "height": 1.1,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Forewarn",
            "Synchronize",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 518,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pidove",
        "hp": 50,
        "atk": 55,
        "def": 50,
        "spa": 36,
        "spd": 30,
        "spe": 43,
        "weight": 2.1,
        "height": 0.3,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Rivalry",
            "Super Luck"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 519,
            "evos": [
                "Tranquill"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tranquill",
        "hp": 62,
        "atk": 77,
        "def": 62,
        "spa": 50,
        "spd": 42,
        "spe": 65,
        "weight": 15,
        "height": 0.6,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Rivalry",
            "Super Luck"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 520,
            "evos": [
                "Unfezant"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Blitzle",
        "hp": 45,
        "atk": 60,
        "def": 32,
        "spa": 50,
        "spd": 32,
        "spe": 76,
        "weight": 29.8,
        "height": 0.8,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Motor Drive",
            "Sap Sipper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 522,
            "evos": [
                "Zebstrika"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zebstrika",
        "hp": 75,
        "atk": 100,
        "def": 63,
        "spa": 80,
        "spd": 63,
        "spe": 116,
        "weight": 79.5,
        "height": 1.6,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Motor Drive",
            "Sap Sipper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 523,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swoobat",
        "hp": 67,
        "atk": 57,
        "def": 55,
        "spa": 77,
        "spd": 55,
        "spe": 114,
        "weight": 10.5,
        "height": 0.9,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Klutz",
            "Simple",
            "Unaware"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 528,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drilbur",
        "hp": 60,
        "atk": 85,
        "def": 40,
        "spa": 30,
        "spd": 45,
        "spe": 68,
        "weight": 8.5,
        "height": 0.3,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Mold Breaker",
            "Sand Force",
            "Sand Rush"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 529,
            "evos": [
                "Excadrill"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Excadrill",
        "hp": 110,
        "atk": 135,
        "def": 60,
        "spa": 50,
        "spd": 65,
        "spe": 88,
        "weight": 40.4,
        "height": 0.7,
        "types": [
            "Ground",
            "Steel"
        ],
        "abilities": [
            "Mold Breaker",
            "Sand Force",
            "Sand Rush"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 530,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Audino",
        "hp": 103,
        "atk": 60,
        "def": 86,
        "spa": 60,
        "spd": 86,
        "spe": 50,
        "weight": 31,
        "height": 1.1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Healer",
            "Klutz",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 531,
            "evos": [],
            "alts": [
                "Audino-Mega"
            ],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Timburr",
        "hp": 75,
        "atk": 80,
        "def": 55,
        "spa": 25,
        "spd": 35,
        "spe": 35,
        "weight": 12.5,
        "height": 0.6,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "Iron Fist",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 532,
            "evos": [
                "Gurdurr"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gurdurr",
        "hp": 85,
        "atk": 105,
        "def": 85,
        "spa": 40,
        "spd": 50,
        "spe": 40,
        "weight": 40,
        "height": 1.2,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "Iron Fist",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 533,
            "evos": [
                "Conkeldurr"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Conkeldurr",
        "hp": 105,
        "atk": 140,
        "def": 95,
        "spa": 55,
        "spd": 65,
        "spe": 45,
        "weight": 87,
        "height": 1.4,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "Iron Fist",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 534,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tympole",
        "hp": 50,
        "atk": 50,
        "def": 40,
        "spa": 50,
        "spd": 40,
        "spe": 64,
        "weight": 4.5,
        "height": 0.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hydration",
            "Swift Swim",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 535,
            "evos": [
                "Palpitoad"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Palpitoad",
        "hp": 75,
        "atk": 65,
        "def": 55,
        "spa": 65,
        "spd": 55,
        "spe": 69,
        "weight": 17,
        "height": 0.8,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Hydration",
            "Swift Swim",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 536,
            "evos": [
                "Seismitoad"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Throh",
        "hp": 120,
        "atk": 100,
        "def": 85,
        "spa": 30,
        "spd": 85,
        "spe": 45,
        "weight": 55.5,
        "height": 1.3,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "Inner Focus",
            "Mold Breaker"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 538,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sawk",
        "hp": 75,
        "atk": 125,
        "def": 75,
        "spa": 30,
        "spd": 75,
        "spe": 85,
        "weight": 51,
        "height": 1.4,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Inner Focus",
            "Mold Breaker",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 539,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sewaddle",
        "hp": 45,
        "atk": 53,
        "def": 70,
        "spa": 40,
        "spd": 60,
        "spe": 42,
        "weight": 2.5,
        "height": 0.3,
        "types": [
            "Bug",
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Overcoat",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 540,
            "evos": [
                "Swadloon"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swadloon",
        "hp": 55,
        "atk": 63,
        "def": 90,
        "spa": 50,
        "spd": 80,
        "spe": 42,
        "weight": 7.3,
        "height": 0.5,
        "types": [
            "Bug",
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Overcoat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 541,
            "evos": [
                "Leavanny"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Petilil",
        "hp": 45,
        "atk": 35,
        "def": 50,
        "spa": 70,
        "spd": 50,
        "spe": 30,
        "weight": 6.6,
        "height": 0.5,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Own Tempo"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 548,
            "evos": [
                "Lilligant",
                "Lilligant-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lilligant",
        "hp": 70,
        "atk": 60,
        "def": 75,
        "spa": 110,
        "spd": 75,
        "spe": 90,
        "weight": 16.3,
        "height": 1.1,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Own Tempo"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 549,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Basculin",
        "hp": 70,
        "atk": 92,
        "def": 65,
        "spa": 80,
        "spd": 55,
        "spe": 98,
        "weight": 18,
        "height": 1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Adaptability",
            "Mold Breaker",
            "Reckless"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 550,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sandile",
        "hp": 50,
        "atk": 72,
        "def": 35,
        "spa": 35,
        "spd": 35,
        "spe": 65,
        "weight": 15.2,
        "height": 0.7,
        "types": [
            "Ground",
            "Dark"
        ],
        "abilities": [
            "Anger Point",
            "Intimidate",
            "Moxie"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 551,
            "evos": [
                "Krokorok"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Krokorok",
        "hp": 60,
        "atk": 82,
        "def": 45,
        "spa": 45,
        "spd": 45,
        "spe": 74,
        "weight": 33.4,
        "height": 1,
        "types": [
            "Ground",
            "Dark"
        ],
        "abilities": [
            "Anger Point",
            "Intimidate",
            "Moxie"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 552,
            "evos": [
                "Krookodile"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Darumaka",
        "hp": 70,
        "atk": 90,
        "def": 45,
        "spa": 15,
        "spd": 45,
        "spe": 50,
        "weight": 37.5,
        "height": 0.6,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Hustle",
            "Inner Focus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 554,
            "evos": [
                "Darmanitan"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Darmanitan",
        "hp": 105,
        "atk": 140,
        "def": 55,
        "spa": 30,
        "spd": 55,
        "spe": 95,
        "weight": 92.9,
        "height": 1.3,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Sheer Force",
            "Zen Mode"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 555,
            "evos": [],
            "alts": [
                "Darmanitan-Zen"
            ],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Maractus",
        "hp": 75,
        "atk": 86,
        "def": 67,
        "spa": 106,
        "spd": 67,
        "spe": 60,
        "weight": 28,
        "height": 1,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Storm Drain",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 556,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dwebble",
        "hp": 50,
        "atk": 65,
        "def": 85,
        "spa": 35,
        "spd": 35,
        "spe": 55,
        "weight": 14.5,
        "height": 0.3,
        "types": [
            "Bug",
            "Rock"
        ],
        "abilities": [
            "Shell Armor",
            "Sturdy",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 557,
            "evos": [
                "Crustle"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Scraggy",
        "hp": 50,
        "atk": 75,
        "def": 70,
        "spa": 35,
        "spd": 70,
        "spe": 48,
        "weight": 11.8,
        "height": 0.6,
        "types": [
            "Dark",
            "Fighting"
        ],
        "abilities": [
            "Intimidate",
            "Moxie",
            "Shed Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 559,
            "evos": [
                "Scrafty"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Scrafty",
        "hp": 65,
        "atk": 90,
        "def": 115,
        "spa": 45,
        "spd": 115,
        "spe": 58,
        "weight": 30,
        "height": 1.1,
        "types": [
            "Dark",
            "Fighting"
        ],
        "abilities": [
            "Intimidate",
            "Moxie",
            "Shed Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 560,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sigilyph",
        "hp": 72,
        "atk": 58,
        "def": 80,
        "spa": 103,
        "spd": 80,
        "spe": 97,
        "weight": 14,
        "height": 1.4,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Magic Guard",
            "Tinted Lens",
            "Wonder Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 561,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Yamask",
        "hp": 38,
        "atk": 30,
        "def": 85,
        "spa": 55,
        "spd": 65,
        "spe": 30,
        "weight": 1.5,
        "height": 0.5,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Mummy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 562,
            "evos": [
                "Cofagrigus"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cofagrigus",
        "hp": 58,
        "atk": 50,
        "def": 145,
        "spa": 95,
        "spd": 105,
        "spe": 30,
        "weight": 76.5,
        "height": 1.7,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Mummy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 563,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tirtouga",
        "hp": 54,
        "atk": 78,
        "def": 103,
        "spa": 53,
        "spd": 45,
        "spe": 22,
        "weight": 16.5,
        "height": 0.7,
        "types": [
            "Water",
            "Rock"
        ],
        "abilities": [
            "Solid Rock",
            "Sturdy",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 564,
            "evos": [
                "Carracosta"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Carracosta",
        "hp": 74,
        "atk": 108,
        "def": 133,
        "spa": 83,
        "spd": 65,
        "spe": 32,
        "weight": 81,
        "height": 1.2,
        "types": [
            "Water",
            "Rock"
        ],
        "abilities": [
            "Solid Rock",
            "Sturdy",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 565,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Archen",
        "hp": 55,
        "atk": 112,
        "def": 45,
        "spa": 74,
        "spd": 45,
        "spe": 70,
        "weight": 9.5,
        "height": 0.5,
        "types": [
            "Rock",
            "Flying"
        ],
        "abilities": [
            "Defeatist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 566,
            "evos": [
                "Archeops"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Archeops",
        "hp": 75,
        "atk": 140,
        "def": 65,
        "spa": 112,
        "spd": 65,
        "spe": 110,
        "weight": 32,
        "height": 1.4,
        "types": [
            "Rock",
            "Flying"
        ],
        "abilities": [
            "Defeatist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 567,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Trubbish",
        "hp": 50,
        "atk": 50,
        "def": 62,
        "spa": 40,
        "spd": 62,
        "spe": 65,
        "weight": 31,
        "height": 0.6,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Aftermath",
            "Stench",
            "Sticky Hold"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 568,
            "evos": [
                "Garbodor"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Garbodor",
        "hp": 80,
        "atk": 95,
        "def": 82,
        "spa": 60,
        "spd": 82,
        "spe": 75,
        "weight": 107.3,
        "height": 1.9,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Aftermath",
            "Stench",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 569,
            "evos": [],
            "alts": [
                "Garbodor-Gmax"
            ],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zorua",
        "hp": 40,
        "atk": 65,
        "def": 40,
        "spa": 80,
        "spd": 40,
        "spe": 65,
        "weight": 12.5,
        "height": 0.7,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Illusion"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 570,
            "evos": [
                "Zoroark"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zoroark",
        "hp": 60,
        "atk": 105,
        "def": 60,
        "spa": 120,
        "spd": 60,
        "spe": 105,
        "weight": 81.1,
        "height": 1.6,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Illusion"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 571,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Minccino",
        "hp": 55,
        "atk": 50,
        "def": 40,
        "spa": 40,
        "spd": 40,
        "spe": 75,
        "weight": 5.8,
        "height": 0.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cute Charm",
            "Skill Link",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 572,
            "evos": [
                "Cinccino"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cinccino",
        "hp": 75,
        "atk": 95,
        "def": 60,
        "spa": 65,
        "spd": 60,
        "spe": 115,
        "weight": 7.5,
        "height": 0.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cute Charm",
            "Skill Link",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 573,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Solosis",
        "hp": 45,
        "atk": 30,
        "def": 40,
        "spa": 105,
        "spd": 50,
        "spe": 20,
        "weight": 1,
        "height": 0.3,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Magic Guard",
            "Overcoat",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 577,
            "evos": [
                "Duosion"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Duosion",
        "hp": 65,
        "atk": 40,
        "def": 50,
        "spa": 125,
        "spd": 60,
        "spe": 30,
        "weight": 8,
        "height": 0.6,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Magic Guard",
            "Overcoat",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 578,
            "evos": [
                "Reuniclus"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Reuniclus",
        "hp": 110,
        "atk": 65,
        "def": 75,
        "spa": 125,
        "spd": 85,
        "spe": 30,
        "weight": 20.1,
        "height": 1,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Magic Guard",
            "Overcoat",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 579,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ducklett",
        "hp": 62,
        "atk": 44,
        "def": 50,
        "spa": 44,
        "spd": 50,
        "spe": 55,
        "weight": 5.5,
        "height": 0.5,
        "types": [
            "Water",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Hydration",
            "Keen Eye"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 580,
            "evos": [
                "Swanna"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swanna",
        "hp": 75,
        "atk": 87,
        "def": 63,
        "spa": 87,
        "spd": 63,
        "spe": 98,
        "weight": 24.2,
        "height": 1.3,
        "types": [
            "Water",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Hydration",
            "Keen Eye"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 581,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sawsbuck",
        "hp": 80,
        "atk": 100,
        "def": 70,
        "spa": 60,
        "spd": 70,
        "spe": 95,
        "weight": 92.5,
        "height": 1.9,
        "types": [
            "Normal",
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Sap Sipper",
            "Serene Grace"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 586,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Emolga",
        "hp": 55,
        "atk": 75,
        "def": 60,
        "spa": 75,
        "spd": 60,
        "spe": 103,
        "weight": 5,
        "height": 0.4,
        "types": [
            "Electric",
            "Flying"
        ],
        "abilities": [
            "Motor Drive",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 587,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Karrablast",
        "hp": 50,
        "atk": 75,
        "def": 45,
        "spa": 40,
        "spd": 45,
        "spe": 60,
        "weight": 5.9,
        "height": 0.5,
        "types": [
            "Bug"
        ],
        "abilities": [
            "No Guard",
            "Shed Skin",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 588,
            "evos": [
                "Escavalier"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Escavalier",
        "hp": 70,
        "atk": 135,
        "def": 105,
        "spa": 60,
        "spd": 105,
        "spe": 20,
        "weight": 33,
        "height": 1,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Overcoat",
            "Shell Armor",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 589,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Foongus",
        "hp": 69,
        "atk": 55,
        "def": 45,
        "spa": 55,
        "spd": 55,
        "spe": 15,
        "weight": 1,
        "height": 0.2,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Effect Spore",
            "Regenerator"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 590,
            "evos": [
                "Amoonguss"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Amoonguss",
        "hp": 114,
        "atk": 85,
        "def": 70,
        "spa": 85,
        "spd": 80,
        "spe": 30,
        "weight": 10.5,
        "height": 0.6,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Effect Spore",
            "Regenerator"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 591,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Frillish",
        "hp": 55,
        "atk": 40,
        "def": 50,
        "spa": 65,
        "spd": 85,
        "spe": 40,
        "weight": 33,
        "height": 1.2,
        "types": [
            "Water",
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Damp",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 592,
            "evos": [
                "Jellicent"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Jellicent",
        "hp": 100,
        "atk": 60,
        "def": 70,
        "spa": 85,
        "spd": 105,
        "spe": 60,
        "weight": 135,
        "height": 2.2,
        "types": [
            "Water",
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Damp",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 593,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Alomomola",
        "hp": 165,
        "atk": 75,
        "def": 80,
        "spa": 40,
        "spd": 45,
        "spe": 65,
        "weight": 31.6,
        "height": 1.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Healer",
            "Hydration",
            "Regenerator"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 594,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Joltik",
        "hp": 50,
        "atk": 47,
        "def": 50,
        "spa": 57,
        "spd": 50,
        "spe": 65,
        "weight": 0.6,
        "height": 0.1,
        "types": [
            "Bug",
            "Electric"
        ],
        "abilities": [
            "Compound Eyes",
            "Swarm",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 595,
            "evos": [
                "Galvantula"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Galvantula",
        "hp": 70,
        "atk": 77,
        "def": 60,
        "spa": 97,
        "spd": 60,
        "spe": 108,
        "weight": 14.3,
        "height": 0.8,
        "types": [
            "Bug",
            "Electric"
        ],
        "abilities": [
            "Compound Eyes",
            "Swarm",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 596,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ferroseed",
        "hp": 44,
        "atk": 50,
        "def": 91,
        "spa": 24,
        "spd": 86,
        "spe": 10,
        "weight": 18.8,
        "height": 0.6,
        "types": [
            "Grass",
            "Steel"
        ],
        "abilities": [
            "Iron Barbs"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 597,
            "evos": [
                "Ferrothorn"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Klang",
        "hp": 60,
        "atk": 80,
        "def": 95,
        "spa": 70,
        "spd": 85,
        "spe": 50,
        "weight": 51,
        "height": 0.6,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Clear Body",
            "Minus",
            "Plus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 600,
            "evos": [
                "Klinklang"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Klinklang",
        "hp": 60,
        "atk": 100,
        "def": 115,
        "spa": 70,
        "spd": 85,
        "spe": 90,
        "weight": 81,
        "height": 0.6,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Clear Body",
            "Minus",
            "Plus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 601,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tynamo",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 45,
        "spd": 40,
        "spe": 60,
        "weight": 0.3,
        "height": 0.2,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 602,
            "evos": [
                "Eelektrik"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Eelektrik",
        "hp": 65,
        "atk": 85,
        "def": 70,
        "spa": 75,
        "spd": 70,
        "spe": 40,
        "weight": 22,
        "height": 1.2,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 603,
            "evos": [
                "Eelektross"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Eelektross",
        "hp": 85,
        "atk": 115,
        "def": 80,
        "spa": 105,
        "spd": 80,
        "spe": 50,
        "weight": 80.5,
        "height": 2.1,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 604,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Elgyem",
        "hp": 55,
        "atk": 55,
        "def": 55,
        "spa": 85,
        "spd": 55,
        "spe": 30,
        "weight": 9,
        "height": 0.5,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Analytic",
            "Synchronize",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 605,
            "evos": [
                "Beheeyem"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Beheeyem",
        "hp": 75,
        "atk": 75,
        "def": 75,
        "spa": 125,
        "spd": 95,
        "spe": 40,
        "weight": 34.5,
        "height": 1,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Analytic",
            "Synchronize",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 606,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Axew",
        "hp": 46,
        "atk": 87,
        "def": 60,
        "spa": 30,
        "spd": 40,
        "spe": 57,
        "weight": 18,
        "height": 0.6,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Mold Breaker",
            "Rivalry",
            "Unnerve"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 610,
            "evos": [
                "Fraxure"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Fraxure",
        "hp": 66,
        "atk": 117,
        "def": 70,
        "spa": 40,
        "spd": 50,
        "spe": 67,
        "weight": 36,
        "height": 1,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Mold Breaker",
            "Rivalry",
            "Unnerve"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 611,
            "evos": [
                "Haxorus"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Haxorus",
        "hp": 76,
        "atk": 147,
        "def": 90,
        "spa": 60,
        "spd": 70,
        "spe": 97,
        "weight": 105.5,
        "height": 1.8,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Mold Breaker",
            "Rivalry",
            "Unnerve"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 612,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shelmet",
        "hp": 50,
        "atk": 40,
        "def": 85,
        "spa": 40,
        "spd": 65,
        "spe": 25,
        "weight": 7.7,
        "height": 0.4,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Hydration",
            "Overcoat",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 616,
            "evos": [
                "Accelgor"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Accelgor",
        "hp": 80,
        "atk": 70,
        "def": 40,
        "spa": 100,
        "spd": 60,
        "spe": 145,
        "weight": 25.3,
        "height": 0.8,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Hydration",
            "Sticky Hold",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 617,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stunfisk",
        "hp": 109,
        "atk": 66,
        "def": 84,
        "spa": 81,
        "spd": 99,
        "spe": 32,
        "weight": 11,
        "height": 0.7,
        "types": [
            "Ground",
            "Electric"
        ],
        "abilities": [
            "Limber",
            "Sand Veil",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 618,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mienfoo",
        "hp": 45,
        "atk": 85,
        "def": 50,
        "spa": 55,
        "spd": 50,
        "spe": 65,
        "weight": 20,
        "height": 0.9,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Inner Focus",
            "Reckless",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 619,
            "evos": [
                "Mienshao"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mienshao",
        "hp": 65,
        "atk": 125,
        "def": 60,
        "spa": 95,
        "spd": 60,
        "spe": 105,
        "weight": 35.5,
        "height": 1.4,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Inner Focus",
            "Reckless",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 620,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Druddigon",
        "hp": 77,
        "atk": 120,
        "def": 90,
        "spa": 60,
        "spd": 90,
        "spe": 48,
        "weight": 139,
        "height": 1.6,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Mold Breaker",
            "Rough Skin",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 621,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Golett",
        "hp": 59,
        "atk": 74,
        "def": 50,
        "spa": 35,
        "spd": 50,
        "spe": 35,
        "weight": 92,
        "height": 1,
        "types": [
            "Ground",
            "Ghost"
        ],
        "abilities": [
            "Iron Fist",
            "Klutz",
            "No Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 622,
            "evos": [
                "Golurk"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Golurk",
        "hp": 89,
        "atk": 124,
        "def": 80,
        "spa": 55,
        "spd": 80,
        "spe": 55,
        "weight": 330,
        "height": 2.8,
        "types": [
            "Ground",
            "Ghost"
        ],
        "abilities": [
            "Iron Fist",
            "Klutz",
            "No Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 623,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pawniard",
        "hp": 45,
        "atk": 85,
        "def": 70,
        "spa": 40,
        "spd": 40,
        "spe": 60,
        "weight": 10.2,
        "height": 0.5,
        "types": [
            "Dark",
            "Steel"
        ],
        "abilities": [
            "Defiant",
            "Inner Focus",
            "Pressure"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 624,
            "evos": [
                "Bisharp"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bisharp",
        "hp": 65,
        "atk": 125,
        "def": 100,
        "spa": 60,
        "spd": 70,
        "spe": 70,
        "weight": 70,
        "height": 1.6,
        "types": [
            "Dark",
            "Steel"
        ],
        "abilities": [
            "Defiant",
            "Inner Focus",
            "Pressure"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 625,
            "evos": [
                "Kingambit"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bouffalant",
        "hp": 95,
        "atk": 110,
        "def": 95,
        "spa": 40,
        "spd": 95,
        "spe": 55,
        "weight": 94.6,
        "height": 1.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Reckless",
            "Sap Sipper",
            "Soundproof"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 626,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Braviary",
        "hp": 100,
        "atk": 123,
        "def": 75,
        "spa": 57,
        "spd": 75,
        "spe": 80,
        "weight": 41,
        "height": 1.5,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Defiant",
            "Keen Eye",
            "Sheer Force"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 628,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vullaby",
        "hp": 70,
        "atk": 55,
        "def": 75,
        "spa": 45,
        "spd": 65,
        "spe": 60,
        "weight": 9,
        "height": 0.5,
        "types": [
            "Dark",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Overcoat",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 629,
            "evos": [
                "Mandibuzz"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mandibuzz",
        "hp": 110,
        "atk": 65,
        "def": 105,
        "spa": 55,
        "spd": 95,
        "spe": 80,
        "weight": 39.5,
        "height": 1.2,
        "types": [
            "Dark",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Overcoat",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 630,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Heatmor",
        "hp": 85,
        "atk": 97,
        "def": 66,
        "spa": 105,
        "spd": 66,
        "spe": 65,
        "weight": 58,
        "height": 1.4,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flash Fire",
            "Gluttony",
            "White Smoke"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 631,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Durant",
        "hp": 58,
        "atk": 109,
        "def": 112,
        "spa": 48,
        "spd": 48,
        "spe": 109,
        "weight": 33,
        "height": 0.3,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Hustle",
            "Swarm",
            "Truant"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 632,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Deino",
        "hp": 52,
        "atk": 65,
        "def": 50,
        "spa": 45,
        "spd": 50,
        "spe": 38,
        "weight": 17.3,
        "height": 0.8,
        "types": [
            "Dark",
            "Dragon"
        ],
        "abilities": [
            "Hustle"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 633,
            "evos": [
                "Zweilous"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zweilous",
        "hp": 72,
        "atk": 85,
        "def": 70,
        "spa": 65,
        "spd": 70,
        "spe": 58,
        "weight": 50,
        "height": 1.4,
        "types": [
            "Dark",
            "Dragon"
        ],
        "abilities": [
            "Hustle"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 634,
            "evos": [
                "Hydreigon"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hydreigon",
        "hp": 92,
        "atk": 105,
        "def": 90,
        "spa": 125,
        "spd": 90,
        "spe": 98,
        "weight": 160,
        "height": 1.8,
        "types": [
            "Dark",
            "Dragon"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "UUBL"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 635,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cobalion",
        "hp": 91,
        "atk": 90,
        "def": 129,
        "spa": 90,
        "spd": 72,
        "spe": 108,
        "weight": 250,
        "height": 2.1,
        "types": [
            "Steel",
            "Fighting"
        ],
        "abilities": [
            "Justified"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 638,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Terrakion",
        "hp": 91,
        "atk": 129,
        "def": 90,
        "spa": 72,
        "spd": 90,
        "spe": 108,
        "weight": 260,
        "height": 1.9,
        "types": [
            "Rock",
            "Fighting"
        ],
        "abilities": [
            "Justified"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 639,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Virizion",
        "hp": 91,
        "atk": 90,
        "def": 72,
        "spa": 90,
        "spd": 129,
        "spe": 108,
        "weight": 200,
        "height": 2,
        "types": [
            "Grass",
            "Fighting"
        ],
        "abilities": [
            "Justified"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 640,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tornadus",
        "hp": 79,
        "atk": 115,
        "def": 70,
        "spa": 125,
        "spd": 80,
        "spe": 111,
        "weight": 63,
        "height": 1.5,
        "types": [
            "Flying"
        ],
        "abilities": [
            "Defiant",
            "Prankster"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 641,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tornadus-Therian",
        "hp": 79,
        "atk": 100,
        "def": 80,
        "spa": 110,
        "spd": 90,
        "spe": 121,
        "weight": 63,
        "height": 1.4,
        "types": [
            "Flying"
        ],
        "abilities": [
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 641,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Thundurus",
        "hp": 79,
        "atk": 115,
        "def": 70,
        "spa": 125,
        "spd": 80,
        "spe": 111,
        "weight": 61,
        "height": 1.5,
        "types": [
            "Electric",
            "Flying"
        ],
        "abilities": [
            "Defiant",
            "Prankster"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 642,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Thundurus-Therian",
        "hp": 79,
        "atk": 105,
        "def": 70,
        "spa": 145,
        "spd": 80,
        "spe": 101,
        "weight": 61,
        "height": 3,
        "types": [
            "Electric",
            "Flying"
        ],
        "abilities": [
            "Volt Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 642,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Reshiram",
        "hp": 100,
        "atk": 120,
        "def": 100,
        "spa": 150,
        "spd": 120,
        "spe": 90,
        "weight": 330,
        "height": 3.2,
        "types": [
            "Dragon",
            "Fire"
        ],
        "abilities": [
            "Turboblaze"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 643,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zekrom",
        "hp": 100,
        "atk": 150,
        "def": 120,
        "spa": 120,
        "spd": 100,
        "spe": 90,
        "weight": 345,
        "height": 2.9,
        "types": [
            "Dragon",
            "Electric"
        ],
        "abilities": [
            "Teravolt"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 644,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Landorus",
        "hp": 89,
        "atk": 125,
        "def": 90,
        "spa": 115,
        "spd": 80,
        "spe": 101,
        "weight": 68,
        "height": 1.5,
        "types": [
            "Ground",
            "Flying"
        ],
        "abilities": [
            "Sand Force",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 645,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Landorus-Therian",
        "hp": 89,
        "atk": 145,
        "def": 90,
        "spa": 105,
        "spd": 80,
        "spe": 91,
        "weight": 68,
        "height": 1.3,
        "types": [
            "Ground",
            "Flying"
        ],
        "abilities": [
            "Intimidate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 645,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kyurem",
        "hp": 125,
        "atk": 130,
        "def": 90,
        "spa": 130,
        "spd": 90,
        "spe": 95,
        "weight": 325,
        "height": 3,
        "types": [
            "Dragon",
            "Ice"
        ],
        "abilities": [
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 646,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kyurem-Black",
        "hp": 125,
        "atk": 170,
        "def": 100,
        "spa": 120,
        "spd": 90,
        "spe": 95,
        "weight": 325,
        "height": 3.3,
        "types": [
            "Dragon",
            "Ice"
        ],
        "abilities": [
            "Teravolt"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 646,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kyurem-White",
        "hp": 125,
        "atk": 120,
        "def": 90,
        "spa": 170,
        "spd": 100,
        "spe": 95,
        "weight": 325,
        "height": 3.6,
        "types": [
            "Dragon",
            "Ice"
        ],
        "abilities": [
            "Turboblaze"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 646,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Keldeo",
        "hp": 91,
        "atk": 72,
        "def": 90,
        "spa": 129,
        "spd": 90,
        "spe": 108,
        "weight": 48.5,
        "height": 1.4,
        "types": [
            "Water",
            "Fighting"
        ],
        "abilities": [
            "Justified"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 647,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Keldeo-Resolute",
        "hp": 91,
        "atk": 72,
        "def": 90,
        "spa": 129,
        "spd": 90,
        "spe": 108,
        "weight": 48.5,
        "height": 1.4,
        "types": [
            "Water",
            "Fighting"
        ],
        "abilities": [
            "Justified"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 647,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meloetta",
        "hp": 100,
        "atk": 77,
        "def": 77,
        "spa": 128,
        "spd": 128,
        "spe": 90,
        "weight": 6.5,
        "height": 0.6,
        "types": [
            "Normal",
            "Psychic"
        ],
        "abilities": [
            "Serene Grace"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 648,
            "evos": [],
            "alts": [
                "Meloetta-Pirouette"
            ],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Genesect",
        "hp": 71,
        "atk": 120,
        "def": 95,
        "spa": 120,
        "spd": 95,
        "spe": 99,
        "weight": 82.5,
        "height": 1.5,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Download"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 649,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Genesect-Douse",
        "hp": 71,
        "atk": 120,
        "def": 95,
        "spa": 120,
        "spd": 95,
        "spe": 99,
        "weight": 82.5,
        "height": 1.5,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Download"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 649,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Genesect-Shock",
        "hp": 71,
        "atk": 120,
        "def": 95,
        "spa": 120,
        "spd": 95,
        "spe": 99,
        "weight": 82.5,
        "height": 1.5,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Download"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 649,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Genesect-Burn",
        "hp": 71,
        "atk": 120,
        "def": 95,
        "spa": 120,
        "spd": 95,
        "spe": 99,
        "weight": 82.5,
        "height": 1.5,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Download"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 649,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Genesect-Chill",
        "hp": 71,
        "atk": 120,
        "def": 95,
        "spa": 120,
        "spd": 95,
        "spe": 99,
        "weight": 82.5,
        "height": 1.5,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Download"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 649,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Scratchet",
        "hp": 55,
        "atk": 85,
        "def": 80,
        "spa": 20,
        "spd": 70,
        "spe": 40,
        "weight": 20,
        "height": 0.5,
        "types": [
            "Normal",
            "Fighting"
        ],
        "abilities": [
            "Prankster",
            "Scrappy",
            "Vital Spirit"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -20,
            "evos": [
                "Tomohawk"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tomohawk",
        "hp": 105,
        "atk": 60,
        "def": 90,
        "spa": 115,
        "spd": 80,
        "spe": 85,
        "weight": 37.2,
        "height": 1.27,
        "types": [
            "Flying",
            "Fighting"
        ],
        "abilities": [
            "Intimidate",
            "Justified",
            "Prankster"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -21,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Necturine",
        "hp": 49,
        "atk": 55,
        "def": 60,
        "spa": 50,
        "spd": 75,
        "spe": 51,
        "weight": 1.8,
        "height": 0.3,
        "types": [
            "Grass",
            "Ghost"
        ],
        "abilities": [
            "Anticipation",
            "Telepathy"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -22,
            "evos": [
                "Necturna"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mollux",
        "hp": 95,
        "atk": 45,
        "def": 83,
        "spa": 131,
        "spd": 105,
        "spe": 76,
        "weight": 41,
        "height": 1.2,
        "types": [
            "Fire",
            "Poison"
        ],
        "abilities": [
            "Dry Skin",
            "Illuminate"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -24,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cupra",
        "hp": 50,
        "atk": 60,
        "def": 49,
        "spa": 67,
        "spd": 30,
        "spe": 44,
        "weight": 4.8,
        "height": 0.5,
        "types": [
            "Bug",
            "Psychic"
        ],
        "abilities": [
            "Keen Eye",
            "Magic Guard",
            "Shield Dust"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -25,
            "evos": [
                "Argalis"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Argalis",
        "hp": 60,
        "atk": 90,
        "def": 89,
        "spa": 87,
        "spd": 40,
        "spe": 54,
        "weight": 341.4,
        "height": 1.3,
        "types": [
            "Bug",
            "Psychic"
        ],
        "abilities": [
            "Compound Eyes",
            "Overcoat",
            "Shed Skin"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -26,
            "evos": [
                "Aurumoth"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Aurumoth",
        "hp": 110,
        "atk": 120,
        "def": 99,
        "spa": 117,
        "spd": 60,
        "spe": 94,
        "weight": 193,
        "height": 2.1,
        "types": [
            "Bug",
            "Psychic"
        ],
        "abilities": [
            "Light Metal",
            "No Guard",
            "Weak Armor"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -27,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Brattler",
        "hp": 80,
        "atk": 70,
        "def": 40,
        "spa": 20,
        "spd": 90,
        "spe": 30,
        "weight": 11.5,
        "height": 1.8,
        "types": [
            "Dark",
            "Grass"
        ],
        "abilities": [
            "Harvest",
            "Infiltrator",
            "Rattled"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -28,
            "evos": [
                "Malaconda"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cawdet",
        "hp": 35,
        "atk": 72,
        "def": 85,
        "spa": 40,
        "spd": 55,
        "spe": 88,
        "weight": 25,
        "height": 0.76,
        "types": [
            "Steel",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Keen Eye",
            "Volt Absorb"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -30,
            "evos": [
                "Cawmodore"
            ],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cawmodore",
        "hp": 50,
        "atk": 92,
        "def": 130,
        "spa": 65,
        "spd": 75,
        "spe": 118,
        "weight": 37,
        "height": 1.7,
        "types": [
            "Steel",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Intimidate",
            "Volt Absorb"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -31,
            "evos": [],
            "alts": [],
            "genfamily": [
                "BW",
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arceus-Fairy",
        "hp": 120,
        "atk": 120,
        "def": 120,
        "spa": 120,
        "spd": 120,
        "spe": 120,
        "weight": 320,
        "height": 3.2,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Multitype"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 493,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Greninja",
        "hp": 72,
        "atk": 95,
        "def": 67,
        "spa": 103,
        "spd": 71,
        "spe": 122,
        "weight": 40,
        "height": 1.5,
        "types": [
            "Water",
            "Dark"
        ],
        "abilities": [
            "Battle Bond",
            "Protean",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 658,
            "evos": [],
            "alts": [
                "Greninja-Ash"
            ],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vivillon",
        "hp": 80,
        "atk": 52,
        "def": 50,
        "spa": 90,
        "spd": 50,
        "spe": 89,
        "weight": 17,
        "height": 1.2,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Compound Eyes",
            "Friend Guard",
            "Shield Dust"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 666,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meowstic-M",
        "hp": 74,
        "atk": 48,
        "def": 76,
        "spa": 83,
        "spd": 81,
        "spe": 104,
        "weight": 8.5,
        "height": 0.6,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Infiltrator",
            "Keen Eye",
            "Prankster"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 678,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zygarde",
        "hp": 108,
        "atk": 100,
        "def": 121,
        "spa": 81,
        "spd": 95,
        "spe": 95,
        "weight": 305,
        "height": 5,
        "types": [
            "Dragon",
            "Ground"
        ],
        "abilities": [
            "Aura Break",
            "Power Construct"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 718,
            "evos": [],
            "alts": [
                "Zygarde-Complete"
            ],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Naviathan",
        "hp": 103,
        "atk": 110,
        "def": 90,
        "spa": 95,
        "spd": 65,
        "spe": 97,
        "weight": 510,
        "height": 3,
        "types": [
            "Water",
            "Steel"
        ],
        "abilities": [
            "Guts",
            "Heatproof",
            "Light Metal"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -38,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Aegislash",
        "hp": 60,
        "atk": 50,
        "def": 150,
        "spa": 50,
        "spd": 150,
        "spe": 60,
        "weight": 53,
        "height": 1.7,
        "types": [
            "Steel",
            "Ghost"
        ],
        "abilities": [
            "Stance Change"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 681,
            "evos": [],
            "alts": [
                "Aegislash-Blade"
            ],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pumpkaboo-Small",
        "hp": 44,
        "atk": 66,
        "def": 70,
        "spa": 44,
        "spd": 55,
        "spe": 56,
        "weight": 3.5,
        "height": 0.3,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 710,
            "evos": [
                "Gourgeist-Small"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pumpkaboo-Large",
        "hp": 54,
        "atk": 66,
        "def": 70,
        "spa": 44,
        "spd": 55,
        "spe": 46,
        "weight": 7.5,
        "height": 0.5,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 710,
            "evos": [
                "Gourgeist-Large"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gourgeist-Small",
        "hp": 55,
        "atk": 85,
        "def": 122,
        "spa": 58,
        "spd": 75,
        "spe": 99,
        "weight": 9.5,
        "height": 0.7,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 711,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gourgeist-Large",
        "hp": 75,
        "atk": 95,
        "def": 122,
        "spa": 58,
        "spd": 75,
        "spe": 69,
        "weight": 14,
        "height": 1.1,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 711,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hawlucha",
        "hp": 78,
        "atk": 92,
        "def": 75,
        "spa": 74,
        "spd": 63,
        "spe": 118,
        "weight": 21.5,
        "height": 0.8,
        "types": [
            "Fighting",
            "Flying"
        ],
        "abilities": [
            "Limber",
            "Mold Breaker",
            "Unburden"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 701,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bergmite",
        "hp": 55,
        "atk": 69,
        "def": 85,
        "spa": 32,
        "spd": 35,
        "spe": 28,
        "weight": 99.5,
        "height": 1,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Own Tempo",
            "Sturdy"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 712,
            "evos": [
                "Avalugg",
                "Avalugg-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Avalugg",
        "hp": 95,
        "atk": 117,
        "def": 184,
        "spa": 44,
        "spd": 46,
        "spe": 28,
        "weight": 505,
        "height": 2,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Own Tempo",
            "Sturdy"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 713,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Noibat",
        "hp": 40,
        "atk": 30,
        "def": 35,
        "spa": 45,
        "spd": 40,
        "spe": 55,
        "weight": 8,
        "height": 0.5,
        "types": [
            "Flying",
            "Dragon"
        ],
        "abilities": [
            "Frisk",
            "Infiltrator",
            "Telepathy"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 714,
            "evos": [
                "Noivern"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Noivern",
        "hp": 85,
        "atk": 70,
        "def": 80,
        "spa": 97,
        "spd": 80,
        "spe": 123,
        "weight": 85,
        "height": 1.5,
        "types": [
            "Flying",
            "Dragon"
        ],
        "abilities": [
            "Frisk",
            "Infiltrator",
            "Telepathy"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 715,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spewpa",
        "hp": 45,
        "atk": 22,
        "def": 60,
        "spa": 27,
        "spd": 30,
        "spe": 29,
        "weight": 8.4,
        "height": 0.3,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Friend Guard",
            "Shed Skin"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 665,
            "evos": [
                "Vivillon",
                "Vivillon-Fancy"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vivillon-Fancy",
        "hp": 80,
        "atk": 52,
        "def": 50,
        "spa": 90,
        "spd": 50,
        "spe": 89,
        "weight": 17,
        "height": 1.2,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Compound Eyes",
            "Friend Guard",
            "Shield Dust"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 666,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chespin",
        "hp": 56,
        "atk": 61,
        "def": 65,
        "spa": 48,
        "spd": 45,
        "spe": 38,
        "weight": 9,
        "height": 0.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Bulletproof",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 650,
            "evos": [
                "Quilladin"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Quilladin",
        "hp": 61,
        "atk": 78,
        "def": 95,
        "spa": 56,
        "spd": 58,
        "spe": 57,
        "weight": 29,
        "height": 0.7,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Bulletproof",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 651,
            "evos": [
                "Chesnaught"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chesnaught",
        "hp": 88,
        "atk": 107,
        "def": 122,
        "spa": 74,
        "spd": 75,
        "spe": 64,
        "weight": 90,
        "height": 1.6,
        "types": [
            "Grass",
            "Fighting"
        ],
        "abilities": [
            "Bulletproof",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 652,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Fennekin",
        "hp": 40,
        "atk": 45,
        "def": 40,
        "spa": 62,
        "spd": 60,
        "spe": 60,
        "weight": 9.4,
        "height": 0.4,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Magician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 653,
            "evos": [
                "Braixen"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Braixen",
        "hp": 59,
        "atk": 59,
        "def": 58,
        "spa": 90,
        "spd": 70,
        "spe": 73,
        "weight": 14.5,
        "height": 1,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Magician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 654,
            "evos": [
                "Delphox"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Delphox",
        "hp": 75,
        "atk": 69,
        "def": 72,
        "spa": 114,
        "spd": 100,
        "spe": 104,
        "weight": 39,
        "height": 1.5,
        "types": [
            "Fire",
            "Psychic"
        ],
        "abilities": [
            "Blaze",
            "Magician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 655,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Froakie",
        "hp": 41,
        "atk": 56,
        "def": 40,
        "spa": 62,
        "spd": 44,
        "spe": 71,
        "weight": 7,
        "height": 0.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Protean",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 656,
            "evos": [
                "Frogadier"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Frogadier",
        "hp": 54,
        "atk": 63,
        "def": 52,
        "spa": 83,
        "spd": 56,
        "spe": 97,
        "weight": 10.9,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Protean",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 657,
            "evos": [
                "Greninja"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bunnelby",
        "hp": 38,
        "atk": 36,
        "def": 38,
        "spa": 32,
        "spd": 36,
        "spe": 57,
        "weight": 5,
        "height": 0.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cheek Pouch",
            "Huge Power",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 659,
            "evos": [
                "Diggersby"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Diggersby",
        "hp": 85,
        "atk": 56,
        "def": 77,
        "spa": 50,
        "spd": 77,
        "spe": 78,
        "weight": 42.4,
        "height": 1,
        "types": [
            "Normal",
            "Ground"
        ],
        "abilities": [
            "Cheek Pouch",
            "Huge Power",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 660,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Fletchling",
        "hp": 45,
        "atk": 50,
        "def": 43,
        "spa": 40,
        "spd": 38,
        "spe": 62,
        "weight": 1.7,
        "height": 0.3,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Gale Wings"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 661,
            "evos": [
                "Fletchinder"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Fletchinder",
        "hp": 62,
        "atk": 73,
        "def": 55,
        "spa": 56,
        "spd": 52,
        "spe": 84,
        "weight": 16,
        "height": 0.7,
        "types": [
            "Fire",
            "Flying"
        ],
        "abilities": [
            "Flame Body",
            "Gale Wings"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 662,
            "evos": [
                "Talonflame"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Talonflame",
        "hp": 78,
        "atk": 81,
        "def": 71,
        "spa": 74,
        "spd": 69,
        "spe": 126,
        "weight": 24.5,
        "height": 1.2,
        "types": [
            "Fire",
            "Flying"
        ],
        "abilities": [
            "Flame Body",
            "Gale Wings"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 663,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Scatterbug",
        "hp": 38,
        "atk": 35,
        "def": 40,
        "spa": 27,
        "spd": 25,
        "spe": 35,
        "weight": 2.5,
        "height": 0.3,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Compound Eyes",
            "Friend Guard",
            "Shield Dust"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 664,
            "evos": [
                "Spewpa"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vivillon-Pokeball",
        "hp": 80,
        "atk": 52,
        "def": 50,
        "spa": 90,
        "spd": 50,
        "spe": 89,
        "weight": 17,
        "height": 1.2,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Compound Eyes",
            "Shield Dust"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 666,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Litleo",
        "hp": 62,
        "atk": 50,
        "def": 58,
        "spa": 73,
        "spd": 54,
        "spe": 72,
        "weight": 13.5,
        "height": 0.6,
        "types": [
            "Fire",
            "Normal"
        ],
        "abilities": [
            "Moxie",
            "Rivalry",
            "Unnerve"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 667,
            "evos": [
                "Pyroar"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pyroar",
        "hp": 86,
        "atk": 68,
        "def": 72,
        "spa": 109,
        "spd": 66,
        "spe": 106,
        "weight": 81.5,
        "height": 1.5,
        "types": [
            "Fire",
            "Normal"
        ],
        "abilities": [
            "Moxie",
            "Rivalry",
            "Unnerve"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 668,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Flabebe",
        "hp": 44,
        "atk": 38,
        "def": 39,
        "spa": 61,
        "spd": 79,
        "spe": 42,
        "weight": 0.1,
        "height": 0.1,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Flower Veil",
            "Symbiosis"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 669,
            "evos": [
                "Floette"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Floette",
        "hp": 54,
        "atk": 45,
        "def": 47,
        "spa": 75,
        "spd": 98,
        "spe": 52,
        "weight": 0.9,
        "height": 0.2,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Flower Veil",
            "Symbiosis"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 670,
            "evos": [
                "Florges"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Florges",
        "hp": 78,
        "atk": 65,
        "def": 68,
        "spa": 112,
        "spd": 154,
        "spe": 75,
        "weight": 10,
        "height": 1.1,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Flower Veil",
            "Symbiosis"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 671,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Skiddo",
        "hp": 66,
        "atk": 65,
        "def": 48,
        "spa": 62,
        "spd": 57,
        "spe": 52,
        "weight": 31,
        "height": 0.9,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Grass Pelt",
            "Sap Sipper"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 672,
            "evos": [
                "Gogoat"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gogoat",
        "hp": 123,
        "atk": 100,
        "def": 62,
        "spa": 97,
        "spd": 81,
        "spe": 68,
        "weight": 91,
        "height": 1.7,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Grass Pelt",
            "Sap Sipper"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 673,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pancham",
        "hp": 67,
        "atk": 82,
        "def": 62,
        "spa": 46,
        "spd": 48,
        "spe": 43,
        "weight": 8,
        "height": 0.6,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Iron Fist",
            "Mold Breaker",
            "Scrappy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 674,
            "evos": [
                "Pangoro"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pangoro",
        "hp": 95,
        "atk": 124,
        "def": 78,
        "spa": 69,
        "spd": 71,
        "spe": 58,
        "weight": 136,
        "height": 2.1,
        "types": [
            "Fighting",
            "Dark"
        ],
        "abilities": [
            "Iron Fist",
            "Mold Breaker",
            "Scrappy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 675,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Furfrou",
        "hp": 75,
        "atk": 80,
        "def": 60,
        "spa": 65,
        "spd": 90,
        "spe": 102,
        "weight": 28,
        "height": 1.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Fur Coat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 676,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Espurr",
        "hp": 62,
        "atk": 48,
        "def": 54,
        "spa": 63,
        "spd": 60,
        "spe": 68,
        "weight": 3.5,
        "height": 0.3,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Infiltrator",
            "Keen Eye",
            "Own Tempo"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 677,
            "evos": [
                "Meowstic-F",
                "Meowstic-M"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meowstic-F",
        "hp": 74,
        "atk": 48,
        "def": 76,
        "spa": 83,
        "spd": 81,
        "spe": 104,
        "weight": 8.5,
        "height": 0.6,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Competitive",
            "Infiltrator",
            "Keen Eye"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 678,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Honedge",
        "hp": 45,
        "atk": 80,
        "def": 100,
        "spa": 35,
        "spd": 37,
        "spe": 28,
        "weight": 2,
        "height": 0.8,
        "types": [
            "Steel",
            "Ghost"
        ],
        "abilities": [
            "No Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 679,
            "evos": [
                "Doublade"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Doublade",
        "hp": 59,
        "atk": 110,
        "def": 150,
        "spa": 45,
        "spd": 49,
        "spe": 35,
        "weight": 4.5,
        "height": 0.8,
        "types": [
            "Steel",
            "Ghost"
        ],
        "abilities": [
            "No Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 680,
            "evos": [
                "Aegislash"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spritzee",
        "hp": 78,
        "atk": 52,
        "def": 60,
        "spa": 63,
        "spd": 65,
        "spe": 23,
        "weight": 0.5,
        "height": 0.2,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Aroma Veil",
            "Healer"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 682,
            "evos": [
                "Aromatisse"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Aromatisse",
        "hp": 101,
        "atk": 72,
        "def": 72,
        "spa": 99,
        "spd": 89,
        "spe": 29,
        "weight": 15.5,
        "height": 0.8,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Aroma Veil",
            "Healer"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 683,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swirlix",
        "hp": 62,
        "atk": 48,
        "def": 66,
        "spa": 59,
        "spd": 57,
        "spe": 49,
        "weight": 3.5,
        "height": 0.4,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Sweet Veil",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 684,
            "evos": [
                "Slurpuff"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slurpuff",
        "hp": 82,
        "atk": 80,
        "def": 86,
        "spa": 85,
        "spd": 75,
        "spe": 72,
        "weight": 5,
        "height": 0.8,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Sweet Veil",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 685,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Inkay",
        "hp": 53,
        "atk": 54,
        "def": 53,
        "spa": 37,
        "spd": 46,
        "spe": 45,
        "weight": 3.5,
        "height": 0.4,
        "types": [
            "Dark",
            "Psychic"
        ],
        "abilities": [
            "Contrary",
            "Infiltrator",
            "Suction Cups"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 686,
            "evos": [
                "Malamar"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Malamar",
        "hp": 86,
        "atk": 92,
        "def": 88,
        "spa": 68,
        "spd": 75,
        "spe": 73,
        "weight": 47,
        "height": 1.5,
        "types": [
            "Dark",
            "Psychic"
        ],
        "abilities": [
            "Contrary",
            "Infiltrator",
            "Suction Cups"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 687,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Binacle",
        "hp": 42,
        "atk": 52,
        "def": 67,
        "spa": 39,
        "spd": 56,
        "spe": 50,
        "weight": 31,
        "height": 0.5,
        "types": [
            "Rock",
            "Water"
        ],
        "abilities": [
            "Pickpocket",
            "Sniper",
            "Tough Claws"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 688,
            "evos": [
                "Barbaracle"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Barbaracle",
        "hp": 72,
        "atk": 105,
        "def": 115,
        "spa": 54,
        "spd": 86,
        "spe": 68,
        "weight": 96,
        "height": 1.3,
        "types": [
            "Rock",
            "Water"
        ],
        "abilities": [
            "Pickpocket",
            "Sniper",
            "Tough Claws"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 689,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Skrelp",
        "hp": 50,
        "atk": 60,
        "def": 60,
        "spa": 60,
        "spd": 60,
        "spe": 30,
        "weight": 7.3,
        "height": 0.5,
        "types": [
            "Poison",
            "Water"
        ],
        "abilities": [
            "Adaptability",
            "Poison Point",
            "Poison Touch"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 690,
            "evos": [
                "Dragalge"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dragalge",
        "hp": 65,
        "atk": 75,
        "def": 90,
        "spa": 97,
        "spd": 123,
        "spe": 44,
        "weight": 81.5,
        "height": 1.8,
        "types": [
            "Poison",
            "Dragon"
        ],
        "abilities": [
            "Adaptability",
            "Poison Point",
            "Poison Touch"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 691,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Clauncher",
        "hp": 50,
        "atk": 53,
        "def": 62,
        "spa": 58,
        "spd": 63,
        "spe": 44,
        "weight": 8.3,
        "height": 0.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Mega Launcher"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 692,
            "evos": [
                "Clawitzer"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Clawitzer",
        "hp": 71,
        "atk": 73,
        "def": 88,
        "spa": 120,
        "spd": 89,
        "spe": 59,
        "weight": 35.3,
        "height": 1.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Mega Launcher"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 693,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Helioptile",
        "hp": 44,
        "atk": 38,
        "def": 33,
        "spa": 61,
        "spd": 43,
        "spe": 70,
        "weight": 6,
        "height": 0.5,
        "types": [
            "Electric",
            "Normal"
        ],
        "abilities": [
            "Dry Skin",
            "Sand Veil",
            "Solar Power"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 694,
            "evos": [
                "Heliolisk"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Heliolisk",
        "hp": 62,
        "atk": 55,
        "def": 52,
        "spa": 109,
        "spd": 94,
        "spe": 109,
        "weight": 21,
        "height": 1,
        "types": [
            "Electric",
            "Normal"
        ],
        "abilities": [
            "Dry Skin",
            "Sand Veil",
            "Solar Power"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 695,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tyrunt",
        "hp": 58,
        "atk": 89,
        "def": 77,
        "spa": 45,
        "spd": 45,
        "spe": 48,
        "weight": 26,
        "height": 0.8,
        "types": [
            "Rock",
            "Dragon"
        ],
        "abilities": [
            "Strong Jaw",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 696,
            "evos": [
                "Tyrantrum"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tyrantrum",
        "hp": 82,
        "atk": 121,
        "def": 119,
        "spa": 69,
        "spd": 59,
        "spe": 71,
        "weight": 270,
        "height": 2.5,
        "types": [
            "Rock",
            "Dragon"
        ],
        "abilities": [
            "Rock Head",
            "Strong Jaw"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 697,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Amaura",
        "hp": 77,
        "atk": 59,
        "def": 50,
        "spa": 67,
        "spd": 63,
        "spe": 46,
        "weight": 25.2,
        "height": 1.3,
        "types": [
            "Rock",
            "Ice"
        ],
        "abilities": [
            "Refrigerate",
            "Snow Warning"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 698,
            "evos": [
                "Aurorus"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Aurorus",
        "hp": 123,
        "atk": 77,
        "def": 72,
        "spa": 99,
        "spd": 92,
        "spe": 58,
        "weight": 225,
        "height": 2.7,
        "types": [
            "Rock",
            "Ice"
        ],
        "abilities": [
            "Refrigerate",
            "Snow Warning"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 699,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sylveon",
        "hp": 95,
        "atk": 65,
        "def": 65,
        "spa": 110,
        "spd": 130,
        "spe": 60,
        "weight": 23.5,
        "height": 1,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Cute Charm",
            "Pixilate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 700,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dedenne",
        "hp": 67,
        "atk": 58,
        "def": 57,
        "spa": 81,
        "spd": 67,
        "spe": 101,
        "weight": 2.2,
        "height": 0.2,
        "types": [
            "Electric",
            "Fairy"
        ],
        "abilities": [
            "Cheek Pouch",
            "Pickup",
            "Plus"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 702,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Carbink",
        "hp": 50,
        "atk": 50,
        "def": 150,
        "spa": 50,
        "spd": 150,
        "spe": 50,
        "weight": 5.7,
        "height": 0.3,
        "types": [
            "Rock",
            "Fairy"
        ],
        "abilities": [
            "Clear Body",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 703,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Goomy",
        "hp": 45,
        "atk": 50,
        "def": 35,
        "spa": 55,
        "spd": 75,
        "spe": 40,
        "weight": 2.8,
        "height": 0.3,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Gooey",
            "Hydration",
            "Sap Sipper"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 704,
            "evos": [
                "Sliggoo",
                "Sliggoo-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sliggoo",
        "hp": 68,
        "atk": 75,
        "def": 53,
        "spa": 83,
        "spd": 113,
        "spe": 60,
        "weight": 17.5,
        "height": 0.8,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Gooey",
            "Hydration",
            "Sap Sipper"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 705,
            "evos": [
                "Goodra"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Goodra",
        "hp": 90,
        "atk": 100,
        "def": 70,
        "spa": 110,
        "spd": 150,
        "spe": 80,
        "weight": 150.5,
        "height": 2,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Gooey",
            "Hydration",
            "Sap Sipper"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 706,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Klefki",
        "hp": 57,
        "atk": 80,
        "def": 91,
        "spa": 80,
        "spd": 87,
        "spe": 75,
        "weight": 3,
        "height": 0.2,
        "types": [
            "Steel",
            "Fairy"
        ],
        "abilities": [
            "Magician",
            "Prankster"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 707,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Phantump",
        "hp": 43,
        "atk": 70,
        "def": 48,
        "spa": 50,
        "spd": 60,
        "spe": 38,
        "weight": 7,
        "height": 0.4,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Harvest",
            "Natural Cure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 708,
            "evos": [
                "Trevenant"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Trevenant",
        "hp": 85,
        "atk": 110,
        "def": 76,
        "spa": 65,
        "spd": 82,
        "spe": 56,
        "weight": 71,
        "height": 1.5,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Harvest",
            "Natural Cure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 709,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pumpkaboo",
        "hp": 49,
        "atk": 66,
        "def": 70,
        "spa": 44,
        "spd": 55,
        "spe": 51,
        "weight": 5,
        "height": 0.4,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Insomnia",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 710,
            "evos": [
                "Gourgeist"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pumpkaboo-Super",
        "hp": 59,
        "atk": 66,
        "def": 70,
        "spa": 44,
        "spd": 55,
        "spe": 41,
        "weight": 15,
        "height": 0.8,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Insomnia",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 710,
            "evos": [
                "Gourgeist-Super"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gourgeist",
        "hp": 65,
        "atk": 90,
        "def": 122,
        "spa": 58,
        "spd": 75,
        "spe": 84,
        "weight": 12.5,
        "height": 0.9,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Insomnia",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 711,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gourgeist-Super",
        "hp": 85,
        "atk": 100,
        "def": 122,
        "spa": 58,
        "spd": 75,
        "spe": 54,
        "weight": 39,
        "height": 1.7,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Frisk",
            "Insomnia",
            "Pickup"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 711,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Xerneas",
        "hp": 126,
        "atk": 131,
        "def": 95,
        "spa": 131,
        "spd": 98,
        "spe": 99,
        "weight": 215,
        "height": 3,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Fairy Aura"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 716,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Yveltal",
        "hp": 126,
        "atk": 131,
        "def": 95,
        "spa": 131,
        "spd": 98,
        "spe": 99,
        "weight": 203,
        "height": 5.8,
        "types": [
            "Dark",
            "Flying"
        ],
        "abilities": [
            "Dark Aura"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 717,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Diancie",
        "hp": 50,
        "atk": 100,
        "def": 150,
        "spa": 100,
        "spd": 150,
        "spe": 50,
        "weight": 8.8,
        "height": 0.7,
        "types": [
            "Rock",
            "Fairy"
        ],
        "abilities": [
            "Clear Body"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 719,
            "evos": [],
            "alts": [
                "Diancie-Mega"
            ],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hoopa",
        "hp": 80,
        "atk": 110,
        "def": 60,
        "spa": 150,
        "spd": 130,
        "spe": 70,
        "weight": 9,
        "height": 0.5,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "abilities": [
            "Magician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 720,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hoopa-Unbound",
        "hp": 80,
        "atk": 160,
        "def": 60,
        "spa": 170,
        "spd": 130,
        "spe": 80,
        "weight": 490,
        "height": 6.5,
        "types": [
            "Psychic",
            "Dark"
        ],
        "abilities": [
            "Magician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 720,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Volcanion",
        "hp": 80,
        "atk": 110,
        "def": 120,
        "spa": 130,
        "spd": 90,
        "spe": 70,
        "weight": 195,
        "height": 1.7,
        "types": [
            "Fire",
            "Water"
        ],
        "abilities": [
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 721,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Volkritter",
        "hp": 60,
        "atk": 30,
        "def": 50,
        "spa": 80,
        "spd": 60,
        "spe": 70,
        "weight": 15,
        "height": 0.3,
        "types": [
            "Water",
            "Fire"
        ],
        "abilities": [
            "Anticipation",
            "Infiltrator",
            "Unnerve"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -32,
            "evos": [
                "Volkraken"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Volkraken",
        "hp": 100,
        "atk": 45,
        "def": 80,
        "spa": 135,
        "spd": 100,
        "spe": 95,
        "weight": 44.5,
        "height": 1.3,
        "types": [
            "Water",
            "Fire"
        ],
        "abilities": [
            "Analytic",
            "Infiltrator",
            "Pressure"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -33,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Snugglow",
        "hp": 40,
        "atk": 37,
        "def": 79,
        "spa": 91,
        "spd": 68,
        "spe": 70,
        "weight": 6,
        "height": 1.2,
        "types": [
            "Electric",
            "Poison"
        ],
        "abilities": [
            "Storm Drain",
            "Telepathy",
            "Vital Spirit"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -34,
            "evos": [
                "Plasmanta"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Plasmanta",
        "hp": 60,
        "atk": 57,
        "def": 119,
        "spa": 131,
        "spd": 98,
        "spe": 100,
        "weight": 460,
        "height": 7,
        "types": [
            "Electric",
            "Poison"
        ],
        "abilities": [
            "Storm Drain",
            "Telepathy",
            "Vital Spirit"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -35,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Floatoy",
        "hp": 48,
        "atk": 70,
        "def": 40,
        "spa": 70,
        "spd": 30,
        "spe": 77,
        "weight": 1.9,
        "height": 0.8,
        "types": [
            "Water"
        ],
        "abilities": [
            "Heatproof",
            "Swift Swim",
            "Water Veil"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -36,
            "evos": [
                "Caimanoe"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Caimanoe",
        "hp": 73,
        "atk": 85,
        "def": 65,
        "spa": 80,
        "spd": 40,
        "spe": 87,
        "weight": 72.5,
        "height": 1.4,
        "types": [
            "Water",
            "Steel"
        ],
        "abilities": [
            "Heatproof",
            "Light Metal",
            "Water Veil"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -37,
            "evos": [
                "Naviathan"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Crucibelle",
        "hp": 106,
        "atk": 105,
        "def": 65,
        "spa": 75,
        "spd": 85,
        "spe": 104,
        "weight": 23.6,
        "height": 1.3,
        "types": [
            "Rock",
            "Poison"
        ],
        "abilities": [
            "Liquid Ooze",
            "Mold Breaker",
            "Regenerator"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -39,
            "evos": [],
            "alts": [
                "Crucibelle-Mega"
            ],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pluffle",
        "hp": 74,
        "atk": 38,
        "def": 51,
        "spa": 65,
        "spd": 78,
        "spe": 49,
        "weight": 1.8,
        "height": 0.8,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Aroma Veil",
            "Friend Guard",
            "Natural Cure"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -40,
            "evos": [
                "Kerfluffle"
            ],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kerfluffle",
        "hp": 84,
        "atk": 78,
        "def": 86,
        "spa": 115,
        "spd": 88,
        "spe": 119,
        "weight": 24.2,
        "height": 2.1,
        "types": [
            "Fairy",
            "Fighting"
        ],
        "abilities": [
            "Aroma Veil",
            "Friend Guard",
            "Natural Cure"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -41,
            "evos": [],
            "alts": [],
            "genfamily": [
                "XY",
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-Original",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-Hoenn",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-Sinnoh",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-Unova",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-Kalos",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-Alola",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-Partner",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vikavolt",
        "hp": 77,
        "atk": 70,
        "def": 90,
        "spa": 145,
        "spd": 75,
        "spe": 43,
        "weight": 45,
        "height": 1.5,
        "types": [
            "Bug",
            "Electric"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 738,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Crabominable",
        "hp": 97,
        "atk": 132,
        "def": 77,
        "spa": 62,
        "spd": 67,
        "spe": 43,
        "weight": 180,
        "height": 1.7,
        "types": [
            "Fighting",
            "Ice"
        ],
        "abilities": [
            "Anger Point",
            "Hyper Cutter",
            "Iron Fist"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 740,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lycanroc",
        "hp": 75,
        "atk": 115,
        "def": 65,
        "spa": 55,
        "spd": 65,
        "spe": 112,
        "weight": 25,
        "height": 0.8,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Keen Eye",
            "Sand Rush",
            "Steadfast"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 745,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lycanroc-Midnight",
        "hp": 85,
        "atk": 115,
        "def": 75,
        "spa": 55,
        "spd": 75,
        "spe": 82,
        "weight": 25,
        "height": 1.1,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Keen Eye",
            "No Guard",
            "Vital Spirit"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 745,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tapu Koko",
        "hp": 70,
        "atk": 115,
        "def": 85,
        "spa": 95,
        "spd": 75,
        "spe": 130,
        "weight": 20.5,
        "height": 1.8,
        "types": [
            "Electric",
            "Fairy"
        ],
        "abilities": [
            "Electric Surge"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 785,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tapu Lele",
        "hp": 70,
        "atk": 85,
        "def": 75,
        "spa": 130,
        "spd": 115,
        "spe": 95,
        "weight": 18.6,
        "height": 1.2,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Psychic Surge"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 786,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tapu Bulu",
        "hp": 70,
        "atk": 130,
        "def": 115,
        "spa": 85,
        "spd": 95,
        "spe": 75,
        "weight": 45.5,
        "height": 1.9,
        "types": [
            "Grass",
            "Fairy"
        ],
        "abilities": [
            "Grassy Surge"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 787,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tapu Fini",
        "hp": 70,
        "atk": 75,
        "def": 115,
        "spa": 95,
        "spd": 130,
        "spe": 85,
        "weight": 21.2,
        "height": 1.3,
        "types": [
            "Water",
            "Fairy"
        ],
        "abilities": [
            "Misty Surge"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 788,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mumbao",
        "hp": 55,
        "atk": 30,
        "def": 64,
        "spa": 87,
        "spd": 73,
        "spe": 66,
        "weight": 83,
        "height": 1,
        "types": [
            "Grass",
            "Fairy"
        ],
        "abilities": [
            "Overcoat",
            "Solar Power",
            "Trace"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -43,
            "evos": [
                "Jumbao"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Jumbao",
        "hp": 92,
        "atk": 63,
        "def": 97,
        "spa": 124,
        "spd": 104,
        "spe": 96,
        "weight": 200,
        "height": 2.4,
        "types": [
            "Grass",
            "Fairy"
        ],
        "abilities": [
            "Drought",
            "Overcoat",
            "Trace"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -44,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rattata-Alola",
        "hp": 30,
        "atk": 56,
        "def": 35,
        "spa": 25,
        "spd": 35,
        "spe": 72,
        "weight": 3.8,
        "height": 0.3,
        "types": [
            "Dark",
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Hustle",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 19,
            "evos": [
                "Raticate-Alola"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Raticate-Alola",
        "hp": 75,
        "atk": 71,
        "def": 70,
        "spa": 40,
        "spd": 80,
        "spe": 77,
        "weight": 25.5,
        "height": 0.7,
        "types": [
            "Dark",
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Hustle",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 20,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Raticate-Alola-Totem",
        "hp": 75,
        "atk": 71,
        "def": 70,
        "spa": 40,
        "spd": 80,
        "spe": 77,
        "weight": 105,
        "height": 1.4,
        "types": [
            "Dark",
            "Normal"
        ],
        "abilities": [
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 20,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-Starter",
        "hp": 45,
        "atk": 80,
        "def": 50,
        "spa": 75,
        "spd": 60,
        "spe": 120,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Raichu-Alola",
        "hp": 60,
        "atk": 85,
        "def": 50,
        "spa": 95,
        "spd": 85,
        "spe": 110,
        "weight": 21,
        "height": 0.7,
        "types": [
            "Electric",
            "Psychic"
        ],
        "abilities": [
            "Surge Surfer"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 26,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sandshrew-Alola",
        "hp": 50,
        "atk": 75,
        "def": 90,
        "spa": 10,
        "spd": 35,
        "spe": 40,
        "weight": 40,
        "height": 0.7,
        "types": [
            "Ice",
            "Steel"
        ],
        "abilities": [
            "Slush Rush",
            "Snow Cloak"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 27,
            "evos": [
                "Sandslash-Alola"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sandslash-Alola",
        "hp": 75,
        "atk": 100,
        "def": 120,
        "spa": 25,
        "spd": 65,
        "spe": 65,
        "weight": 55,
        "height": 1.2,
        "types": [
            "Ice",
            "Steel"
        ],
        "abilities": [
            "Slush Rush",
            "Snow Cloak"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 28,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vulpix-Alola",
        "hp": 38,
        "atk": 41,
        "def": 40,
        "spa": 50,
        "spd": 65,
        "spe": 65,
        "weight": 9.9,
        "height": 0.6,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Snow Cloak",
            "Snow Warning"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 37,
            "evos": [
                "Ninetales-Alola"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ninetales-Alola",
        "hp": 73,
        "atk": 67,
        "def": 75,
        "spa": 81,
        "spd": 100,
        "spe": 109,
        "weight": 19.9,
        "height": 1.1,
        "types": [
            "Ice",
            "Fairy"
        ],
        "abilities": [
            "Snow Cloak",
            "Snow Warning"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 38,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Diglett-Alola",
        "hp": 10,
        "atk": 55,
        "def": 30,
        "spa": 35,
        "spd": 45,
        "spe": 90,
        "weight": 1,
        "height": 0.2,
        "types": [
            "Ground",
            "Steel"
        ],
        "abilities": [
            "Sand Force",
            "Sand Veil",
            "Tangling Hair"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 50,
            "evos": [
                "Dugtrio-Alola"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dugtrio-Alola",
        "hp": 35,
        "atk": 100,
        "def": 60,
        "spa": 50,
        "spd": 70,
        "spe": 110,
        "weight": 66.6,
        "height": 0.7,
        "types": [
            "Ground",
            "Steel"
        ],
        "abilities": [
            "Sand Force",
            "Sand Veil",
            "Tangling Hair"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 51,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meowth-Alola",
        "hp": 40,
        "atk": 35,
        "def": 35,
        "spa": 50,
        "spd": 40,
        "spe": 90,
        "weight": 4.2,
        "height": 0.4,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Pickup",
            "Rattled",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 52,
            "evos": [
                "Persian-Alola"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Persian-Alola",
        "hp": 65,
        "atk": 60,
        "def": 60,
        "spa": 75,
        "spd": 65,
        "spe": 115,
        "weight": 33,
        "height": 1.1,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Fur Coat",
            "Rattled",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 53,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Geodude-Alola",
        "hp": 40,
        "atk": 80,
        "def": 100,
        "spa": 30,
        "spd": 30,
        "spe": 20,
        "weight": 20.3,
        "height": 0.4,
        "types": [
            "Rock",
            "Electric"
        ],
        "abilities": [
            "Galvanize",
            "Magnet Pull",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 74,
            "evos": [
                "Graveler-Alola"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Graveler-Alola",
        "hp": 55,
        "atk": 95,
        "def": 115,
        "spa": 45,
        "spd": 45,
        "spe": 35,
        "weight": 110,
        "height": 1,
        "types": [
            "Rock",
            "Electric"
        ],
        "abilities": [
            "Galvanize",
            "Magnet Pull",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 75,
            "evos": [
                "Golem-Alola"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Golem-Alola",
        "hp": 80,
        "atk": 120,
        "def": 130,
        "spa": 55,
        "spd": 65,
        "spe": 45,
        "weight": 316,
        "height": 1.7,
        "types": [
            "Rock",
            "Electric"
        ],
        "abilities": [
            "Galvanize",
            "Magnet Pull",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 76,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grimer-Alola",
        "hp": 80,
        "atk": 80,
        "def": 50,
        "spa": 40,
        "spd": 50,
        "spe": 25,
        "weight": 42,
        "height": 0.7,
        "types": [
            "Poison",
            "Dark"
        ],
        "abilities": [
            "Gluttony",
            "Poison Touch",
            "Power of Alchemy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 88,
            "evos": [
                "Muk-Alola"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Muk-Alola",
        "hp": 105,
        "atk": 105,
        "def": 75,
        "spa": 65,
        "spd": 100,
        "spe": 50,
        "weight": 52,
        "height": 1,
        "types": [
            "Poison",
            "Dark"
        ],
        "abilities": [
            "Gluttony",
            "Poison Touch",
            "Power of Alchemy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 89,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Exeggutor-Alola",
        "hp": 95,
        "atk": 105,
        "def": 85,
        "spa": 125,
        "spd": 75,
        "spe": 45,
        "weight": 415.6,
        "height": 10.9,
        "types": [
            "Grass",
            "Dragon"
        ],
        "abilities": [
            "Frisk",
            "Harvest"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 103,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Marowak-Alola",
        "hp": 60,
        "atk": 80,
        "def": 110,
        "spa": 50,
        "spd": 80,
        "spe": 45,
        "weight": 34,
        "height": 1,
        "types": [
            "Fire",
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Lightning Rod",
            "Rock Head"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 105,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Marowak-Alola-Totem",
        "hp": 60,
        "atk": 80,
        "def": 110,
        "spa": 50,
        "spd": 80,
        "spe": 45,
        "weight": 98,
        "height": 1.7,
        "types": [
            "Fire",
            "Ghost"
        ],
        "abilities": [
            "Rock Head"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 105,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Eevee-Starter",
        "hp": 65,
        "atk": 75,
        "def": 70,
        "spa": 65,
        "spd": 85,
        "spe": 75,
        "weight": 6.5,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Adaptability",
            "Anticipation",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 133,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zygarde-10%",
        "hp": 54,
        "atk": 100,
        "def": 71,
        "spa": 61,
        "spd": 85,
        "spe": 115,
        "weight": 33.5,
        "height": 1.2,
        "types": [
            "Dragon",
            "Ground"
        ],
        "abilities": [
            "Aura Break",
            "Power Construct"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 718,
            "evos": [],
            "alts": [
                "Zygarde-Complete"
            ],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rowlet",
        "hp": 68,
        "atk": 55,
        "def": 55,
        "spa": 50,
        "spd": 50,
        "spe": 42,
        "weight": 1.5,
        "height": 0.3,
        "types": [
            "Grass",
            "Flying"
        ],
        "abilities": [
            "Long Reach",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 722,
            "evos": [
                "Dartrix"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dartrix",
        "hp": 78,
        "atk": 75,
        "def": 75,
        "spa": 70,
        "spd": 70,
        "spe": 52,
        "weight": 16,
        "height": 0.7,
        "types": [
            "Grass",
            "Flying"
        ],
        "abilities": [
            "Long Reach",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 723,
            "evos": [
                "Decidueye",
                "Decidueye-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Decidueye",
        "hp": 78,
        "atk": 107,
        "def": 75,
        "spa": 100,
        "spd": 100,
        "spe": 70,
        "weight": 36.6,
        "height": 1.6,
        "types": [
            "Grass",
            "Ghost"
        ],
        "abilities": [
            "Long Reach",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 724,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Litten",
        "hp": 45,
        "atk": 65,
        "def": 40,
        "spa": 60,
        "spd": 40,
        "spe": 70,
        "weight": 4.3,
        "height": 0.4,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Intimidate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 725,
            "evos": [
                "Torracat"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Torracat",
        "hp": 65,
        "atk": 85,
        "def": 50,
        "spa": 80,
        "spd": 50,
        "spe": 90,
        "weight": 25,
        "height": 0.7,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Intimidate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 726,
            "evos": [
                "Incineroar"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Incineroar",
        "hp": 95,
        "atk": 115,
        "def": 90,
        "spa": 80,
        "spd": 90,
        "spe": 60,
        "weight": 83,
        "height": 1.8,
        "types": [
            "Fire",
            "Dark"
        ],
        "abilities": [
            "Blaze",
            "Intimidate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 727,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Popplio",
        "hp": 50,
        "atk": 54,
        "def": 54,
        "spa": 66,
        "spd": 56,
        "spe": 40,
        "weight": 7.5,
        "height": 0.4,
        "types": [
            "Water"
        ],
        "abilities": [
            "Liquid Voice",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 728,
            "evos": [
                "Brionne"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Brionne",
        "hp": 60,
        "atk": 69,
        "def": 69,
        "spa": 91,
        "spd": 81,
        "spe": 50,
        "weight": 17.5,
        "height": 0.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Liquid Voice",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 729,
            "evos": [
                "Primarina"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Primarina",
        "hp": 80,
        "atk": 74,
        "def": 74,
        "spa": 126,
        "spd": 116,
        "spe": 60,
        "weight": 44,
        "height": 1.8,
        "types": [
            "Water",
            "Fairy"
        ],
        "abilities": [
            "Liquid Voice",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 730,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikipek",
        "hp": 35,
        "atk": 75,
        "def": 30,
        "spa": 30,
        "spd": 30,
        "spe": 65,
        "weight": 1.2,
        "height": 0.3,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Keen Eye",
            "Pickup",
            "Skill Link"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 731,
            "evos": [
                "Trumbeak"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Trumbeak",
        "hp": 55,
        "atk": 85,
        "def": 50,
        "spa": 40,
        "spd": 50,
        "spe": 75,
        "weight": 14.8,
        "height": 0.6,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Keen Eye",
            "Pickup",
            "Skill Link"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 732,
            "evos": [
                "Toucannon"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Toucannon",
        "hp": 80,
        "atk": 120,
        "def": 75,
        "spa": 75,
        "spd": 75,
        "spe": 60,
        "weight": 26,
        "height": 1.1,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Keen Eye",
            "Sheer Force",
            "Skill Link"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 733,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Yungoos",
        "hp": 48,
        "atk": 70,
        "def": 30,
        "spa": 30,
        "spd": 30,
        "spe": 45,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Adaptability",
            "Stakeout",
            "Strong Jaw"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 734,
            "evos": [
                "Gumshoos"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gumshoos",
        "hp": 88,
        "atk": 110,
        "def": 60,
        "spa": 55,
        "spd": 60,
        "spe": 45,
        "weight": 14.2,
        "height": 0.7,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Adaptability",
            "Stakeout",
            "Strong Jaw"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 735,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gumshoos-Totem",
        "hp": 88,
        "atk": 110,
        "def": 60,
        "spa": 55,
        "spd": 60,
        "spe": 45,
        "weight": 60,
        "height": 1.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Adaptability"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 735,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grubbin",
        "hp": 47,
        "atk": 62,
        "def": 45,
        "spa": 55,
        "spd": 45,
        "spe": 46,
        "weight": 4.4,
        "height": 0.4,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 736,
            "evos": [
                "Charjabug"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Charjabug",
        "hp": 57,
        "atk": 82,
        "def": 95,
        "spa": 55,
        "spd": 75,
        "spe": 36,
        "weight": 10.5,
        "height": 0.5,
        "types": [
            "Bug",
            "Electric"
        ],
        "abilities": [
            "Battery"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 737,
            "evos": [
                "Vikavolt"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Vikavolt-Totem",
        "hp": 77,
        "atk": 70,
        "def": 90,
        "spa": 145,
        "spd": 75,
        "spe": 43,
        "weight": 147.5,
        "height": 2.6,
        "types": [
            "Bug",
            "Electric"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 738,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Crabrawler",
        "hp": 47,
        "atk": 82,
        "def": 57,
        "spa": 42,
        "spd": 47,
        "spe": 63,
        "weight": 7,
        "height": 0.6,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Anger Point",
            "Hyper Cutter",
            "Iron Fist"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 739,
            "evos": [
                "Crabominable"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Oricorio",
        "hp": 75,
        "atk": 70,
        "def": 70,
        "spa": 98,
        "spd": 70,
        "spe": 93,
        "weight": 3.4,
        "height": 0.6,
        "types": [
            "Fire",
            "Flying"
        ],
        "abilities": [
            "Dancer"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 741,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Oricorio-Pom-Pom",
        "hp": 75,
        "atk": 70,
        "def": 70,
        "spa": 98,
        "spd": 70,
        "spe": 93,
        "weight": 3.4,
        "height": 0.6,
        "types": [
            "Electric",
            "Flying"
        ],
        "abilities": [
            "Dancer"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 741,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Oricorio-Pa'u",
        "hp": 75,
        "atk": 70,
        "def": 70,
        "spa": 98,
        "spd": 70,
        "spe": 93,
        "weight": 3.4,
        "height": 0.6,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Dancer"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 741,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Oricorio-Sensu",
        "hp": 75,
        "atk": 70,
        "def": 70,
        "spa": 98,
        "spd": 70,
        "spe": 93,
        "weight": 3.4,
        "height": 0.6,
        "types": [
            "Ghost",
            "Flying"
        ],
        "abilities": [
            "Dancer"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 741,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cutiefly",
        "hp": 40,
        "atk": 45,
        "def": 40,
        "spa": 55,
        "spd": 40,
        "spe": 84,
        "weight": 0.2,
        "height": 0.1,
        "types": [
            "Bug",
            "Fairy"
        ],
        "abilities": [
            "Honey Gather",
            "Shield Dust",
            "Sweet Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 742,
            "evos": [
                "Ribombee"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ribombee",
        "hp": 60,
        "atk": 55,
        "def": 60,
        "spa": 95,
        "spd": 70,
        "spe": 124,
        "weight": 0.5,
        "height": 0.2,
        "types": [
            "Bug",
            "Fairy"
        ],
        "abilities": [
            "Honey Gather",
            "Shield Dust",
            "Sweet Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 743,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ribombee-Totem",
        "hp": 60,
        "atk": 55,
        "def": 60,
        "spa": 95,
        "spd": 70,
        "spe": 124,
        "weight": 2,
        "height": 0.4,
        "types": [
            "Bug",
            "Fairy"
        ],
        "abilities": [
            "Sweet Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 743,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rockruff",
        "hp": 45,
        "atk": 65,
        "def": 40,
        "spa": 30,
        "spd": 40,
        "spe": 60,
        "weight": 9.2,
        "height": 0.5,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Keen Eye",
            "Own Tempo",
            "Steadfast",
            "Vital Spirit"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 744,
            "evos": [
                "Lycanroc",
                "Lycanroc-Dusk",
                "Lycanroc-Midnight"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lycanroc-Dusk",
        "hp": 75,
        "atk": 117,
        "def": 65,
        "spa": 55,
        "spd": 65,
        "spe": 110,
        "weight": 25,
        "height": 0.8,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Tough Claws"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 745,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wishiwashi",
        "hp": 45,
        "atk": 20,
        "def": 20,
        "spa": 25,
        "spd": 25,
        "spe": 40,
        "weight": 0.3,
        "height": 0.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Schooling"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 746,
            "evos": [],
            "alts": [
                "Wishiwashi-School"
            ],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mareanie",
        "hp": 50,
        "atk": 53,
        "def": 62,
        "spa": 43,
        "spd": 52,
        "spe": 45,
        "weight": 8,
        "height": 0.4,
        "types": [
            "Poison",
            "Water"
        ],
        "abilities": [
            "Limber",
            "Merciless",
            "Regenerator"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 747,
            "evos": [
                "Toxapex"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Toxapex",
        "hp": 50,
        "atk": 63,
        "def": 152,
        "spa": 53,
        "spd": 142,
        "spe": 35,
        "weight": 14.5,
        "height": 0.7,
        "types": [
            "Poison",
            "Water"
        ],
        "abilities": [
            "Limber",
            "Merciless",
            "Regenerator"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 748,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mudbray",
        "hp": 70,
        "atk": 100,
        "def": 70,
        "spa": 45,
        "spd": 55,
        "spe": 45,
        "weight": 110,
        "height": 1,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Inner Focus",
            "Own Tempo",
            "Stamina"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 749,
            "evos": [
                "Mudsdale"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mudsdale",
        "hp": 100,
        "atk": 125,
        "def": 100,
        "spa": 55,
        "spd": 85,
        "spe": 35,
        "weight": 920,
        "height": 2.5,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Inner Focus",
            "Own Tempo",
            "Stamina"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 750,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dewpider",
        "hp": 38,
        "atk": 40,
        "def": 52,
        "spa": 40,
        "spd": 72,
        "spe": 27,
        "weight": 4,
        "height": 0.3,
        "types": [
            "Water",
            "Bug"
        ],
        "abilities": [
            "Water Absorb",
            "Water Bubble"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 751,
            "evos": [
                "Araquanid"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Araquanid",
        "hp": 68,
        "atk": 70,
        "def": 92,
        "spa": 50,
        "spd": 132,
        "spe": 42,
        "weight": 82,
        "height": 1.8,
        "types": [
            "Water",
            "Bug"
        ],
        "abilities": [
            "Water Absorb",
            "Water Bubble"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 752,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Araquanid-Totem",
        "hp": 68,
        "atk": 70,
        "def": 92,
        "spa": 50,
        "spd": 132,
        "spe": 42,
        "weight": 217.5,
        "height": 3.1,
        "types": [
            "Water",
            "Bug"
        ],
        "abilities": [
            "Water Bubble"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 752,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Fomantis",
        "hp": 40,
        "atk": 55,
        "def": 35,
        "spa": 50,
        "spd": 35,
        "spe": 35,
        "weight": 1.5,
        "height": 0.3,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Contrary",
            "Leaf Guard"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 753,
            "evos": [
                "Lurantis"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lurantis",
        "hp": 70,
        "atk": 105,
        "def": 90,
        "spa": 80,
        "spd": 90,
        "spe": 45,
        "weight": 18.5,
        "height": 0.9,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Contrary",
            "Leaf Guard"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 754,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lurantis-Totem",
        "hp": 70,
        "atk": 105,
        "def": 90,
        "spa": 80,
        "spd": 90,
        "spe": 45,
        "weight": 58,
        "height": 1.5,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Leaf Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 754,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Morelull",
        "hp": 40,
        "atk": 35,
        "def": 55,
        "spa": 65,
        "spd": 75,
        "spe": 15,
        "weight": 1.5,
        "height": 0.2,
        "types": [
            "Grass",
            "Fairy"
        ],
        "abilities": [
            "Effect Spore",
            "Illuminate",
            "Rain Dish"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 755,
            "evos": [
                "Shiinotic"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Shiinotic",
        "hp": 60,
        "atk": 45,
        "def": 80,
        "spa": 90,
        "spd": 100,
        "spe": 30,
        "weight": 11.5,
        "height": 1,
        "types": [
            "Grass",
            "Fairy"
        ],
        "abilities": [
            "Effect Spore",
            "Illuminate",
            "Rain Dish"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 756,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Salandit",
        "hp": 48,
        "atk": 44,
        "def": 40,
        "spa": 71,
        "spd": 40,
        "spe": 77,
        "weight": 4.8,
        "height": 0.6,
        "types": [
            "Poison",
            "Fire"
        ],
        "abilities": [
            "Corrosion",
            "Oblivious"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 757,
            "evos": [
                "Salazzle"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Salazzle",
        "hp": 68,
        "atk": 64,
        "def": 60,
        "spa": 111,
        "spd": 60,
        "spe": 117,
        "weight": 22.2,
        "height": 1.2,
        "types": [
            "Poison",
            "Fire"
        ],
        "abilities": [
            "Corrosion",
            "Oblivious"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 758,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Salazzle-Totem",
        "hp": 68,
        "atk": 64,
        "def": 60,
        "spa": 111,
        "spd": 60,
        "spe": 117,
        "weight": 81,
        "height": 2.1,
        "types": [
            "Poison",
            "Fire"
        ],
        "abilities": [
            "Corrosion"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 758,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stufful",
        "hp": 70,
        "atk": 75,
        "def": 50,
        "spa": 45,
        "spd": 50,
        "spe": 50,
        "weight": 6.8,
        "height": 0.5,
        "types": [
            "Normal",
            "Fighting"
        ],
        "abilities": [
            "Cute Charm",
            "Fluffy",
            "Klutz"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 759,
            "evos": [
                "Bewear"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bewear",
        "hp": 120,
        "atk": 125,
        "def": 80,
        "spa": 55,
        "spd": 60,
        "spe": 60,
        "weight": 135,
        "height": 2.1,
        "types": [
            "Normal",
            "Fighting"
        ],
        "abilities": [
            "Fluffy",
            "Klutz",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 760,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bounsweet",
        "hp": 42,
        "atk": 30,
        "def": 38,
        "spa": 30,
        "spd": 38,
        "spe": 32,
        "weight": 3.2,
        "height": 0.3,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Leaf Guard",
            "Oblivious",
            "Sweet Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 761,
            "evos": [
                "Steenee"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Steenee",
        "hp": 52,
        "atk": 40,
        "def": 48,
        "spa": 40,
        "spd": 48,
        "spe": 62,
        "weight": 8.2,
        "height": 0.7,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Leaf Guard",
            "Oblivious",
            "Sweet Veil"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 762,
            "evos": [
                "Tsareena"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tsareena",
        "hp": 72,
        "atk": 120,
        "def": 98,
        "spa": 50,
        "spd": 98,
        "spe": 72,
        "weight": 21.4,
        "height": 1.2,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Leaf Guard",
            "Queenly Majesty",
            "Sweet Veil"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 763,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Comfey",
        "hp": 51,
        "atk": 52,
        "def": 90,
        "spa": 82,
        "spd": 110,
        "spe": 100,
        "weight": 0.3,
        "height": 0.1,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Flower Veil",
            "Natural Cure",
            "Triage"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 764,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Oranguru",
        "hp": 90,
        "atk": 60,
        "def": 80,
        "spa": 90,
        "spd": 110,
        "spe": 60,
        "weight": 76,
        "height": 1.5,
        "types": [
            "Normal",
            "Psychic"
        ],
        "abilities": [
            "Inner Focus",
            "Symbiosis",
            "Telepathy"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 765,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Passimian",
        "hp": 100,
        "atk": 120,
        "def": 90,
        "spa": 40,
        "spd": 60,
        "spe": 80,
        "weight": 82.8,
        "height": 2,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Defiant",
            "Receiver"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 766,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wimpod",
        "hp": 25,
        "atk": 35,
        "def": 40,
        "spa": 20,
        "spd": 30,
        "spe": 80,
        "weight": 12,
        "height": 0.5,
        "types": [
            "Bug",
            "Water"
        ],
        "abilities": [
            "Wimp Out"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 767,
            "evos": [
                "Golisopod"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Golisopod",
        "hp": 75,
        "atk": 125,
        "def": 140,
        "spa": 60,
        "spd": 90,
        "spe": 40,
        "weight": 108,
        "height": 2,
        "types": [
            "Bug",
            "Water"
        ],
        "abilities": [
            "Emergency Exit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 768,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sandygast",
        "hp": 55,
        "atk": 55,
        "def": 80,
        "spa": 70,
        "spd": 45,
        "spe": 15,
        "weight": 70,
        "height": 0.5,
        "types": [
            "Ghost",
            "Ground"
        ],
        "abilities": [
            "Sand Veil",
            "Water Compaction"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 769,
            "evos": [
                "Palossand"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Palossand",
        "hp": 85,
        "atk": 75,
        "def": 110,
        "spa": 100,
        "spd": 75,
        "spe": 35,
        "weight": 250,
        "height": 1.3,
        "types": [
            "Ghost",
            "Ground"
        ],
        "abilities": [
            "Sand Veil",
            "Water Compaction"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 770,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pyukumuku",
        "hp": 55,
        "atk": 60,
        "def": 130,
        "spa": 30,
        "spd": 130,
        "spe": 5,
        "weight": 1.2,
        "height": 0.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Innards Out",
            "Unaware"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 771,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Type: Null",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 59,
        "weight": 120.5,
        "height": 1.9,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Battle Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 772,
            "evos": [
                "Silvally"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Bug",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Bug"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Dark",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Dark"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Dragon",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Electric",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Electric"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Fairy",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Fighting",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Fire",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Fire"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Flying",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Flying"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Ghost",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Grass",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Grass"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Ground",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Ground"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Ice",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Ice"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Poison",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Poison"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Psychic",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Rock",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Rock"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Steel",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Steel"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silvally-Water",
        "hp": 95,
        "atk": 95,
        "def": 95,
        "spa": 95,
        "spd": 95,
        "spe": 95,
        "weight": 100.5,
        "height": 2.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "RKS System"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 773,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Minior",
        "hp": 60,
        "atk": 100,
        "def": 60,
        "spa": 100,
        "spd": 60,
        "spe": 120,
        "weight": 0.3,
        "height": 0.3,
        "types": [
            "Rock",
            "Flying"
        ],
        "abilities": [
            "Shields Down"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 774,
            "evos": [],
            "alts": [
                "Minior-Meteor"
            ],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Komala",
        "hp": 65,
        "atk": 115,
        "def": 65,
        "spa": 75,
        "spd": 95,
        "spe": 65,
        "weight": 19.9,
        "height": 0.4,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Comatose"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 775,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Turtonator",
        "hp": 60,
        "atk": 78,
        "def": 135,
        "spa": 91,
        "spd": 85,
        "spe": 36,
        "weight": 212,
        "height": 2,
        "types": [
            "Fire",
            "Dragon"
        ],
        "abilities": [
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 776,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Togedemaru",
        "hp": 65,
        "atk": 98,
        "def": 63,
        "spa": 40,
        "spd": 73,
        "spe": 96,
        "weight": 3.3,
        "height": 0.3,
        "types": [
            "Electric",
            "Steel"
        ],
        "abilities": [
            "Iron Barbs",
            "Lightning Rod",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 777,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Togedemaru-Totem",
        "hp": 65,
        "atk": 98,
        "def": 63,
        "spa": 40,
        "spd": 73,
        "spe": 96,
        "weight": 13,
        "height": 0.6,
        "types": [
            "Electric",
            "Steel"
        ],
        "abilities": [
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 777,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mimikyu",
        "hp": 55,
        "atk": 90,
        "def": 80,
        "spa": 50,
        "spd": 105,
        "spe": 96,
        "weight": 0.7,
        "height": 0.2,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "abilities": [
            "Disguise"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 778,
            "evos": [],
            "alts": [
                "Mimikyu-Busted"
            ],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mimikyu-Totem",
        "hp": 55,
        "atk": 90,
        "def": 80,
        "spa": 50,
        "spd": 105,
        "spe": 96,
        "weight": 2.8,
        "height": 0.4,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "abilities": [
            "Disguise"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 778,
            "evos": [],
            "alts": [
                "Mimikyu-Busted-Totem"
            ],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Bruxish",
        "hp": 68,
        "atk": 105,
        "def": 70,
        "spa": 70,
        "spd": 70,
        "spe": 92,
        "weight": 19,
        "height": 0.9,
        "types": [
            "Water",
            "Psychic"
        ],
        "abilities": [
            "Dazzling",
            "Strong Jaw",
            "Wonder Skin"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 779,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drampa",
        "hp": 78,
        "atk": 60,
        "def": 85,
        "spa": 135,
        "spd": 91,
        "spe": 36,
        "weight": 185,
        "height": 3,
        "types": [
            "Normal",
            "Dragon"
        ],
        "abilities": [
            "Berserk",
            "Cloud Nine",
            "Sap Sipper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 780,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dhelmise",
        "hp": 70,
        "atk": 131,
        "def": 100,
        "spa": 86,
        "spd": 90,
        "spe": 40,
        "weight": 210,
        "height": 3.9,
        "types": [
            "Ghost",
            "Grass"
        ],
        "abilities": [
            "Steelworker"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 781,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Jangmo-o",
        "hp": 45,
        "atk": 55,
        "def": 65,
        "spa": 45,
        "spd": 45,
        "spe": 45,
        "weight": 29.7,
        "height": 0.6,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Bulletproof",
            "Overcoat",
            "Soundproof"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 782,
            "evos": [
                "Hakamo-o"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hakamo-o",
        "hp": 55,
        "atk": 75,
        "def": 90,
        "spa": 65,
        "spd": 70,
        "spe": 65,
        "weight": 47,
        "height": 1.2,
        "types": [
            "Dragon",
            "Fighting"
        ],
        "abilities": [
            "Bulletproof",
            "Overcoat",
            "Soundproof"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 783,
            "evos": [
                "Kommo-o"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kommo-o",
        "hp": 75,
        "atk": 110,
        "def": 125,
        "spa": 100,
        "spd": 105,
        "spe": 85,
        "weight": 78.2,
        "height": 1.6,
        "types": [
            "Dragon",
            "Fighting"
        ],
        "abilities": [
            "Bulletproof",
            "Overcoat",
            "Soundproof"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 784,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kommo-o-Totem",
        "hp": 75,
        "atk": 110,
        "def": 125,
        "spa": 100,
        "spd": 105,
        "spe": 85,
        "weight": 207.5,
        "height": 2.4,
        "types": [
            "Dragon",
            "Fighting"
        ],
        "abilities": [
            "Overcoat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 784,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cosmog",
        "hp": 43,
        "atk": 29,
        "def": 31,
        "spa": 29,
        "spd": 31,
        "spe": 37,
        "weight": 0.1,
        "height": 0.2,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Unaware"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 789,
            "evos": [
                "Cosmoem"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cosmoem",
        "hp": 43,
        "atk": 29,
        "def": 131,
        "spa": 29,
        "spd": 131,
        "spe": 37,
        "weight": 999.9,
        "height": 0.1,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 790,
            "evos": [
                "Lunala",
                "Solgaleo"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Solgaleo",
        "hp": 137,
        "atk": 137,
        "def": 107,
        "spa": 113,
        "spd": 89,
        "spe": 97,
        "weight": 230,
        "height": 3.4,
        "types": [
            "Psychic",
            "Steel"
        ],
        "abilities": [
            "Full Metal Body"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 791,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lunala",
        "hp": 137,
        "atk": 113,
        "def": 89,
        "spa": 137,
        "spd": 107,
        "spe": 97,
        "weight": 120,
        "height": 4,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "abilities": [
            "Shadow Shield"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 792,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nihilego",
        "hp": 109,
        "atk": 53,
        "def": 47,
        "spa": 127,
        "spd": 131,
        "spe": 103,
        "weight": 55.5,
        "height": 1.2,
        "types": [
            "Rock",
            "Poison"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 793,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Buzzwole",
        "hp": 107,
        "atk": 139,
        "def": 139,
        "spa": 53,
        "spd": 53,
        "spe": 79,
        "weight": 333.6,
        "height": 2.4,
        "types": [
            "Bug",
            "Fighting"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 794,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pheromosa",
        "hp": 71,
        "atk": 137,
        "def": 37,
        "spa": 137,
        "spd": 37,
        "spe": 151,
        "weight": 25,
        "height": 1.8,
        "types": [
            "Bug",
            "Fighting"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 795,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Xurkitree",
        "hp": 83,
        "atk": 89,
        "def": 71,
        "spa": 173,
        "spd": 71,
        "spe": 83,
        "weight": 100,
        "height": 3.8,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 796,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Celesteela",
        "hp": 97,
        "atk": 101,
        "def": 103,
        "spa": 107,
        "spd": 101,
        "spe": 61,
        "weight": 999.9,
        "height": 9.2,
        "types": [
            "Steel",
            "Flying"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 797,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kartana",
        "hp": 59,
        "atk": 181,
        "def": 131,
        "spa": 59,
        "spd": 31,
        "spe": 109,
        "weight": 0.1,
        "height": 0.3,
        "types": [
            "Grass",
            "Steel"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 798,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Guzzlord",
        "hp": 223,
        "atk": 101,
        "def": 53,
        "spa": 97,
        "spd": 53,
        "spe": 43,
        "weight": 888,
        "height": 5.5,
        "types": [
            "Dark",
            "Dragon"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 799,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Necrozma",
        "hp": 97,
        "atk": 107,
        "def": 101,
        "spa": 127,
        "spd": 89,
        "spe": 79,
        "weight": 230,
        "height": 2.4,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Prism Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 800,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Necrozma-Dusk Mane",
        "hp": 97,
        "atk": 157,
        "def": 127,
        "spa": 113,
        "spd": 109,
        "spe": 77,
        "weight": 460,
        "height": 3.8,
        "types": [
            "Psychic",
            "Steel"
        ],
        "abilities": [
            "Prism Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 800,
            "evos": [],
            "alts": [
                "Necrozma-Ultra"
            ],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Necrozma-Dawn Wings",
        "hp": 97,
        "atk": 113,
        "def": 109,
        "spa": 157,
        "spd": 127,
        "spe": 77,
        "weight": 350,
        "height": 4.2,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "abilities": [
            "Prism Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 800,
            "evos": [],
            "alts": [
                "Necrozma-Ultra"
            ],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magearna",
        "hp": 80,
        "atk": 95,
        "def": 115,
        "spa": 130,
        "spd": 115,
        "spe": 65,
        "weight": 80.5,
        "height": 1,
        "types": [
            "Steel",
            "Fairy"
        ],
        "abilities": [
            "Soul-Heart"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 801,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Marshadow",
        "hp": 90,
        "atk": 125,
        "def": 80,
        "spa": 90,
        "spd": 90,
        "spe": 125,
        "weight": 22.2,
        "height": 0.7,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "abilities": [
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 802,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Poipole",
        "hp": 67,
        "atk": 73,
        "def": 67,
        "spa": 73,
        "spd": 67,
        "spe": 73,
        "weight": 1.8,
        "height": 0.6,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 803,
            "evos": [
                "Naganadel"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Naganadel",
        "hp": 73,
        "atk": 73,
        "def": 73,
        "spa": 127,
        "spd": 73,
        "spe": 121,
        "weight": 150,
        "height": 3.6,
        "types": [
            "Poison",
            "Dragon"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 804,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stakataka",
        "hp": 61,
        "atk": 131,
        "def": 211,
        "spa": 53,
        "spd": 101,
        "spe": 13,
        "weight": 820,
        "height": 5.5,
        "types": [
            "Rock",
            "Steel"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 805,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Blacephalon",
        "hp": 53,
        "atk": 127,
        "def": 53,
        "spa": 151,
        "spd": 79,
        "spe": 107,
        "weight": 13,
        "height": 1.8,
        "types": [
            "Fire",
            "Ghost"
        ],
        "abilities": [
            "Beast Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 806,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zeraora",
        "hp": 88,
        "atk": 112,
        "def": 75,
        "spa": 102,
        "spd": 80,
        "spe": 143,
        "weight": 44.5,
        "height": 1.5,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Volt Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 807,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meltan",
        "hp": 46,
        "atk": 65,
        "def": 65,
        "spa": 55,
        "spd": 35,
        "spe": 34,
        "weight": 8,
        "height": 0.2,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Magnet Pull"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 808,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Melmetal",
        "hp": 135,
        "atk": 143,
        "def": 143,
        "spa": 80,
        "spd": 65,
        "spe": 34,
        "weight": 800,
        "height": 2.5,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Iron Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 809,
            "evos": [],
            "alts": [
                "Melmetal-Gmax"
            ],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pajantom",
        "hp": 84,
        "atk": 133,
        "def": 71,
        "spa": 51,
        "spd": 111,
        "spe": 101,
        "weight": 3.1,
        "height": 1.1,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "abilities": [
            "Comatose"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -42,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Fawnifer",
        "hp": 49,
        "atk": 61,
        "def": 42,
        "spa": 52,
        "spd": 40,
        "spe": 76,
        "weight": 6.9,
        "height": 0.7,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Lightning Rod",
            "Overgrow"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -45,
            "evos": [
                "Electrelk"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Electrelk",
        "hp": 59,
        "atk": 81,
        "def": 67,
        "spa": 57,
        "spd": 55,
        "spe": 101,
        "weight": 41.5,
        "height": 1.4,
        "types": [
            "Grass",
            "Electric"
        ],
        "abilities": [
            "Galvanize",
            "Overgrow"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -46,
            "evos": [
                "Caribolt"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Caribolt",
        "hp": 84,
        "atk": 106,
        "def": 82,
        "spa": 77,
        "spd": 80,
        "spe": 106,
        "weight": 140,
        "height": 2.5,
        "types": [
            "Grass",
            "Electric"
        ],
        "abilities": [
            "Galvanize",
            "Overgrow"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -47,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Smogecko",
        "hp": 48,
        "atk": 66,
        "def": 43,
        "spa": 58,
        "spd": 48,
        "spe": 56,
        "weight": 8.5,
        "height": 0.5,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Technician"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -48,
            "evos": [
                "Smoguana"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Smoguana",
        "hp": 68,
        "atk": 86,
        "def": 53,
        "spa": 68,
        "spd": 68,
        "spe": 76,
        "weight": 22.2,
        "height": 1.5,
        "types": [
            "Fire",
            "Ground"
        ],
        "abilities": [
            "Blaze",
            "Technician"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -49,
            "evos": [
                "Smokomodo"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Smokomodo",
        "hp": 88,
        "atk": 116,
        "def": 67,
        "spa": 88,
        "spd": 78,
        "spe": 97,
        "weight": 205,
        "height": 2.2,
        "types": [
            "Fire",
            "Ground"
        ],
        "abilities": [
            "Blaze",
            "Technician"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -50,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Swirlpool",
        "hp": 61,
        "atk": 49,
        "def": 70,
        "spa": 50,
        "spd": 62,
        "spe": 28,
        "weight": 7,
        "height": 0.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Poison Heal",
            "Torrent"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -51,
            "evos": [
                "Coribalis"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Coribalis",
        "hp": 76,
        "atk": 69,
        "def": 90,
        "spa": 65,
        "spd": 77,
        "spe": 43,
        "weight": 24.5,
        "height": 1.4,
        "types": [
            "Water",
            "Bug"
        ],
        "abilities": [
            "Poison Heal",
            "Torrent"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -52,
            "evos": [
                "Snaelstrom"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Snaelstrom",
        "hp": 91,
        "atk": 94,
        "def": 110,
        "spa": 80,
        "spd": 97,
        "spe": 63,
        "weight": 120,
        "height": 2,
        "types": [
            "Water",
            "Bug"
        ],
        "abilities": [
            "Poison Heal",
            "Torrent"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -53,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Justyke",
        "hp": 72,
        "atk": 70,
        "def": 56,
        "spa": 83,
        "spd": 68,
        "spe": 30,
        "weight": 36.5,
        "height": 0.4,
        "types": [
            "Steel",
            "Ground"
        ],
        "abilities": [
            "Bulletproof",
            "Justified",
            "Levitate"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -54,
            "evos": [
                "Equilibra"
            ],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Equilibra",
        "hp": 102,
        "atk": 50,
        "def": 96,
        "spa": 133,
        "spd": 118,
        "spe": 60,
        "weight": 51.3,
        "height": 0.8,
        "types": [
            "Steel",
            "Ground"
        ],
        "abilities": [
            "Bulletproof",
            "Justified",
            "Levitate"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -55,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SM",
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Growlithe-Hisui",
        "hp": 60,
        "atk": 75,
        "def": 45,
        "spa": 65,
        "spd": 50,
        "spe": 55,
        "weight": 22.7,
        "height": 0.8,
        "types": [
            "Fire",
            "Rock"
        ],
        "abilities": [
            "Flash Fire",
            "Intimidate",
            "Justified"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 58,
            "evos": [
                "Arcanine-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arcanine-Hisui",
        "hp": 95,
        "atk": 115,
        "def": 80,
        "spa": 95,
        "spd": 80,
        "spe": 90,
        "weight": 168,
        "height": 2,
        "types": [
            "Fire",
            "Rock"
        ],
        "abilities": [
            "Flash Fire",
            "Intimidate",
            "Justified"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 59,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Typhlosion-Hisui",
        "hp": 73,
        "atk": 84,
        "def": 78,
        "spa": 119,
        "spd": 85,
        "spe": 95,
        "weight": 69.8,
        "height": 1.6,
        "types": [
            "Fire",
            "Ghost"
        ],
        "abilities": [
            "Blaze",
            "Flash Fire"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 157,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sneasel-Hisui",
        "hp": 55,
        "atk": 95,
        "def": 55,
        "spa": 35,
        "spd": 75,
        "spe": 115,
        "weight": 27,
        "height": 0.9,
        "types": [
            "Fighting",
            "Poison"
        ],
        "abilities": [
            "Inner Focus",
            "Keen Eye",
            "Poison Touch"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 215,
            "evos": [
                "Sneasler"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Samurott-Hisui",
        "hp": 90,
        "atk": 108,
        "def": 80,
        "spa": 100,
        "spd": 65,
        "spe": 85,
        "weight": 58.2,
        "height": 1.5,
        "types": [
            "Water",
            "Dark"
        ],
        "abilities": [
            "Shell Armor",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 503,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zoroark-Hisui",
        "hp": 55,
        "atk": 100,
        "def": 60,
        "spa": 125,
        "spd": 60,
        "spe": 110,
        "weight": 73,
        "height": 1.6,
        "types": [
            "Normal",
            "Ghost"
        ],
        "abilities": [
            "Illusion"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 571,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Braviary-Hisui",
        "hp": 110,
        "atk": 83,
        "def": 70,
        "spa": 112,
        "spd": 70,
        "spe": 65,
        "weight": 43.4,
        "height": 1.7,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Defiant",
            "Keen Eye",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 628,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sliggoo-Hisui",
        "hp": 58,
        "atk": 75,
        "def": 83,
        "spa": 83,
        "spd": 113,
        "spe": 40,
        "weight": 68.5,
        "height": 0.7,
        "types": [
            "Steel",
            "Dragon"
        ],
        "abilities": [
            "Gooey",
            "Overcoat",
            "Sap Sipper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 705,
            "evos": [
                "Goodra-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Goodra-Hisui",
        "hp": 80,
        "atk": 100,
        "def": 100,
        "spa": 110,
        "spd": 150,
        "spe": 60,
        "weight": 334.1,
        "height": 1.7,
        "types": [
            "Steel",
            "Dragon"
        ],
        "abilities": [
            "Gooey",
            "Overcoat",
            "Sap Sipper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 706,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Decidueye-Hisui",
        "hp": 88,
        "atk": 112,
        "def": 80,
        "spa": 95,
        "spd": 95,
        "spe": 60,
        "weight": 37,
        "height": 1.6,
        "types": [
            "Grass",
            "Fighting"
        ],
        "abilities": [
            "Long Reach",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 724,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zacian",
        "hp": 92,
        "atk": 130,
        "def": 115,
        "spa": 80,
        "spd": 115,
        "spe": 138,
        "weight": 110,
        "height": 2.8,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Intrepid Sword"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 888,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zacian-Crowned",
        "hp": 92,
        "atk": 170,
        "def": 115,
        "spa": 80,
        "spd": 115,
        "spe": 148,
        "weight": 355,
        "height": 2.8,
        "types": [
            "Fairy",
            "Steel"
        ],
        "abilities": [
            "Intrepid Sword"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 888,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zamazenta",
        "hp": 92,
        "atk": 130,
        "def": 115,
        "spa": 80,
        "spd": 115,
        "spe": 138,
        "weight": 210,
        "height": 2.9,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Dauntless Shield"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 889,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zamazenta-Crowned",
        "hp": 92,
        "atk": 130,
        "def": 145,
        "spa": 80,
        "spd": 145,
        "spe": 128,
        "weight": 785,
        "height": 2.9,
        "types": [
            "Fighting",
            "Steel"
        ],
        "abilities": [
            "Dauntless Shield"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 889,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kubfu",
        "hp": 60,
        "atk": 90,
        "def": 60,
        "spa": 53,
        "spd": 50,
        "spe": 72,
        "weight": 12,
        "height": 0.6,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Inner Focus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 891,
            "evos": [
                "Urshifu",
                "Urshifu-Rapid-Strike"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Kleavor",
        "hp": 70,
        "atk": 135,
        "def": 95,
        "spa": 45,
        "spd": 70,
        "spe": 85,
        "weight": 89,
        "height": 1.8,
        "types": [
            "Bug",
            "Rock"
        ],
        "abilities": [
            "Sheer Force",
            "Steadfast",
            "Swarm"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 900,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Basculegion",
        "hp": 120,
        "atk": 112,
        "def": 65,
        "spa": 80,
        "spd": 75,
        "spe": 78,
        "weight": 110,
        "height": 3,
        "types": [
            "Water",
            "Ghost"
        ],
        "abilities": [
            "Adaptability",
            "Mold Breaker",
            "Rattled"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 902,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Basculegion-F",
        "hp": 120,
        "atk": 92,
        "def": 65,
        "spa": 100,
        "spd": 75,
        "spe": 78,
        "weight": 110,
        "height": 3,
        "types": [
            "Water",
            "Ghost"
        ],
        "abilities": [
            "Adaptability",
            "Mold Breaker",
            "Rattled"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 902,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sneasler",
        "hp": 80,
        "atk": 130,
        "def": 60,
        "spa": 40,
        "spd": 80,
        "spe": 120,
        "weight": 43,
        "height": 1.3,
        "types": [
            "Fighting",
            "Poison"
        ],
        "abilities": [
            "Poison Touch",
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 903,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Enamorus",
        "hp": 74,
        "atk": 115,
        "def": 70,
        "spa": 135,
        "spd": 80,
        "spe": 106,
        "weight": 48,
        "height": 1.6,
        "types": [
            "Fairy",
            "Flying"
        ],
        "abilities": [
            "Contrary",
            "Healer"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 905,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pikachu-World",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 6,
        "height": 0.4,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 25,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Meowth-Galar",
        "hp": 50,
        "atk": 65,
        "def": 55,
        "spa": 40,
        "spd": 40,
        "spe": 40,
        "weight": 7.5,
        "height": 0.4,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Pickup",
            "Tough Claws",
            "Unnerve"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 52,
            "evos": [
                "Perrserker"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ponyta-Galar",
        "hp": 50,
        "atk": 85,
        "def": 55,
        "spa": 65,
        "spd": 65,
        "spe": 90,
        "weight": 24,
        "height": 0.8,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Anticipation",
            "Pastel Veil",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 77,
            "evos": [
                "Rapidash-Galar"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rapidash-Galar",
        "hp": 65,
        "atk": 100,
        "def": 70,
        "spa": 80,
        "spd": 80,
        "spe": 105,
        "weight": 80,
        "height": 1.7,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Anticipation",
            "Pastel Veil",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 78,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slowpoke-Galar",
        "hp": 90,
        "atk": 65,
        "def": 65,
        "spa": 40,
        "spd": 40,
        "spe": 15,
        "weight": 36,
        "height": 1.2,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Gluttony",
            "Own Tempo",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 79,
            "evos": [
                "Slowbro-Galar",
                "Slowking-Galar"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slowbro-Galar",
        "hp": 95,
        "atk": 100,
        "def": 95,
        "spa": 100,
        "spd": 70,
        "spe": 30,
        "weight": 70.5,
        "height": 1.6,
        "types": [
            "Poison",
            "Psychic"
        ],
        "abilities": [
            "Own Tempo",
            "Quick Draw",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 80,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Farfetch'd-Galar",
        "hp": 52,
        "atk": 95,
        "def": 55,
        "spa": 58,
        "spd": 62,
        "spe": 55,
        "weight": 15,
        "height": 0.8,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Scrappy",
            "Steadfast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 83,
            "evos": [
                "Sirfetch'd"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Voltorb-Hisui",
        "hp": 40,
        "atk": 30,
        "def": 50,
        "spa": 55,
        "spd": 55,
        "spe": 100,
        "weight": 13,
        "height": 0.5,
        "types": [
            "Electric",
            "Grass"
        ],
        "abilities": [
            "Aftermath",
            "Soundproof",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 100,
            "evos": [
                "Electrode-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Electrode-Hisui",
        "hp": 60,
        "atk": 50,
        "def": 70,
        "spa": 80,
        "spd": 80,
        "spe": 150,
        "weight": 71,
        "height": 1.2,
        "types": [
            "Electric",
            "Grass"
        ],
        "abilities": [
            "Aftermath",
            "Soundproof",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 101,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Weezing-Galar",
        "hp": 65,
        "atk": 90,
        "def": 120,
        "spa": 85,
        "spd": 70,
        "spe": 60,
        "weight": 16,
        "height": 3,
        "types": [
            "Poison",
            "Fairy"
        ],
        "abilities": [
            "Levitate",
            "Misty Surge",
            "Neutralizing Gas"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 110,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mr. Mime-Galar",
        "hp": 50,
        "atk": 65,
        "def": 65,
        "spa": 90,
        "spd": 90,
        "spe": 100,
        "weight": 56.8,
        "height": 1.4,
        "types": [
            "Ice",
            "Psychic"
        ],
        "abilities": [
            "Ice Body",
            "Screen Cleaner",
            "Vital Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 122,
            "evos": [
                "Mr. Rime"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Articuno-Galar",
        "hp": 90,
        "atk": 85,
        "def": 85,
        "spa": 125,
        "spd": 100,
        "spe": 95,
        "weight": 50.9,
        "height": 1.7,
        "types": [
            "Psychic",
            "Flying"
        ],
        "abilities": [
            "Competitive"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 144,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zapdos-Galar",
        "hp": 90,
        "atk": 125,
        "def": 90,
        "spa": 85,
        "spd": 90,
        "spe": 100,
        "weight": 58.2,
        "height": 1.6,
        "types": [
            "Fighting",
            "Flying"
        ],
        "abilities": [
            "Defiant"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 145,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Moltres-Galar",
        "hp": 90,
        "atk": 85,
        "def": 90,
        "spa": 100,
        "spd": 125,
        "spe": 90,
        "weight": 66,
        "height": 2,
        "types": [
            "Dark",
            "Flying"
        ],
        "abilities": [
            "Berserk"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 146,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Slowking-Galar",
        "hp": 95,
        "atk": 65,
        "def": 80,
        "spa": 110,
        "spd": 110,
        "spe": 30,
        "weight": 79.5,
        "height": 1.8,
        "types": [
            "Poison",
            "Psychic"
        ],
        "abilities": [
            "Curious Medicine",
            "Own Tempo",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 199,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Qwilfish-Hisui",
        "hp": 65,
        "atk": 95,
        "def": 85,
        "spa": 55,
        "spd": 55,
        "spe": 85,
        "weight": 3.9,
        "height": 0.5,
        "types": [
            "Dark",
            "Poison"
        ],
        "abilities": [
            "Intimidate",
            "Poison Point",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 211,
            "evos": [
                "Overqwil"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Corsola-Galar",
        "hp": 60,
        "atk": 55,
        "def": 100,
        "spa": 65,
        "spd": 100,
        "spe": 30,
        "weight": 0.5,
        "height": 0.6,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 222,
            "evos": [
                "Cursola"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zigzagoon-Galar",
        "hp": 38,
        "atk": 30,
        "def": 41,
        "spa": 30,
        "spd": 41,
        "spe": 60,
        "weight": 17.5,
        "height": 0.4,
        "types": [
            "Dark",
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Pickup",
            "Quick Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 263,
            "evos": [
                "Linoone-Galar"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Linoone-Galar",
        "hp": 78,
        "atk": 70,
        "def": 61,
        "spa": 50,
        "spd": 61,
        "spe": 100,
        "weight": 32.5,
        "height": 0.5,
        "types": [
            "Dark",
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Pickup",
            "Quick Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 264,
            "evos": [
                "Obstagoon"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dialga-Origin",
        "hp": 100,
        "atk": 100,
        "def": 120,
        "spa": 150,
        "spd": 120,
        "spe": 90,
        "weight": 850,
        "height": 7,
        "types": [
            "Steel",
            "Dragon"
        ],
        "abilities": [
            "Pressure",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 483,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Palkia-Origin",
        "hp": 90,
        "atk": 100,
        "def": 100,
        "spa": 150,
        "spd": 120,
        "spe": 120,
        "weight": 660,
        "height": 6.3,
        "types": [
            "Water",
            "Dragon"
        ],
        "abilities": [
            "Pressure",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 484,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Lilligant-Hisui",
        "hp": 70,
        "atk": 105,
        "def": 75,
        "spa": 50,
        "spd": 75,
        "spe": 105,
        "weight": 19.2,
        "height": 1.2,
        "types": [
            "Grass",
            "Fighting"
        ],
        "abilities": [
            "Chlorophyll",
            "Hustle",
            "Leaf Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 549,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Basculin-White-Striped",
        "hp": 70,
        "atk": 92,
        "def": 65,
        "spa": 80,
        "spd": 55,
        "spe": 98,
        "weight": 18,
        "height": 1,
        "types": [
            "Water"
        ],
        "abilities": [
            "Adaptability",
            "Mold Breaker",
            "Rattled"
        ],
        "formats": [
            "Limbo"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 550,
            "evos": [
                "Basculegion",
                "Basculegion-F"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Darumaka-Galar",
        "hp": 70,
        "atk": 90,
        "def": 45,
        "spa": 15,
        "spd": 45,
        "spe": 50,
        "weight": 40,
        "height": 0.7,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Hustle",
            "Inner Focus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 554,
            "evos": [
                "Darmanitan-Galar"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Darmanitan-Galar",
        "hp": 105,
        "atk": 140,
        "def": 55,
        "spa": 30,
        "spd": 55,
        "spe": 95,
        "weight": 120,
        "height": 1.7,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Gorilla Tactics",
            "Zen Mode"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 555,
            "evos": [],
            "alts": [
                "Darmanitan-Galar-Zen"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Yamask-Galar",
        "hp": 38,
        "atk": 55,
        "def": 85,
        "spa": 30,
        "spd": 65,
        "spe": 30,
        "weight": 1.5,
        "height": 0.5,
        "types": [
            "Ground",
            "Ghost"
        ],
        "abilities": [
            "Wandering Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 562,
            "evos": [
                "Runerigus"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zorua-Hisui",
        "hp": 35,
        "atk": 60,
        "def": 40,
        "spa": 85,
        "spd": 40,
        "spe": 70,
        "weight": 12.5,
        "height": 0.7,
        "types": [
            "Normal",
            "Ghost"
        ],
        "abilities": [
            "Illusion"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 570,
            "evos": [
                "Zoroark-Hisui"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stunfisk-Galar",
        "hp": 109,
        "atk": 81,
        "def": 99,
        "spa": 66,
        "spd": 84,
        "spe": 32,
        "weight": 20.5,
        "height": 0.7,
        "types": [
            "Ground",
            "Steel"
        ],
        "abilities": [
            "Mimicry"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 618,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Avalugg-Hisui",
        "hp": 95,
        "atk": 127,
        "def": 184,
        "spa": 34,
        "spd": 36,
        "spe": 38,
        "weight": 262.4,
        "height": 1.4,
        "types": [
            "Ice",
            "Rock"
        ],
        "abilities": [
            "Ice Body",
            "Strong Jaw",
            "Sturdy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 713,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Magearna-Original",
        "hp": 80,
        "atk": 95,
        "def": 115,
        "spa": 130,
        "spd": 115,
        "spe": 65,
        "weight": 80.5,
        "height": 1,
        "types": [
            "Steel",
            "Fairy"
        ],
        "abilities": [
            "Soul-Heart"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 801,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grookey",
        "hp": 50,
        "atk": 65,
        "def": 50,
        "spa": 40,
        "spd": 40,
        "spe": 65,
        "weight": 5,
        "height": 0.3,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Grassy Surge",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 810,
            "evos": [
                "Thwackey"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Thwackey",
        "hp": 70,
        "atk": 85,
        "def": 70,
        "spa": 55,
        "spd": 60,
        "spe": 80,
        "weight": 14,
        "height": 0.7,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Grassy Surge",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 811,
            "evos": [
                "Rillaboom"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rillaboom",
        "hp": 100,
        "atk": 125,
        "def": 90,
        "spa": 60,
        "spd": 70,
        "spe": 85,
        "weight": 90,
        "height": 2.1,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Grassy Surge",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 812,
            "evos": [],
            "alts": [
                "Rillaboom-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Scorbunny",
        "hp": 50,
        "atk": 71,
        "def": 40,
        "spa": 40,
        "spd": 40,
        "spe": 69,
        "weight": 4.5,
        "height": 0.3,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Libero"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 813,
            "evos": [
                "Raboot"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Raboot",
        "hp": 65,
        "atk": 86,
        "def": 60,
        "spa": 55,
        "spd": 60,
        "spe": 94,
        "weight": 9,
        "height": 0.6,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Libero"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 814,
            "evos": [
                "Cinderace"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cinderace",
        "hp": 80,
        "atk": 116,
        "def": 75,
        "spa": 65,
        "spd": 75,
        "spe": 119,
        "weight": 33,
        "height": 1.4,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Libero"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 815,
            "evos": [],
            "alts": [
                "Cinderace-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sobble",
        "hp": 50,
        "atk": 40,
        "def": 40,
        "spa": 70,
        "spd": 40,
        "spe": 70,
        "weight": 4,
        "height": 0.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Sniper",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 816,
            "evos": [
                "Drizzile"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drizzile",
        "hp": 65,
        "atk": 60,
        "def": 55,
        "spa": 95,
        "spd": 55,
        "spe": 90,
        "weight": 11.5,
        "height": 0.7,
        "types": [
            "Water"
        ],
        "abilities": [
            "Sniper",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 817,
            "evos": [
                "Inteleon"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Inteleon",
        "hp": 70,
        "atk": 85,
        "def": 65,
        "spa": 125,
        "spd": 65,
        "spe": 120,
        "weight": 45.2,
        "height": 1.9,
        "types": [
            "Water"
        ],
        "abilities": [
            "Sniper",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 818,
            "evos": [],
            "alts": [
                "Inteleon-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Skwovet",
        "hp": 70,
        "atk": 55,
        "def": 55,
        "spa": 35,
        "spd": 35,
        "spe": 25,
        "weight": 2.5,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cheek Pouch",
            "Gluttony"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 819,
            "evos": [
                "Greedent"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Greedent",
        "hp": 120,
        "atk": 95,
        "def": 95,
        "spa": 55,
        "spd": 75,
        "spe": 20,
        "weight": 6,
        "height": 0.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cheek Pouch",
            "Gluttony"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 820,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rookidee",
        "hp": 38,
        "atk": 47,
        "def": 35,
        "spa": 33,
        "spd": 35,
        "spe": 57,
        "weight": 1.8,
        "height": 0.2,
        "types": [
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Keen Eye",
            "Unnerve"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 821,
            "evos": [
                "Corvisquire"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Corvisquire",
        "hp": 68,
        "atk": 67,
        "def": 55,
        "spa": 43,
        "spd": 55,
        "spe": 77,
        "weight": 16,
        "height": 0.8,
        "types": [
            "Flying"
        ],
        "abilities": [
            "Big Pecks",
            "Keen Eye",
            "Unnerve"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 822,
            "evos": [
                "Corviknight"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Corviknight",
        "hp": 98,
        "atk": 87,
        "def": 105,
        "spa": 53,
        "spd": 85,
        "spe": 67,
        "weight": 75,
        "height": 2.2,
        "types": [
            "Flying",
            "Steel"
        ],
        "abilities": [
            "Mirror Armor",
            "Pressure",
            "Unnerve"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 823,
            "evos": [],
            "alts": [
                "Corviknight-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Blipbug",
        "hp": 25,
        "atk": 20,
        "def": 20,
        "spa": 25,
        "spd": 45,
        "spe": 45,
        "weight": 8,
        "height": 0.4,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Compound Eyes",
            "Swarm",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 824,
            "evos": [
                "Dottler"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dottler",
        "hp": 50,
        "atk": 35,
        "def": 80,
        "spa": 50,
        "spd": 90,
        "spe": 30,
        "weight": 19.5,
        "height": 0.4,
        "types": [
            "Bug",
            "Psychic"
        ],
        "abilities": [
            "Compound Eyes",
            "Swarm",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 825,
            "evos": [
                "Orbeetle"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Orbeetle",
        "hp": 60,
        "atk": 45,
        "def": 110,
        "spa": 80,
        "spd": 120,
        "spe": 90,
        "weight": 40.8,
        "height": 0.4,
        "types": [
            "Bug",
            "Psychic"
        ],
        "abilities": [
            "Frisk",
            "Swarm",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 826,
            "evos": [],
            "alts": [
                "Orbeetle-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Nickit",
        "hp": 40,
        "atk": 28,
        "def": 28,
        "spa": 47,
        "spd": 52,
        "spe": 50,
        "weight": 8.9,
        "height": 0.6,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Run Away",
            "Stakeout",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 827,
            "evos": [
                "Thievul"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Thievul",
        "hp": 70,
        "atk": 58,
        "def": 58,
        "spa": 87,
        "spd": 92,
        "spe": 90,
        "weight": 19.9,
        "height": 1.2,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Run Away",
            "Stakeout",
            "Unburden"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 828,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Gossifleur",
        "hp": 40,
        "atk": 40,
        "def": 60,
        "spa": 40,
        "spd": 60,
        "spe": 10,
        "weight": 2.2,
        "height": 0.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Cotton Down",
            "Effect Spore",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 829,
            "evos": [
                "Eldegoss"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Eldegoss",
        "hp": 60,
        "atk": 50,
        "def": 90,
        "spa": 80,
        "spd": 120,
        "spe": 60,
        "weight": 2.5,
        "height": 0.5,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Cotton Down",
            "Effect Spore",
            "Regenerator"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 830,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wooloo",
        "hp": 42,
        "atk": 40,
        "def": 55,
        "spa": 40,
        "spd": 45,
        "spe": 48,
        "weight": 6,
        "height": 0.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Bulletproof",
            "Fluffy",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 831,
            "evos": [
                "Dubwool"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dubwool",
        "hp": 72,
        "atk": 80,
        "def": 100,
        "spa": 60,
        "spd": 90,
        "spe": 88,
        "weight": 43,
        "height": 1.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Bulletproof",
            "Fluffy",
            "Steadfast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 832,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chewtle",
        "hp": 50,
        "atk": 64,
        "def": 50,
        "spa": 38,
        "spd": 38,
        "spe": 44,
        "weight": 8.5,
        "height": 0.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Shell Armor",
            "Strong Jaw",
            "Swift Swim"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 833,
            "evos": [
                "Drednaw"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drednaw",
        "hp": 90,
        "atk": 115,
        "def": 90,
        "spa": 48,
        "spd": 68,
        "spe": 74,
        "weight": 115.5,
        "height": 1,
        "types": [
            "Water",
            "Rock"
        ],
        "abilities": [
            "Shell Armor",
            "Strong Jaw",
            "Swift Swim"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 834,
            "evos": [],
            "alts": [
                "Drednaw-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Yamper",
        "hp": 59,
        "atk": 45,
        "def": 50,
        "spa": 40,
        "spd": 50,
        "spe": 26,
        "weight": 13.5,
        "height": 0.3,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Ball Fetch",
            "Rattled"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 835,
            "evos": [
                "Boltund"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Boltund",
        "hp": 69,
        "atk": 90,
        "def": 60,
        "spa": 90,
        "spd": 60,
        "spe": 121,
        "weight": 34,
        "height": 1,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Competitive",
            "Strong Jaw"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 836,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Rolycoly",
        "hp": 30,
        "atk": 40,
        "def": 50,
        "spa": 40,
        "spd": 50,
        "spe": 30,
        "weight": 12,
        "height": 0.3,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Flash Fire",
            "Heatproof",
            "Steam Engine"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 837,
            "evos": [
                "Carkol"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Carkol",
        "hp": 80,
        "atk": 60,
        "def": 90,
        "spa": 60,
        "spd": 70,
        "spe": 50,
        "weight": 78,
        "height": 1.1,
        "types": [
            "Rock",
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "Steam Engine"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 838,
            "evos": [
                "Coalossal"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Coalossal",
        "hp": 110,
        "atk": 80,
        "def": 120,
        "spa": 80,
        "spd": 90,
        "spe": 30,
        "weight": 310.5,
        "height": 2.8,
        "types": [
            "Rock",
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "Steam Engine"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 839,
            "evos": [],
            "alts": [
                "Coalossal-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Applin",
        "hp": 40,
        "atk": 40,
        "def": 80,
        "spa": 40,
        "spd": 40,
        "spe": 20,
        "weight": 0.5,
        "height": 0.2,
        "types": [
            "Grass",
            "Dragon"
        ],
        "abilities": [
            "Bulletproof",
            "Gluttony",
            "Ripen"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 840,
            "evos": [
                "Appletun",
                "Flapple"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Flapple",
        "hp": 70,
        "atk": 110,
        "def": 80,
        "spa": 95,
        "spd": 60,
        "spe": 70,
        "weight": 1,
        "height": 0.3,
        "types": [
            "Grass",
            "Dragon"
        ],
        "abilities": [
            "Gluttony",
            "Hustle",
            "Ripen"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 841,
            "evos": [],
            "alts": [
                "Flapple-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Appletun",
        "hp": 110,
        "atk": 85,
        "def": 80,
        "spa": 100,
        "spd": 80,
        "spe": 30,
        "weight": 13,
        "height": 0.4,
        "types": [
            "Grass",
            "Dragon"
        ],
        "abilities": [
            "Gluttony",
            "Ripen",
            "Thick Fat"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 842,
            "evos": [],
            "alts": [
                "Appletun-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Silicobra",
        "hp": 52,
        "atk": 57,
        "def": 75,
        "spa": 35,
        "spd": 50,
        "spe": 46,
        "weight": 7.6,
        "height": 2.2,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Spit",
            "Sand Veil",
            "Shed Skin"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 843,
            "evos": [
                "Sandaconda"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sandaconda",
        "hp": 72,
        "atk": 107,
        "def": 125,
        "spa": 65,
        "spd": 70,
        "spe": 71,
        "weight": 65.5,
        "height": 3.8,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Spit",
            "Sand Veil",
            "Shed Skin"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 844,
            "evos": [],
            "alts": [
                "Sandaconda-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cramorant",
        "hp": 70,
        "atk": 85,
        "def": 55,
        "spa": 85,
        "spd": 95,
        "spe": 85,
        "weight": 18,
        "height": 0.8,
        "types": [
            "Flying",
            "Water"
        ],
        "abilities": [
            "Gulp Missile"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 845,
            "evos": [],
            "alts": [
                "Cramorant-Gorging",
                "Cramorant-Gulping"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arrokuda",
        "hp": 41,
        "atk": 63,
        "def": 40,
        "spa": 40,
        "spd": 30,
        "spe": 66,
        "weight": 1,
        "height": 0.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Propeller Tail",
            "Swift Swim"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 846,
            "evos": [
                "Barraskewda"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Barraskewda",
        "hp": 61,
        "atk": 123,
        "def": 60,
        "spa": 60,
        "spd": 50,
        "spe": 136,
        "weight": 30,
        "height": 1.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Propeller Tail",
            "Swift Swim"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 847,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Toxel",
        "hp": 40,
        "atk": 38,
        "def": 35,
        "spa": 54,
        "spd": 35,
        "spe": 40,
        "weight": 11,
        "height": 0.4,
        "types": [
            "Electric",
            "Poison"
        ],
        "abilities": [
            "Klutz",
            "Rattled",
            "Static"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 848,
            "evos": [
                "Toxtricity",
                "Toxtricity-Low-Key"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Toxtricity",
        "hp": 75,
        "atk": 98,
        "def": 70,
        "spa": 114,
        "spd": 70,
        "spe": 75,
        "weight": 40,
        "height": 1.6,
        "types": [
            "Electric",
            "Poison"
        ],
        "abilities": [
            "Plus",
            "Punk Rock",
            "Technician"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 849,
            "evos": [],
            "alts": [
                "Toxtricity-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Toxtricity-Low-Key",
        "hp": 75,
        "atk": 98,
        "def": 70,
        "spa": 114,
        "spd": 70,
        "spe": 75,
        "weight": 40,
        "height": 1.6,
        "types": [
            "Electric",
            "Poison"
        ],
        "abilities": [
            "Minus",
            "Punk Rock",
            "Technician"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 849,
            "evos": [],
            "alts": [
                "Toxtricity-Low-Key-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sizzlipede",
        "hp": 50,
        "atk": 65,
        "def": 45,
        "spa": 50,
        "spd": 50,
        "spe": 45,
        "weight": 1,
        "height": 0.7,
        "types": [
            "Fire",
            "Bug"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "White Smoke"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 850,
            "evos": [
                "Centiskorch"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Centiskorch",
        "hp": 100,
        "atk": 115,
        "def": 65,
        "spa": 90,
        "spd": 90,
        "spe": 65,
        "weight": 120,
        "height": 3,
        "types": [
            "Fire",
            "Bug"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "White Smoke"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 851,
            "evos": [],
            "alts": [
                "Centiskorch-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Clobbopus",
        "hp": 50,
        "atk": 68,
        "def": 60,
        "spa": 50,
        "spd": 50,
        "spe": 32,
        "weight": 4,
        "height": 0.6,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Limber",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 852,
            "evos": [
                "Grapploct"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grapploct",
        "hp": 80,
        "atk": 118,
        "def": 90,
        "spa": 70,
        "spd": 80,
        "spe": 42,
        "weight": 39,
        "height": 1.6,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Limber",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 853,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sinistea",
        "hp": 40,
        "atk": 45,
        "def": 45,
        "spa": 74,
        "spd": 54,
        "spe": 50,
        "weight": 0.2,
        "height": 0.1,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Weak Armor"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 854,
            "evos": [
                "Polteageist"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sinistea-Antique",
        "hp": 40,
        "atk": 45,
        "def": 45,
        "spa": 74,
        "spd": 54,
        "spe": 50,
        "weight": 0.2,
        "height": 0.1,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Weak Armor"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 854,
            "evos": [
                "Polteageist-Antique"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Polteageist",
        "hp": 60,
        "atk": 65,
        "def": 65,
        "spa": 134,
        "spd": 114,
        "spe": 70,
        "weight": 0.4,
        "height": 0.2,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Weak Armor"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 855,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Polteageist-Antique",
        "hp": 60,
        "atk": 65,
        "def": 65,
        "spa": 134,
        "spd": 114,
        "spe": 70,
        "weight": 0.4,
        "height": 0.2,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Cursed Body",
            "Weak Armor"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 855,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hatenna",
        "hp": 42,
        "atk": 30,
        "def": 45,
        "spa": 56,
        "spd": 53,
        "spe": 39,
        "weight": 3.4,
        "height": 0.4,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Anticipation",
            "Healer",
            "Magic Bounce"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 856,
            "evos": [
                "Hattrem"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hattrem",
        "hp": 57,
        "atk": 40,
        "def": 65,
        "spa": 86,
        "spd": 73,
        "spe": 49,
        "weight": 4.8,
        "height": 0.6,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Anticipation",
            "Healer",
            "Magic Bounce"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 857,
            "evos": [
                "Hatterene"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Hatterene",
        "hp": 57,
        "atk": 90,
        "def": 95,
        "spa": 136,
        "spd": 103,
        "spe": 29,
        "weight": 5.1,
        "height": 2.1,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Anticipation",
            "Healer",
            "Magic Bounce"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 858,
            "evos": [],
            "alts": [
                "Hatterene-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Impidimp",
        "hp": 45,
        "atk": 45,
        "def": 30,
        "spa": 55,
        "spd": 40,
        "spe": 50,
        "weight": 5.5,
        "height": 0.4,
        "types": [
            "Dark",
            "Fairy"
        ],
        "abilities": [
            "Frisk",
            "Pickpocket",
            "Prankster"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 859,
            "evos": [
                "Morgrem"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Morgrem",
        "hp": 65,
        "atk": 60,
        "def": 45,
        "spa": 75,
        "spd": 55,
        "spe": 70,
        "weight": 12.5,
        "height": 0.8,
        "types": [
            "Dark",
            "Fairy"
        ],
        "abilities": [
            "Frisk",
            "Pickpocket",
            "Prankster"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 860,
            "evos": [
                "Grimmsnarl"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Grimmsnarl",
        "hp": 95,
        "atk": 120,
        "def": 65,
        "spa": 95,
        "spd": 75,
        "spe": 60,
        "weight": 61,
        "height": 1.5,
        "types": [
            "Dark",
            "Fairy"
        ],
        "abilities": [
            "Frisk",
            "Pickpocket",
            "Prankster"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 861,
            "evos": [],
            "alts": [
                "Grimmsnarl-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Obstagoon",
        "hp": 93,
        "atk": 90,
        "def": 101,
        "spa": 60,
        "spd": 81,
        "spe": 95,
        "weight": 46,
        "height": 1.6,
        "types": [
            "Dark",
            "Normal"
        ],
        "abilities": [
            "Defiant",
            "Guts",
            "Reckless"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 862,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Perrserker",
        "hp": 70,
        "atk": 110,
        "def": 100,
        "spa": 50,
        "spd": 60,
        "spe": 50,
        "weight": 28,
        "height": 0.8,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Battle Armor",
            "Steely Spirit",
            "Tough Claws"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 863,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cursola",
        "hp": 60,
        "atk": 95,
        "def": 50,
        "spa": 145,
        "spd": 130,
        "spe": 30,
        "weight": 0.4,
        "height": 1,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Perish Body",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 864,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Sirfetch'd",
        "hp": 62,
        "atk": 135,
        "def": 95,
        "spa": 68,
        "spd": 82,
        "spe": 65,
        "weight": 117,
        "height": 0.8,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Scrappy",
            "Steadfast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 865,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Mr. Rime",
        "hp": 80,
        "atk": 85,
        "def": 75,
        "spa": 110,
        "spd": 100,
        "spe": 70,
        "weight": 58.2,
        "height": 1.5,
        "types": [
            "Ice",
            "Psychic"
        ],
        "abilities": [
            "Ice Body",
            "Screen Cleaner",
            "Tangled Feet"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 866,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Runerigus",
        "hp": 58,
        "atk": 95,
        "def": 145,
        "spa": 50,
        "spd": 105,
        "spe": 30,
        "weight": 66.6,
        "height": 1.6,
        "types": [
            "Ground",
            "Ghost"
        ],
        "abilities": [
            "Wandering Spirit"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 867,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Milcery",
        "hp": 45,
        "atk": 40,
        "def": 40,
        "spa": 50,
        "spd": 61,
        "spe": 34,
        "weight": 0.3,
        "height": 0.2,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Aroma Veil",
            "Sweet Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 868,
            "evos": [
                "Alcremie"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Alcremie",
        "hp": 65,
        "atk": 60,
        "def": 75,
        "spa": 110,
        "spd": 121,
        "spe": 64,
        "weight": 0.5,
        "height": 0.3,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Aroma Veil",
            "Sweet Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 869,
            "evos": [],
            "alts": [
                "Alcremie-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Falinks",
        "hp": 65,
        "atk": 100,
        "def": 100,
        "spa": 70,
        "spd": 60,
        "spe": 75,
        "weight": 62,
        "height": 3,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Battle Armor",
            "Defiant"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 870,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Pincurchin",
        "hp": 48,
        "atk": 101,
        "def": 95,
        "spa": 91,
        "spd": 85,
        "spe": 15,
        "weight": 1,
        "height": 0.3,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Electric Surge",
            "Lightning Rod"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 871,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Snom",
        "hp": 30,
        "atk": 25,
        "def": 35,
        "spa": 45,
        "spd": 30,
        "spe": 20,
        "weight": 3.8,
        "height": 0.3,
        "types": [
            "Ice",
            "Bug"
        ],
        "abilities": [
            "Ice Scales",
            "Shield Dust"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 872,
            "evos": [
                "Frosmoth"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Frosmoth",
        "hp": 70,
        "atk": 65,
        "def": 60,
        "spa": 125,
        "spd": 90,
        "spe": 65,
        "weight": 42,
        "height": 1.3,
        "types": [
            "Ice",
            "Bug"
        ],
        "abilities": [
            "Ice Scales",
            "Shield Dust"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 873,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Stonjourner",
        "hp": 100,
        "atk": 125,
        "def": 135,
        "spa": 20,
        "spd": 20,
        "spe": 70,
        "weight": 520,
        "height": 2.5,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Power Spot"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 874,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Eiscue",
        "hp": 75,
        "atk": 80,
        "def": 110,
        "spa": 65,
        "spd": 90,
        "spe": 50,
        "weight": 89,
        "height": 1.4,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Face"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 875,
            "evos": [],
            "alts": [
                "Eiscue-Noice"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Indeedee",
        "hp": 60,
        "atk": 65,
        "def": 55,
        "spa": 105,
        "spd": 95,
        "spe": 95,
        "weight": 28,
        "height": 0.9,
        "types": [
            "Psychic",
            "Normal"
        ],
        "abilities": [
            "Inner Focus",
            "Psychic Surge",
            "Synchronize"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 876,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Indeedee-F",
        "hp": 70,
        "atk": 55,
        "def": 65,
        "spa": 95,
        "spd": 105,
        "spe": 85,
        "weight": 28,
        "height": 0.9,
        "types": [
            "Psychic",
            "Normal"
        ],
        "abilities": [
            "Own Tempo",
            "Psychic Surge",
            "Synchronize"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 876,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Morpeko",
        "hp": 58,
        "atk": 95,
        "def": 58,
        "spa": 70,
        "spd": 58,
        "spe": 97,
        "weight": 3,
        "height": 0.3,
        "types": [
            "Electric",
            "Dark"
        ],
        "abilities": [
            "Hunger Switch"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 877,
            "evos": [],
            "alts": [
                "Morpeko-Hangry"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Cufant",
        "hp": 72,
        "atk": 80,
        "def": 49,
        "spa": 40,
        "spd": 49,
        "spe": 40,
        "weight": 100,
        "height": 1.2,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Heavy Metal",
            "Sheer Force"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 878,
            "evos": [
                "Copperajah"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Copperajah",
        "hp": 122,
        "atk": 130,
        "def": 69,
        "spa": 80,
        "spd": 69,
        "spe": 30,
        "weight": 650,
        "height": 3,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Heavy Metal",
            "Sheer Force"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 879,
            "evos": [],
            "alts": [
                "Copperajah-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dracozolt",
        "hp": 90,
        "atk": 100,
        "def": 90,
        "spa": 80,
        "spd": 70,
        "spe": 75,
        "weight": 190,
        "height": 1.8,
        "types": [
            "Electric",
            "Dragon"
        ],
        "abilities": [
            "Hustle",
            "Sand Rush",
            "Volt Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 880,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arctozolt",
        "hp": 90,
        "atk": 100,
        "def": 90,
        "spa": 90,
        "spd": 80,
        "spe": 55,
        "weight": 150,
        "height": 2.3,
        "types": [
            "Electric",
            "Ice"
        ],
        "abilities": [
            "Slush Rush",
            "Static",
            "Volt Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 881,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dracovish",
        "hp": 90,
        "atk": 90,
        "def": 100,
        "spa": 70,
        "spd": 80,
        "spe": 75,
        "weight": 215,
        "height": 2.3,
        "types": [
            "Water",
            "Dragon"
        ],
        "abilities": [
            "Sand Rush",
            "Strong Jaw",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 882,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Arctovish",
        "hp": 90,
        "atk": 90,
        "def": 100,
        "spa": 80,
        "spd": 90,
        "spe": 55,
        "weight": 175,
        "height": 2,
        "types": [
            "Water",
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Slush Rush",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 883,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Duraludon",
        "hp": 70,
        "atk": 95,
        "def": 115,
        "spa": 120,
        "spd": 50,
        "spe": 85,
        "weight": 40,
        "height": 1.8,
        "types": [
            "Steel",
            "Dragon"
        ],
        "abilities": [
            "Heavy Metal",
            "Light Metal",
            "Stalwart"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 884,
            "evos": [],
            "alts": [
                "Duraludon-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dreepy",
        "hp": 28,
        "atk": 60,
        "def": 30,
        "spa": 40,
        "spd": 30,
        "spe": 82,
        "weight": 2,
        "height": 0.5,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "abilities": [
            "Clear Body",
            "Cursed Body",
            "Infiltrator"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 885,
            "evos": [
                "Drakloak"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Drakloak",
        "hp": 68,
        "atk": 80,
        "def": 50,
        "spa": 60,
        "spd": 50,
        "spe": 102,
        "weight": 11,
        "height": 1.4,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "abilities": [
            "Clear Body",
            "Cursed Body",
            "Infiltrator"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 886,
            "evos": [
                "Dragapult"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Dragapult",
        "hp": 88,
        "atk": 120,
        "def": 75,
        "spa": 100,
        "spd": 75,
        "spe": 142,
        "weight": 50,
        "height": 3,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "abilities": [
            "Clear Body",
            "Cursed Body",
            "Infiltrator"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 887,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Eternatus",
        "hp": 140,
        "atk": 85,
        "def": 95,
        "spa": 145,
        "spd": 95,
        "spe": 130,
        "weight": 950,
        "height": 20,
        "types": [
            "Poison",
            "Dragon"
        ],
        "abilities": [
            "Pressure"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 890,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Urshifu",
        "hp": 100,
        "atk": 130,
        "def": 100,
        "spa": 63,
        "spd": 60,
        "spe": 97,
        "weight": 105,
        "height": 1.9,
        "types": [
            "Fighting",
            "Dark"
        ],
        "abilities": [
            "Unseen Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 892,
            "evos": [],
            "alts": [
                "Urshifu-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Urshifu-Rapid-Strike",
        "hp": 100,
        "atk": 130,
        "def": 100,
        "spa": 63,
        "spd": 60,
        "spe": 97,
        "weight": 105,
        "height": 1.9,
        "types": [
            "Fighting",
            "Water"
        ],
        "abilities": [
            "Unseen Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 892,
            "evos": [],
            "alts": [
                "Urshifu-Rapid-Strike-Gmax"
            ],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zarude",
        "hp": 105,
        "atk": 120,
        "def": 105,
        "spa": 70,
        "spd": 95,
        "spe": 105,
        "weight": 70,
        "height": 1.8,
        "types": [
            "Dark",
            "Grass"
        ],
        "abilities": [
            "Leaf Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 893,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Zarude-Dada",
        "hp": 105,
        "atk": 120,
        "def": 105,
        "spa": 70,
        "spd": 95,
        "spe": 105,
        "weight": 70,
        "height": 1.8,
        "types": [
            "Dark",
            "Grass"
        ],
        "abilities": [
            "Leaf Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 893,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Regieleki",
        "hp": 80,
        "atk": 100,
        "def": 50,
        "spa": 100,
        "spd": 50,
        "spe": 200,
        "weight": 145,
        "height": 1.2,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Transistor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 894,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Regidrago",
        "hp": 200,
        "atk": 100,
        "def": 50,
        "spa": 100,
        "spd": 50,
        "spe": 80,
        "weight": 200,
        "height": 2.1,
        "types": [
            "Dragon"
        ],
        "abilities": [
            "Dragon's Maw"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 895,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Glastrier",
        "hp": 100,
        "atk": 145,
        "def": 130,
        "spa": 65,
        "spd": 110,
        "spe": 30,
        "weight": 800,
        "height": 2.2,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Chilling Neigh"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 896,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Spectrier",
        "hp": 100,
        "atk": 65,
        "def": 60,
        "spa": 145,
        "spd": 80,
        "spe": 130,
        "weight": 44.5,
        "height": 2,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Grim Neigh"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 897,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Calyrex",
        "hp": 100,
        "atk": 80,
        "def": 80,
        "spa": 80,
        "spd": 80,
        "spe": 80,
        "weight": 7.7,
        "height": 1.1,
        "types": [
            "Psychic",
            "Grass"
        ],
        "abilities": [
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 898,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Calyrex-Ice",
        "hp": 100,
        "atk": 165,
        "def": 150,
        "spa": 85,
        "spd": 130,
        "spe": 50,
        "weight": 809.1,
        "height": 2.4,
        "types": [
            "Psychic",
            "Ice"
        ],
        "abilities": [
            "As One (Glastrier)"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 898,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Calyrex-Shadow",
        "hp": 100,
        "atk": 85,
        "def": 80,
        "spa": 165,
        "spd": 100,
        "spe": 150,
        "weight": 53.6,
        "height": 2.4,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "abilities": [
            "As One (Spectrier)"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 898,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Wyrdeer",
        "hp": 103,
        "atk": 105,
        "def": 72,
        "spa": 105,
        "spd": 75,
        "spe": 65,
        "weight": 95.1,
        "height": 1.8,
        "types": [
            "Normal",
            "Psychic"
        ],
        "abilities": [
            "Frisk",
            "Intimidate",
            "Sap Sipper"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 899,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Ursaluna",
        "hp": 130,
        "atk": 140,
        "def": 105,
        "spa": 45,
        "spd": 80,
        "spe": 50,
        "weight": 290,
        "height": 2.4,
        "types": [
            "Ground",
            "Normal"
        ],
        "abilities": [
            "Bulletproof",
            "Guts",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 901,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Overqwil",
        "hp": 85,
        "atk": 115,
        "def": 95,
        "spa": 65,
        "spd": 65,
        "spe": 85,
        "weight": 3.9,
        "height": 0.5,
        "types": [
            "Dark",
            "Poison"
        ],
        "abilities": [
            "Intimidate",
            "Poison Point",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 904,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Enamorus-Therian",
        "hp": 74,
        "atk": 115,
        "def": 110,
        "spa": 135,
        "spd": 100,
        "spe": 46,
        "weight": 48,
        "height": 1.6,
        "types": [
            "Fairy",
            "Flying"
        ],
        "abilities": [
            "Overcoat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": {
            "dex_number": 905,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Solotl",
        "hp": 68,
        "atk": 48,
        "def": 34,
        "spa": 72,
        "spd": 24,
        "spe": 84,
        "weight": 11.8,
        "height": 0.6,
        "types": [
            "Fire",
            "Dragon"
        ],
        "abilities": [
            "Magician",
            "Regenerator",
            "Vital Spirit"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -56,
            "evos": [
                "Astrolotl"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Astrolotl",
        "hp": 108,
        "atk": 108,
        "def": 74,
        "spa": 92,
        "spd": 64,
        "spe": 114,
        "weight": 50,
        "height": 1.9,
        "types": [
            "Fire",
            "Dragon"
        ],
        "abilities": [
            "Magician",
            "Regenerator",
            "Vital Spirit"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -57,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Miasmite",
        "hp": 40,
        "atk": 85,
        "def": 60,
        "spa": 52,
        "spd": 52,
        "spe": 44,
        "weight": 10.1,
        "height": 0.6,
        "types": [
            "Bug",
            "Dragon"
        ],
        "abilities": [
            "Compound Eyes",
            "Hyper Cutter",
            "Neutralizing Gas"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -58,
            "evos": [
                "Miasmaw"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Miasmaw",
        "hp": 85,
        "atk": 135,
        "def": 60,
        "spa": 88,
        "spd": 105,
        "spe": 99,
        "weight": 57,
        "height": 1.2,
        "types": [
            "Bug",
            "Dragon"
        ],
        "abilities": [
            "Compound Eyes",
            "Hyper Cutter",
            "Neutralizing Gas"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -59,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Chromera",
        "hp": 85,
        "atk": 85,
        "def": 115,
        "spa": 115,
        "spd": 100,
        "spe": 100,
        "weight": 215,
        "height": 2.5,
        "types": [
            "Dark",
            "Normal"
        ],
        "abilities": [
            "Color Change"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -60,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Venomicon",
        "hp": 85,
        "atk": 50,
        "def": 113,
        "spa": 118,
        "spd": 90,
        "spe": 64,
        "weight": 11.5,
        "height": 0.8,
        "types": [
            "Poison",
            "Flying"
        ],
        "abilities": [
            "Power of Alchemy",
            "Stamina"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -66,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Venomicon-Epilogue",
        "hp": 85,
        "atk": 102,
        "def": 85,
        "spa": 62,
        "spd": 85,
        "spe": 101,
        "weight": 12.4,
        "height": 0.8,
        "types": [
            "Poison",
            "Flying"
        ],
        "abilities": [
            "Tinted Lens"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -66,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Saharascal",
        "hp": 50,
        "atk": 80,
        "def": 65,
        "spa": 45,
        "spd": 90,
        "spe": 70,
        "weight": 48,
        "height": 1.2,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Pickpocket",
            "Sand Spit",
            "Water Absorb"
        ],
        "formats": [],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -67,
            "evos": [
                "Saharaja"
            ],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Saharaja",
        "hp": 70,
        "atk": 112,
        "def": 105,
        "spa": 65,
        "spd": 123,
        "spe": 78,
        "weight": 303.9,
        "height": 2.3,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Spit",
            "Serene Grace",
            "Water Absorb"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": {
            "dex_number": -68,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SS",
                "SV"
            ]
        }
    },
    {
        "name": "Tauros-Paldea",
        "hp": 75,
        "atk": 110,
        "def": 105,
        "spa": 30,
        "spd": 70,
        "spe": 100,
        "weight": 88.4,
        "height": 1.4,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Anger Point",
            "Cud Chew",
            "Intimidate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 128,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tauros-Paldea-Fire",
        "hp": 75,
        "atk": 110,
        "def": 105,
        "spa": 30,
        "spd": 70,
        "spe": 100,
        "weight": 88.4,
        "height": 1.4,
        "types": [
            "Fighting",
            "Fire"
        ],
        "abilities": [
            "Anger Point",
            "Cud Chew",
            "Intimidate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 128,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tauros-Paldea-Water",
        "hp": 75,
        "atk": 110,
        "def": 105,
        "spa": 30,
        "spd": 70,
        "spe": 100,
        "weight": 88.4,
        "height": 1.4,
        "types": [
            "Fighting",
            "Water"
        ],
        "abilities": [
            "Anger Point",
            "Cud Chew",
            "Intimidate"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 128,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Wooper-Paldea",
        "hp": 55,
        "atk": 45,
        "def": 45,
        "spa": 25,
        "spd": 25,
        "spe": 15,
        "weight": 8.5,
        "height": 0.4,
        "types": [
            "Poison",
            "Ground"
        ],
        "abilities": [
            "Poison Point",
            "Unaware",
            "Water Absorb"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 194,
            "evos": [
                "Clodsire"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Sprigatito",
        "hp": 40,
        "atk": 61,
        "def": 54,
        "spa": 45,
        "spd": 45,
        "spe": 65,
        "weight": 4.1,
        "height": 0.4,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Overgrow",
            "Protean"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 906,
            "evos": [
                "Floragato"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Floragato",
        "hp": 61,
        "atk": 80,
        "def": 63,
        "spa": 60,
        "spd": 63,
        "spe": 83,
        "weight": 12.2,
        "height": 0.9,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Overgrow",
            "Protean"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 907,
            "evos": [
                "Meowscarada"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Meowscarada",
        "hp": 76,
        "atk": 110,
        "def": 70,
        "spa": 81,
        "spd": 70,
        "spe": 123,
        "weight": 31.2,
        "height": 1.5,
        "types": [
            "Grass",
            "Dark"
        ],
        "abilities": [
            "Overgrow",
            "Protean"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 908,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Fuecoco",
        "hp": 67,
        "atk": 45,
        "def": 59,
        "spa": 63,
        "spd": 40,
        "spe": 36,
        "weight": 9.8,
        "height": 0.4,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Unaware"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 909,
            "evos": [
                "Crocalor"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Crocalor",
        "hp": 81,
        "atk": 55,
        "def": 78,
        "spa": 90,
        "spd": 58,
        "spe": 49,
        "weight": 30.7,
        "height": 1,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Unaware"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 910,
            "evos": [
                "Skeledirge"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Skeledirge",
        "hp": 104,
        "atk": 75,
        "def": 100,
        "spa": 110,
        "spd": 75,
        "spe": 66,
        "weight": 326.5,
        "height": 1.6,
        "types": [
            "Fire",
            "Ghost"
        ],
        "abilities": [
            "Blaze",
            "Unaware"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 911,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Quaxly",
        "hp": 55,
        "atk": 65,
        "def": 45,
        "spa": 50,
        "spd": 45,
        "spe": 50,
        "weight": 6.1,
        "height": 0.5,
        "types": [
            "Water"
        ],
        "abilities": [
            "Moxie",
            "Torrent"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 912,
            "evos": [
                "Quaxwell"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Quaxwell",
        "hp": 70,
        "atk": 85,
        "def": 65,
        "spa": 65,
        "spd": 60,
        "spe": 65,
        "weight": 21.5,
        "height": 1.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Moxie",
            "Torrent"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 913,
            "evos": [
                "Quaquaval"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Quaquaval",
        "hp": 85,
        "atk": 120,
        "def": 80,
        "spa": 85,
        "spd": 75,
        "spe": 85,
        "weight": 61.9,
        "height": 1.8,
        "types": [
            "Water",
            "Fighting"
        ],
        "abilities": [
            "Moxie",
            "Torrent"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 914,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Lechonk",
        "hp": 54,
        "atk": 45,
        "def": 40,
        "spa": 35,
        "spd": 45,
        "spe": 35,
        "weight": 10.2,
        "height": 0.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Aroma Veil",
            "Gluttony",
            "Thick Fat"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 915,
            "evos": [
                "Oinkologne",
                "Oinkologne-F"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Oinkologne",
        "hp": 110,
        "atk": 100,
        "def": 75,
        "spa": 59,
        "spd": 80,
        "spe": 65,
        "weight": 120,
        "height": 1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Lingering Aroma",
            "Thick Fat"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 916,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Oinkologne-F",
        "hp": 115,
        "atk": 90,
        "def": 70,
        "spa": 59,
        "spd": 90,
        "spe": 65,
        "weight": 120,
        "height": 1,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Aroma Veil",
            "Gluttony",
            "Thick Fat"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 916,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tarountula",
        "hp": 35,
        "atk": 41,
        "def": 45,
        "spa": 29,
        "spd": 40,
        "spe": 20,
        "weight": 4,
        "height": 0.3,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Insomnia",
            "Stakeout"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 917,
            "evos": [
                "Spidops"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Spidops",
        "hp": 60,
        "atk": 79,
        "def": 92,
        "spa": 52,
        "spd": 86,
        "spe": 35,
        "weight": 16.5,
        "height": 1,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Insomnia",
            "Stakeout"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 918,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Nymble",
        "hp": 33,
        "atk": 46,
        "def": 40,
        "spa": 21,
        "spd": 25,
        "spe": 45,
        "weight": 1,
        "height": 0.2,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Swarm",
            "Tinted Lens"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 919,
            "evos": [
                "Lokix"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Lokix",
        "hp": 71,
        "atk": 102,
        "def": 78,
        "spa": 52,
        "spd": 55,
        "spe": 92,
        "weight": 17.5,
        "height": 1,
        "types": [
            "Bug",
            "Dark"
        ],
        "abilities": [
            "Swarm",
            "Tinted Lens"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 920,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Pawmi",
        "hp": 45,
        "atk": 50,
        "def": 20,
        "spa": 40,
        "spd": 25,
        "spe": 60,
        "weight": 2.5,
        "height": 0.3,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Iron Fist",
            "Natural Cure",
            "Static"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 921,
            "evos": [
                "Pawmo"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Pawmo",
        "hp": 60,
        "atk": 75,
        "def": 40,
        "spa": 50,
        "spd": 40,
        "spe": 85,
        "weight": 6.5,
        "height": 0.4,
        "types": [
            "Electric",
            "Fighting"
        ],
        "abilities": [
            "Iron Fist",
            "Natural Cure",
            "Volt Absorb"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 922,
            "evos": [
                "Pawmot"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Pawmot",
        "hp": 70,
        "atk": 115,
        "def": 70,
        "spa": 70,
        "spd": 60,
        "spe": 105,
        "weight": 41,
        "height": 0.9,
        "types": [
            "Electric",
            "Fighting"
        ],
        "abilities": [
            "Iron Fist",
            "Natural Cure",
            "Volt Absorb"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 923,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tandemaus",
        "hp": 50,
        "atk": 50,
        "def": 45,
        "spa": 40,
        "spd": 45,
        "spe": 75,
        "weight": 1.8,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Own Tempo",
            "Pickup",
            "Run Away"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 924,
            "evos": [
                "Maushold",
                "Maushold-Four"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Maushold",
        "hp": 74,
        "atk": 75,
        "def": 70,
        "spa": 65,
        "spd": 75,
        "spe": 111,
        "weight": 2.3,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cheek Pouch",
            "Friend Guard",
            "Technician"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 925,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Maushold-Four",
        "hp": 74,
        "atk": 75,
        "def": 70,
        "spa": 65,
        "spd": 75,
        "spe": 111,
        "weight": 2.8,
        "height": 0.3,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Cheek Pouch",
            "Friend Guard",
            "Technician"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 925,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Fidough",
        "hp": 37,
        "atk": 55,
        "def": 70,
        "spa": 30,
        "spd": 55,
        "spe": 65,
        "weight": 10.9,
        "height": 0.3,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Klutz",
            "Own Tempo"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 926,
            "evos": [
                "Dachsbun"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Dachsbun",
        "hp": 57,
        "atk": 80,
        "def": 115,
        "spa": 50,
        "spd": 80,
        "spe": 95,
        "weight": 14.9,
        "height": 0.5,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Aroma Veil",
            "Well-Baked Body"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 927,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Smoliv",
        "hp": 41,
        "atk": 35,
        "def": 45,
        "spa": 58,
        "spd": 51,
        "spe": 30,
        "weight": 6.5,
        "height": 0.3,
        "types": [
            "Grass",
            "Normal"
        ],
        "abilities": [
            "Early Bird",
            "Harvest"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 928,
            "evos": [
                "Dolliv"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Dolliv",
        "hp": 52,
        "atk": 53,
        "def": 60,
        "spa": 78,
        "spd": 78,
        "spe": 33,
        "weight": 11.9,
        "height": 0.6,
        "types": [
            "Grass",
            "Normal"
        ],
        "abilities": [
            "Early Bird",
            "Harvest"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 929,
            "evos": [
                "Arboliva"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Arboliva",
        "hp": 78,
        "atk": 69,
        "def": 90,
        "spa": 125,
        "spd": 109,
        "spe": 39,
        "weight": 48.2,
        "height": 1.4,
        "types": [
            "Grass",
            "Normal"
        ],
        "abilities": [
            "Harvest",
            "Seed Sower"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 930,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Squawkabilly",
        "hp": 82,
        "atk": 96,
        "def": 51,
        "spa": 45,
        "spd": 51,
        "spe": 92,
        "weight": 2.4,
        "height": 0.6,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Guts",
            "Hustle",
            "Intimidate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 931,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Squawkabilly-Blue",
        "hp": 82,
        "atk": 96,
        "def": 51,
        "spa": 45,
        "spd": 51,
        "spe": 92,
        "weight": 2.4,
        "height": 0.6,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Guts",
            "Hustle",
            "Intimidate"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 931,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Squawkabilly-Yellow",
        "hp": 82,
        "atk": 96,
        "def": 51,
        "spa": 45,
        "spd": 51,
        "spe": 92,
        "weight": 2.4,
        "height": 0.6,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Hustle",
            "Intimidate",
            "Sheer Force"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 931,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Squawkabilly-White",
        "hp": 82,
        "atk": 96,
        "def": 51,
        "spa": 45,
        "spd": 51,
        "spe": 92,
        "weight": 2.4,
        "height": 0.6,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "Hustle",
            "Intimidate",
            "Sheer Force"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 931,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Nacli",
        "hp": 55,
        "atk": 55,
        "def": 75,
        "spa": 35,
        "spd": 35,
        "spe": 25,
        "weight": 16,
        "height": 0.4,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Clear Body",
            "Purifying Salt",
            "Sturdy"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 932,
            "evos": [
                "Naclstack"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Naclstack",
        "hp": 60,
        "atk": 60,
        "def": 100,
        "spa": 35,
        "spd": 65,
        "spe": 35,
        "weight": 105,
        "height": 0.5,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Clear Body",
            "Purifying Salt",
            "Sturdy"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 933,
            "evos": [
                "Garganacl"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Garganacl",
        "hp": 100,
        "atk": 100,
        "def": 130,
        "spa": 45,
        "spd": 90,
        "spe": 35,
        "weight": 240,
        "height": 2.5,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Clear Body",
            "Purifying Salt",
            "Sturdy"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 934,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Charcadet",
        "hp": 40,
        "atk": 50,
        "def": 40,
        "spa": 50,
        "spd": 40,
        "spe": 35,
        "weight": 10.5,
        "height": 0.6,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 935,
            "evos": [
                "Armarouge",
                "Ceruledge"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Armarouge",
        "hp": 85,
        "atk": 60,
        "def": 100,
        "spa": 125,
        "spd": 80,
        "spe": 75,
        "weight": 85,
        "height": 1.5,
        "types": [
            "Fire",
            "Psychic"
        ],
        "abilities": [
            "Flash Fire",
            "Weak Armor"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 936,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Ceruledge",
        "hp": 75,
        "atk": 125,
        "def": 80,
        "spa": 60,
        "spd": 100,
        "spe": 85,
        "weight": 62,
        "height": 1.6,
        "types": [
            "Fire",
            "Ghost"
        ],
        "abilities": [
            "Flash Fire",
            "Weak Armor"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 937,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tadbulb",
        "hp": 61,
        "atk": 31,
        "def": 41,
        "spa": 59,
        "spd": 35,
        "spe": 45,
        "weight": 0.4,
        "height": 0.3,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Damp",
            "Own Tempo",
            "Static"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 938,
            "evos": [
                "Bellibolt"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Bellibolt",
        "hp": 109,
        "atk": 64,
        "def": 91,
        "spa": 103,
        "spd": 83,
        "spe": 45,
        "weight": 113,
        "height": 1.2,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Damp",
            "Electromorphosis",
            "Static"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 939,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Wattrel",
        "hp": 40,
        "atk": 40,
        "def": 35,
        "spa": 55,
        "spd": 40,
        "spe": 70,
        "weight": 3.6,
        "height": 0.4,
        "types": [
            "Electric",
            "Flying"
        ],
        "abilities": [
            "Competitive",
            "Volt Absorb",
            "Wind Power"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 940,
            "evos": [
                "Kilowattrel"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Kilowattrel",
        "hp": 70,
        "atk": 70,
        "def": 60,
        "spa": 105,
        "spd": 60,
        "spe": 125,
        "weight": 38.6,
        "height": 1.4,
        "types": [
            "Electric",
            "Flying"
        ],
        "abilities": [
            "Competitive",
            "Volt Absorb",
            "Wind Power"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 941,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Maschiff",
        "hp": 60,
        "atk": 78,
        "def": 60,
        "spa": 40,
        "spd": 51,
        "spe": 51,
        "weight": 16,
        "height": 0.5,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Intimidate",
            "Run Away",
            "Stakeout"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 942,
            "evos": [
                "Mabosstiff"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Mabosstiff",
        "hp": 80,
        "atk": 120,
        "def": 90,
        "spa": 60,
        "spd": 70,
        "spe": 85,
        "weight": 61,
        "height": 1.1,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Guard Dog",
            "Intimidate",
            "Stakeout"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 943,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Shroodle",
        "hp": 40,
        "atk": 65,
        "def": 35,
        "spa": 40,
        "spd": 35,
        "spe": 75,
        "weight": 0.7,
        "height": 0.2,
        "types": [
            "Poison",
            "Normal"
        ],
        "abilities": [
            "Pickpocket",
            "Prankster",
            "Unburden"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 944,
            "evos": [
                "Grafaiai"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Grafaiai",
        "hp": 63,
        "atk": 95,
        "def": 65,
        "spa": 80,
        "spd": 72,
        "spe": 110,
        "weight": 27.2,
        "height": 0.7,
        "types": [
            "Poison",
            "Normal"
        ],
        "abilities": [
            "Poison Touch",
            "Prankster",
            "Unburden"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 945,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Bramblin",
        "hp": 40,
        "atk": 65,
        "def": 30,
        "spa": 45,
        "spd": 35,
        "spe": 60,
        "weight": 0.6,
        "height": 0.6,
        "types": [
            "Grass",
            "Ghost"
        ],
        "abilities": [
            "Infiltrator",
            "Wind Rider"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 946,
            "evos": [
                "Brambleghast"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Brambleghast",
        "hp": 55,
        "atk": 115,
        "def": 70,
        "spa": 80,
        "spd": 70,
        "spe": 90,
        "weight": 6,
        "height": 1.2,
        "types": [
            "Grass",
            "Ghost"
        ],
        "abilities": [
            "Infiltrator",
            "Wind Rider"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 947,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Toedscool",
        "hp": 40,
        "atk": 40,
        "def": 35,
        "spa": 50,
        "spd": 100,
        "spe": 70,
        "weight": 33,
        "height": 0.9,
        "types": [
            "Ground",
            "Grass"
        ],
        "abilities": [
            "Mycelium Might"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 948,
            "evos": [
                "Toedscruel"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Toedscruel",
        "hp": 80,
        "atk": 70,
        "def": 65,
        "spa": 80,
        "spd": 120,
        "spe": 100,
        "weight": 58,
        "height": 1.9,
        "types": [
            "Ground",
            "Grass"
        ],
        "abilities": [
            "Mycelium Might"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 949,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Klawf",
        "hp": 70,
        "atk": 100,
        "def": 115,
        "spa": 35,
        "spd": 55,
        "spe": 75,
        "weight": 79,
        "height": 1.3,
        "types": [
            "Rock"
        ],
        "abilities": [
            "Anger Shell",
            "Regenerator",
            "Shell Armor"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 950,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Capsakid",
        "hp": 52,
        "atk": 62,
        "def": 40,
        "spa": 62,
        "spd": 40,
        "spe": 50,
        "weight": 3,
        "height": 0.3,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Chlorophyll",
            "Insomnia",
            "Klutz"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 951,
            "evos": [
                "Scovillain"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Scovillain",
        "hp": 65,
        "atk": 108,
        "def": 65,
        "spa": 108,
        "spd": 65,
        "spe": 75,
        "weight": 15,
        "height": 0.9,
        "types": [
            "Grass",
            "Fire"
        ],
        "abilities": [
            "Chlorophyll",
            "Insomnia",
            "Moody"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 952,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Rellor",
        "hp": 41,
        "atk": 50,
        "def": 60,
        "spa": 31,
        "spd": 58,
        "spe": 30,
        "weight": 1,
        "height": 0.2,
        "types": [
            "Bug"
        ],
        "abilities": [
            "Compound Eyes",
            "Shed Skin"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 953,
            "evos": [
                "Rabsca"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Rabsca",
        "hp": 75,
        "atk": 50,
        "def": 85,
        "spa": 115,
        "spd": 100,
        "spe": 45,
        "weight": 3.5,
        "height": 0.3,
        "types": [
            "Bug",
            "Psychic"
        ],
        "abilities": [
            "Synchronize",
            "Telepathy"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 954,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Flittle",
        "hp": 30,
        "atk": 35,
        "def": 30,
        "spa": 55,
        "spd": 30,
        "spe": 75,
        "weight": 1.5,
        "height": 0.2,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Anticipation",
            "Frisk",
            "Speed Boost"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 955,
            "evos": [
                "Espathra"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Espathra",
        "hp": 95,
        "atk": 60,
        "def": 60,
        "spa": 101,
        "spd": 60,
        "spe": 105,
        "weight": 90,
        "height": 1.9,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Frisk",
            "Opportunist",
            "Speed Boost"
        ],
        "formats": [
            "UUBL"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 956,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tinkatink",
        "hp": 50,
        "atk": 45,
        "def": 45,
        "spa": 35,
        "spd": 64,
        "spe": 58,
        "weight": 8.9,
        "height": 0.4,
        "types": [
            "Fairy",
            "Steel"
        ],
        "abilities": [
            "Mold Breaker",
            "Own Tempo",
            "Pickpocket"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 957,
            "evos": [
                "Tinkatuff"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tinkatuff",
        "hp": 65,
        "atk": 55,
        "def": 55,
        "spa": 45,
        "spd": 82,
        "spe": 78,
        "weight": 59.1,
        "height": 0.7,
        "types": [
            "Fairy",
            "Steel"
        ],
        "abilities": [
            "Mold Breaker",
            "Own Tempo",
            "Pickpocket"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 958,
            "evos": [
                "Tinkaton"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tinkaton",
        "hp": 85,
        "atk": 75,
        "def": 77,
        "spa": 70,
        "spd": 105,
        "spe": 94,
        "weight": 112.8,
        "height": 0.7,
        "types": [
            "Fairy",
            "Steel"
        ],
        "abilities": [
            "Mold Breaker",
            "Own Tempo",
            "Pickpocket"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 959,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Wiglett",
        "hp": 10,
        "atk": 55,
        "def": 25,
        "spa": 35,
        "spd": 25,
        "spe": 95,
        "weight": 1.8,
        "height": 1.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Gooey",
            "Rattled",
            "Sand Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 960,
            "evos": [
                "Wugtrio"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Wugtrio",
        "hp": 35,
        "atk": 100,
        "def": 50,
        "spa": 50,
        "spd": 70,
        "spe": 120,
        "weight": 5.4,
        "height": 1.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Gooey",
            "Rattled",
            "Sand Veil"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 961,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Bombirdier",
        "hp": 70,
        "atk": 103,
        "def": 85,
        "spa": 60,
        "spd": 85,
        "spe": 82,
        "weight": 42.9,
        "height": 1.5,
        "types": [
            "Flying",
            "Dark"
        ],
        "abilities": [
            "Big Pecks",
            "Keen Eye",
            "Rocky Payload"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 962,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Finizen",
        "hp": 70,
        "atk": 45,
        "def": 40,
        "spa": 45,
        "spd": 40,
        "spe": 75,
        "weight": 60.2,
        "height": 1.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Water Veil"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 963,
            "evos": [
                "Palafin"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Palafin",
        "hp": 100,
        "atk": 70,
        "def": 72,
        "spa": 53,
        "spd": 62,
        "spe": 100,
        "weight": 60.2,
        "height": 1.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Zero to Hero"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 964,
            "evos": [],
            "alts": [
                "Palafin-Hero"
            ],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Varoom",
        "hp": 45,
        "atk": 70,
        "def": 63,
        "spa": 30,
        "spd": 45,
        "spe": 47,
        "weight": 35,
        "height": 1,
        "types": [
            "Steel",
            "Poison"
        ],
        "abilities": [
            "Overcoat",
            "Slow Start"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 965,
            "evos": [
                "Revavroom"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Revavroom",
        "hp": 80,
        "atk": 119,
        "def": 90,
        "spa": 54,
        "spd": 67,
        "spe": 90,
        "weight": 120,
        "height": 1.8,
        "types": [
            "Steel",
            "Poison"
        ],
        "abilities": [
            "Filter",
            "Overcoat"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 966,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Cyclizar",
        "hp": 70,
        "atk": 95,
        "def": 65,
        "spa": 85,
        "spd": 65,
        "spe": 121,
        "weight": 63,
        "height": 1.6,
        "types": [
            "Dragon",
            "Normal"
        ],
        "abilities": [
            "Regenerator",
            "Shed Skin"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 967,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Orthworm",
        "hp": 70,
        "atk": 85,
        "def": 145,
        "spa": 60,
        "spd": 55,
        "spe": 65,
        "weight": 310,
        "height": 2.5,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Earth Eater",
            "Sand Veil"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 968,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Glimmet",
        "hp": 48,
        "atk": 35,
        "def": 42,
        "spa": 105,
        "spd": 60,
        "spe": 60,
        "weight": 8,
        "height": 0.7,
        "types": [
            "Rock",
            "Poison"
        ],
        "abilities": [
            "Corrosion",
            "Toxic Debris"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 969,
            "evos": [
                "Glimmora"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Glimmora",
        "hp": 83,
        "atk": 55,
        "def": 90,
        "spa": 130,
        "spd": 81,
        "spe": 86,
        "weight": 45,
        "height": 1.5,
        "types": [
            "Rock",
            "Poison"
        ],
        "abilities": [
            "Corrosion",
            "Toxic Debris"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 970,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Greavard",
        "hp": 50,
        "atk": 61,
        "def": 60,
        "spa": 30,
        "spd": 55,
        "spe": 34,
        "weight": 35,
        "height": 0.6,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Fluffy",
            "Pickup"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 971,
            "evos": [
                "Houndstone"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Houndstone",
        "hp": 72,
        "atk": 101,
        "def": 100,
        "spa": 50,
        "spd": 97,
        "spe": 68,
        "weight": 15,
        "height": 2,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Fluffy",
            "Sand Rush"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 972,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Flamigo",
        "hp": 82,
        "atk": 115,
        "def": 74,
        "spa": 75,
        "spd": 64,
        "spe": 90,
        "weight": 37,
        "height": 1.6,
        "types": [
            "Flying",
            "Fighting"
        ],
        "abilities": [
            "Costar",
            "Scrappy",
            "Tangled Feet"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 973,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Cetoddle",
        "hp": 108,
        "atk": 68,
        "def": 45,
        "spa": 30,
        "spd": 40,
        "spe": 43,
        "weight": 45,
        "height": 1.2,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Sheer Force",
            "Snow Cloak",
            "Thick Fat"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 974,
            "evos": [
                "Cetitan"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Cetitan",
        "hp": 170,
        "atk": 113,
        "def": 65,
        "spa": 45,
        "spd": 55,
        "spe": 73,
        "weight": 700,
        "height": 4.5,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Sheer Force",
            "Slush Rush",
            "Thick Fat"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 975,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Veluza",
        "hp": 90,
        "atk": 102,
        "def": 73,
        "spa": 78,
        "spd": 65,
        "spe": 70,
        "weight": 90,
        "height": 2.5,
        "types": [
            "Water",
            "Psychic"
        ],
        "abilities": [
            "Mold Breaker",
            "Sharpness"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 976,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Dondozo",
        "hp": 150,
        "atk": 100,
        "def": 115,
        "spa": 65,
        "spd": 65,
        "spe": 35,
        "weight": 220,
        "height": 12,
        "types": [
            "Water"
        ],
        "abilities": [
            "Oblivious",
            "Unaware",
            "Water Veil"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 977,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Tatsugiri",
        "hp": 68,
        "atk": 50,
        "def": 60,
        "spa": 120,
        "spd": 95,
        "spe": 82,
        "weight": 8,
        "height": 0.3,
        "types": [
            "Dragon",
            "Water"
        ],
        "abilities": [
            "Commander",
            "Storm Drain"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 978,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Annihilape",
        "hp": 110,
        "atk": 115,
        "def": 80,
        "spa": 50,
        "spd": 90,
        "spe": 90,
        "weight": 56,
        "height": 1.2,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "abilities": [
            "Defiant",
            "Inner Focus",
            "Vital Spirit"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 979,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Clodsire",
        "hp": 130,
        "atk": 75,
        "def": 60,
        "spa": 45,
        "spd": 100,
        "spe": 20,
        "weight": 223,
        "height": 1.8,
        "types": [
            "Poison",
            "Ground"
        ],
        "abilities": [
            "Poison Point",
            "Unaware",
            "Water Absorb"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 980,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Farigiraf",
        "hp": 120,
        "atk": 90,
        "def": 70,
        "spa": 110,
        "spd": 70,
        "spe": 60,
        "weight": 160,
        "height": 3.2,
        "types": [
            "Normal",
            "Psychic"
        ],
        "abilities": [
            "Armor Tail",
            "Cud Chew",
            "Sap Sipper"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 981,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Dudunsparce",
        "hp": 125,
        "atk": 100,
        "def": 80,
        "spa": 85,
        "spd": 75,
        "spe": 55,
        "weight": 39.2,
        "height": 3.6,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Rattled",
            "Run Away",
            "Serene Grace"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 982,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Dudunsparce-Three-Segment",
        "hp": 125,
        "atk": 100,
        "def": 80,
        "spa": 85,
        "spd": 75,
        "spe": 55,
        "weight": 47.4,
        "height": 4.5,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Rattled",
            "Run Away",
            "Serene Grace"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 982,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Kingambit",
        "hp": 100,
        "atk": 135,
        "def": 120,
        "spa": 60,
        "spd": 85,
        "spe": 50,
        "weight": 120,
        "height": 2,
        "types": [
            "Dark",
            "Steel"
        ],
        "abilities": [
            "Defiant",
            "Pressure",
            "Supreme Overlord"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 983,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Great Tusk",
        "hp": 115,
        "atk": 131,
        "def": 131,
        "spa": 53,
        "spd": 53,
        "spe": 87,
        "weight": 320,
        "height": 2.2,
        "types": [
            "Ground",
            "Fighting"
        ],
        "abilities": [
            "Protosynthesis"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 984,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Scream Tail",
        "hp": 115,
        "atk": 65,
        "def": 99,
        "spa": 65,
        "spd": 115,
        "spe": 111,
        "weight": 8,
        "height": 1.2,
        "types": [
            "Fairy",
            "Psychic"
        ],
        "abilities": [
            "Protosynthesis"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 985,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Brute Bonnet",
        "hp": 111,
        "atk": 127,
        "def": 99,
        "spa": 79,
        "spd": 99,
        "spe": 55,
        "weight": 21,
        "height": 1.2,
        "types": [
            "Grass",
            "Dark"
        ],
        "abilities": [
            "Protosynthesis"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 986,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Flutter Mane",
        "hp": 55,
        "atk": 55,
        "def": 55,
        "spa": 135,
        "spd": 135,
        "spe": 135,
        "weight": 4,
        "height": 1.4,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "abilities": [
            "Protosynthesis"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 987,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Slither Wing",
        "hp": 85,
        "atk": 135,
        "def": 79,
        "spa": 85,
        "spd": 105,
        "spe": 81,
        "weight": 92,
        "height": 3.2,
        "types": [
            "Bug",
            "Fighting"
        ],
        "abilities": [
            "Protosynthesis"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 988,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Sandy Shocks",
        "hp": 85,
        "atk": 81,
        "def": 97,
        "spa": 121,
        "spd": 85,
        "spe": 101,
        "weight": 60,
        "height": 2.3,
        "types": [
            "Electric",
            "Ground"
        ],
        "abilities": [
            "Protosynthesis"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 989,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Iron Treads",
        "hp": 90,
        "atk": 112,
        "def": 120,
        "spa": 72,
        "spd": 70,
        "spe": 106,
        "weight": 240,
        "height": 0.9,
        "types": [
            "Ground",
            "Steel"
        ],
        "abilities": [
            "Quark Drive"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 990,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Iron Bundle",
        "hp": 56,
        "atk": 80,
        "def": 114,
        "spa": 124,
        "spd": 60,
        "spe": 136,
        "weight": 11,
        "height": 0.6,
        "types": [
            "Ice",
            "Water"
        ],
        "abilities": [
            "Quark Drive"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 991,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Iron Hands",
        "hp": 154,
        "atk": 140,
        "def": 108,
        "spa": 50,
        "spd": 68,
        "spe": 50,
        "weight": 380.7,
        "height": 1.8,
        "types": [
            "Fighting",
            "Electric"
        ],
        "abilities": [
            "Quark Drive"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 992,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Iron Jugulis",
        "hp": 94,
        "atk": 80,
        "def": 86,
        "spa": 122,
        "spd": 80,
        "spe": 108,
        "weight": 111,
        "height": 1.3,
        "types": [
            "Dark",
            "Flying"
        ],
        "abilities": [
            "Quark Drive"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 993,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Iron Moth",
        "hp": 80,
        "atk": 70,
        "def": 60,
        "spa": 140,
        "spd": 110,
        "spe": 110,
        "weight": 36,
        "height": 1.2,
        "types": [
            "Fire",
            "Poison"
        ],
        "abilities": [
            "Quark Drive"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 994,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Iron Thorns",
        "hp": 100,
        "atk": 134,
        "def": 110,
        "spa": 70,
        "spd": 84,
        "spe": 72,
        "weight": 303,
        "height": 1.6,
        "types": [
            "Rock",
            "Electric"
        ],
        "abilities": [
            "Quark Drive"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 995,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Frigibax",
        "hp": 65,
        "atk": 75,
        "def": 45,
        "spa": 35,
        "spd": 45,
        "spe": 55,
        "weight": 17,
        "height": 0.5,
        "types": [
            "Dragon",
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Thermal Exchange"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 996,
            "evos": [
                "Arctibax"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Arctibax",
        "hp": 90,
        "atk": 95,
        "def": 66,
        "spa": 45,
        "spd": 65,
        "spe": 62,
        "weight": 30,
        "height": 0.8,
        "types": [
            "Dragon",
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Thermal Exchange"
        ],
        "formats": [
            "NFE"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 997,
            "evos": [
                "Baxcalibur"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Baxcalibur",
        "hp": 115,
        "atk": 145,
        "def": 92,
        "spa": 75,
        "spd": 86,
        "spe": 87,
        "weight": 210,
        "height": 2.1,
        "types": [
            "Dragon",
            "Ice"
        ],
        "abilities": [
            "Ice Body",
            "Thermal Exchange"
        ],
        "formats": [
            "UUBL"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 998,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Gimmighoul",
        "hp": 45,
        "atk": 30,
        "def": 70,
        "spa": 75,
        "spd": 70,
        "spe": 10,
        "weight": 5,
        "height": 0.3,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Rattled"
        ],
        "formats": [
            "LC"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 999,
            "evos": [
                "Gholdengo"
            ],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Gholdengo",
        "hp": 87,
        "atk": 60,
        "def": 95,
        "spa": 133,
        "spd": 91,
        "spe": 84,
        "weight": 30,
        "height": 1.2,
        "types": [
            "Steel",
            "Ghost"
        ],
        "abilities": [
            "Good as Gold"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1000,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Wo-Chien",
        "hp": 85,
        "atk": 85,
        "def": 100,
        "spa": 95,
        "spd": 135,
        "spe": 70,
        "weight": 74.2,
        "height": 1.5,
        "types": [
            "Dark",
            "Grass"
        ],
        "abilities": [
            "Tablets of Ruin"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1001,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Chien-Pao",
        "hp": 80,
        "atk": 120,
        "def": 80,
        "spa": 90,
        "spd": 65,
        "spe": 135,
        "weight": 152.2,
        "height": 1.9,
        "types": [
            "Dark",
            "Ice"
        ],
        "abilities": [
            "Sword of Ruin"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1002,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Ting-Lu",
        "hp": 155,
        "atk": 110,
        "def": 125,
        "spa": 55,
        "spd": 80,
        "spe": 45,
        "weight": 699.7,
        "height": 2.7,
        "types": [
            "Dark",
            "Ground"
        ],
        "abilities": [
            "Vessel of Ruin"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1003,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Chi-Yu",
        "hp": 55,
        "atk": 80,
        "def": 80,
        "spa": 135,
        "spd": 120,
        "spe": 100,
        "weight": 4.9,
        "height": 0.4,
        "types": [
            "Dark",
            "Fire"
        ],
        "abilities": [
            "Beads of Ruin"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1004,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Roaring Moon",
        "hp": 105,
        "atk": 139,
        "def": 71,
        "spa": 55,
        "spd": 101,
        "spe": 119,
        "weight": 380,
        "height": 2,
        "types": [
            "Dragon",
            "Dark"
        ],
        "abilities": [
            "Protosynthesis"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1005,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Iron Valiant",
        "hp": 74,
        "atk": 130,
        "def": 90,
        "spa": 120,
        "spd": 60,
        "spe": 116,
        "weight": 35,
        "height": 1.4,
        "types": [
            "Fairy",
            "Fighting"
        ],
        "abilities": [
            "Quark Drive"
        ],
        "formats": [
            "OU"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1006,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Koraidon",
        "hp": 100,
        "atk": 135,
        "def": 115,
        "spa": 85,
        "spd": 100,
        "spe": 135,
        "weight": 303,
        "height": 2.5,
        "types": [
            "Fighting",
            "Dragon"
        ],
        "abilities": [
            "Orichalcum Pulse"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1007,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Miraidon",
        "hp": 100,
        "atk": 85,
        "def": 100,
        "spa": 135,
        "spd": 115,
        "spe": 135,
        "weight": 240,
        "height": 3.5,
        "types": [
            "Electric",
            "Dragon"
        ],
        "abilities": [
            "Hadron Engine"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": {
            "dex_number": 1008,
            "evos": [],
            "alts": [],
            "genfamily": [
                "SV"
            ]
        }
    },
    {
        "name": "Venusaur-Mega",
        "hp": 80,
        "atk": 100,
        "def": 123,
        "spa": 122,
        "spd": 120,
        "spe": 80,
        "weight": 155.5,
        "height": 2.4,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Diancie-Mega",
        "hp": 50,
        "atk": 160,
        "def": 110,
        "spa": 160,
        "spd": 110,
        "spe": 110,
        "weight": 27.8,
        "height": 1.1,
        "types": [
            "Rock",
            "Fairy"
        ],
        "abilities": [
            "Magic Bounce"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Eiscue-Noice",
        "hp": 75,
        "atk": 80,
        "def": 70,
        "spa": 65,
        "spd": 50,
        "spe": 130,
        "weight": 89,
        "height": 1.4,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Ice Face"
        ],
        "formats": [
            "RU"
        ],
        "isNonstandard": "Standard",
        "oob": null
    },
    {
        "name": "Orbeetle-Gmax",
        "hp": 60,
        "atk": 45,
        "def": 110,
        "spa": 80,
        "spd": 120,
        "spe": 90,
        "weight": 0,
        "height": 14,
        "types": [
            "Bug",
            "Psychic"
        ],
        "abilities": [
            "Frisk",
            "Swarm",
            "Telepathy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Coalossal-Gmax",
        "hp": 110,
        "atk": 80,
        "def": 120,
        "spa": 80,
        "spd": 90,
        "spe": 30,
        "weight": 0,
        "height": 42,
        "types": [
            "Rock",
            "Fire"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "Steam Engine"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Morpeko-Hangry",
        "hp": 58,
        "atk": 95,
        "def": 58,
        "spa": 70,
        "spd": 58,
        "spe": 97,
        "weight": 3,
        "height": 0.3,
        "types": [
            "Electric",
            "Dark"
        ],
        "abilities": [
            "Hunger Switch"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Rayquaza-Mega",
        "hp": 105,
        "atk": 180,
        "def": 100,
        "spa": 180,
        "spd": 100,
        "spe": 115,
        "weight": 392,
        "height": 10.8,
        "types": [
            "Dragon",
            "Flying"
        ],
        "abilities": [
            "Delta Stream"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Gardevoir-Mega",
        "hp": 68,
        "atk": 85,
        "def": 65,
        "spa": 165,
        "spd": 135,
        "spe": 100,
        "weight": 48.4,
        "height": 1.6,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Pixilate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Darmanitan-Galar-Zen",
        "hp": 105,
        "atk": 160,
        "def": 55,
        "spa": 30,
        "spd": 55,
        "spe": 135,
        "weight": 120,
        "height": 1.7,
        "types": [
            "Ice",
            "Fire"
        ],
        "abilities": [
            "Zen Mode"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Lapras-Gmax",
        "hp": 130,
        "atk": 85,
        "def": 80,
        "spa": 85,
        "spd": 95,
        "spe": 60,
        "weight": 0,
        "height": 24,
        "types": [
            "Water",
            "Ice"
        ],
        "abilities": [
            "Hydration",
            "Shell Armor",
            "Water Absorb"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Charizard-Gmax",
        "hp": 78,
        "atk": 84,
        "def": 78,
        "spa": 109,
        "spd": 85,
        "spe": 100,
        "weight": 0,
        "height": 28,
        "types": [
            "Fire",
            "Flying"
        ],
        "abilities": [
            "Blaze",
            "Solar Power"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Sandaconda-Gmax",
        "hp": 72,
        "atk": 107,
        "def": 125,
        "spa": 65,
        "spd": 70,
        "spe": 71,
        "weight": 0,
        "height": 22,
        "types": [
            "Ground"
        ],
        "abilities": [
            "Sand Spit",
            "Sand Veil",
            "Shed Skin"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Metagross-Mega",
        "hp": 80,
        "atk": 145,
        "def": 150,
        "spa": 105,
        "spd": 110,
        "spe": 110,
        "weight": 942.9,
        "height": 2.5,
        "types": [
            "Steel",
            "Psychic"
        ],
        "abilities": [
            "Tough Claws"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Gyarados-Mega",
        "hp": 95,
        "atk": 155,
        "def": 109,
        "spa": 70,
        "spd": 130,
        "spe": 81,
        "weight": 305,
        "height": 6.5,
        "types": [
            "Water",
            "Dark"
        ],
        "abilities": [
            "Mold Breaker"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Scizor-Mega",
        "hp": 70,
        "atk": 150,
        "def": 140,
        "spa": 65,
        "spd": 100,
        "spe": 75,
        "weight": 125,
        "height": 2,
        "types": [
            "Bug",
            "Steel"
        ],
        "abilities": [
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Beedrill-Mega",
        "hp": 65,
        "atk": 150,
        "def": 40,
        "spa": 15,
        "spd": 80,
        "spe": 145,
        "weight": 40.5,
        "height": 1.4,
        "types": [
            "Bug",
            "Poison"
        ],
        "abilities": [
            "Adaptability"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Ampharos-Mega",
        "hp": 90,
        "atk": 95,
        "def": 105,
        "spa": 165,
        "spd": 110,
        "spe": 45,
        "weight": 61.5,
        "height": 1.4,
        "types": [
            "Electric",
            "Dragon"
        ],
        "abilities": [
            "Mold Breaker"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Pinsir-Mega",
        "hp": 65,
        "atk": 155,
        "def": 120,
        "spa": 65,
        "spd": 90,
        "spe": 105,
        "weight": 59,
        "height": 1.7,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Aerilate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Manectric-Mega",
        "hp": 70,
        "atk": 75,
        "def": 80,
        "spa": 135,
        "spd": 80,
        "spe": 135,
        "weight": 44,
        "height": 1.8,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Intimidate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Grimmsnarl-Gmax",
        "hp": 95,
        "atk": 120,
        "def": 65,
        "spa": 95,
        "spd": 75,
        "spe": 60,
        "weight": 0,
        "height": 32,
        "types": [
            "Dark",
            "Fairy"
        ],
        "abilities": [
            "Frisk",
            "Pickpocket",
            "Prankster"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Greninja-Ash",
        "hp": 72,
        "atk": 145,
        "def": 67,
        "spa": 153,
        "spd": 71,
        "spe": 132,
        "weight": 40,
        "height": 1.5,
        "types": [
            "Water",
            "Dark"
        ],
        "abilities": [
            "Battle Bond"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Gengar-Gmax",
        "hp": 60,
        "atk": 65,
        "def": 60,
        "spa": 130,
        "spd": 75,
        "spe": 110,
        "weight": 0,
        "height": 20,
        "types": [
            "Ghost",
            "Poison"
        ],
        "abilities": [
            "Cursed Body"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Melmetal-Gmax",
        "hp": 135,
        "atk": 143,
        "def": 143,
        "spa": 80,
        "spd": 65,
        "spe": 34,
        "weight": 0,
        "height": 25,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Iron Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Aegislash-Blade",
        "hp": 60,
        "atk": 150,
        "def": 50,
        "spa": 150,
        "spd": 50,
        "spe": 60,
        "weight": 53,
        "height": 1.7,
        "types": [
            "Steel",
            "Ghost"
        ],
        "abilities": [
            "Stance Change"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Mimikyu-Busted",
        "hp": 55,
        "atk": 90,
        "def": 80,
        "spa": 50,
        "spd": 105,
        "spe": 96,
        "weight": 0.7,
        "height": 0.2,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "abilities": [
            "Disguise"
        ],
        "formats": [
            "UU"
        ],
        "isNonstandard": "Standard",
        "oob": null
    },
    {
        "name": "Gallade-Mega",
        "hp": 68,
        "atk": 165,
        "def": 95,
        "spa": 65,
        "spd": 115,
        "spe": 110,
        "weight": 56.4,
        "height": 1.6,
        "types": [
            "Psychic",
            "Fighting"
        ],
        "abilities": [
            "Inner Focus"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Heracross-Mega",
        "hp": 80,
        "atk": 185,
        "def": 115,
        "spa": 40,
        "spd": 105,
        "spe": 75,
        "weight": 62.5,
        "height": 1.7,
        "types": [
            "Bug",
            "Fighting"
        ],
        "abilities": [
            "Skill Link"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Urshifu-Gmax",
        "hp": 100,
        "atk": 130,
        "def": 100,
        "spa": 63,
        "spd": 60,
        "spe": 97,
        "weight": 0,
        "height": 3,
        "types": [
            "Fighting",
            "Dark"
        ],
        "abilities": [
            "Unseen Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Blastoise-Mega",
        "hp": 79,
        "atk": 103,
        "def": 120,
        "spa": 135,
        "spd": 115,
        "spe": 78,
        "weight": 101.1,
        "height": 1.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Mega Launcher"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Wishiwashi-School",
        "hp": 45,
        "atk": 140,
        "def": 130,
        "spa": 140,
        "spd": 135,
        "spe": 30,
        "weight": 78.6,
        "height": 8.2,
        "types": [
            "Water"
        ],
        "abilities": [
            "Schooling"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Castform-Sunny",
        "hp": 70,
        "atk": 70,
        "def": 70,
        "spa": 70,
        "spd": 70,
        "spe": 70,
        "weight": 0.8,
        "height": 0.3,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Forecast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Lopunny-Mega",
        "hp": 65,
        "atk": 136,
        "def": 94,
        "spa": 54,
        "spd": 96,
        "spe": 135,
        "weight": 28.3,
        "height": 1.3,
        "types": [
            "Normal",
            "Fighting"
        ],
        "abilities": [
            "Scrappy"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Camerupt-Mega",
        "hp": 70,
        "atk": 120,
        "def": 100,
        "spa": 145,
        "spd": 105,
        "spe": 20,
        "weight": 320.5,
        "height": 2.5,
        "types": [
            "Fire",
            "Ground"
        ],
        "abilities": [
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Cramorant-Gorging",
        "hp": 70,
        "atk": 85,
        "def": 55,
        "spa": 85,
        "spd": 95,
        "spe": 85,
        "weight": 18,
        "height": 0.8,
        "types": [
            "Flying",
            "Water"
        ],
        "abilities": [
            "Gulp Missile"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Kangaskhan-Mega",
        "hp": 105,
        "atk": 125,
        "def": 100,
        "spa": 60,
        "spd": 100,
        "spe": 100,
        "weight": 100,
        "height": 2.2,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Parental Bond"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Castform-Snowy",
        "hp": 70,
        "atk": 70,
        "def": 70,
        "spa": 70,
        "spd": 70,
        "spe": 70,
        "weight": 0.8,
        "height": 0.3,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Forecast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Blastoise-Gmax",
        "hp": 79,
        "atk": 83,
        "def": 100,
        "spa": 85,
        "spd": 105,
        "spe": 78,
        "weight": 0,
        "height": 1.6,
        "types": [
            "Water"
        ],
        "abilities": [
            "Rain Dish",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Tyranitar-Mega",
        "hp": 100,
        "atk": 164,
        "def": 150,
        "spa": 95,
        "spd": 120,
        "spe": 71,
        "weight": 255,
        "height": 2.5,
        "types": [
            "Rock",
            "Dark"
        ],
        "abilities": [
            "Sand Stream"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Pidgeot-Mega",
        "hp": 83,
        "atk": 80,
        "def": 80,
        "spa": 135,
        "spd": 80,
        "spe": 121,
        "weight": 50.5,
        "height": 2.2,
        "types": [
            "Normal",
            "Flying"
        ],
        "abilities": [
            "No Guard"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Garchomp-Mega",
        "hp": 108,
        "atk": 170,
        "def": 115,
        "spa": 120,
        "spd": 95,
        "spe": 92,
        "weight": 95,
        "height": 1.9,
        "types": [
            "Dragon",
            "Ground"
        ],
        "abilities": [
            "Sand Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Minior-Meteor",
        "hp": 60,
        "atk": 60,
        "def": 100,
        "spa": 60,
        "spd": 100,
        "spe": 60,
        "weight": 40,
        "height": 0.3,
        "types": [
            "Rock",
            "Flying"
        ],
        "abilities": [
            "Shields Down"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Crucibelle-Mega",
        "hp": 106,
        "atk": 135,
        "def": 75,
        "spa": 91,
        "spd": 125,
        "spe": 108,
        "weight": 22.5,
        "height": 1.4,
        "types": [
            "Rock",
            "Poison"
        ],
        "abilities": [
            "Magic Guard"
        ],
        "formats": [
            "CAP"
        ],
        "isNonstandard": "CAP",
        "oob": null
    },
    {
        "name": "Charizard-Mega-Y",
        "hp": 78,
        "atk": 104,
        "def": 78,
        "spa": 159,
        "spd": 115,
        "spe": 100,
        "weight": 100.5,
        "height": 1.7,
        "types": [
            "Fire",
            "Flying"
        ],
        "abilities": [
            "Drought"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Gengar-Mega",
        "hp": 60,
        "atk": 65,
        "def": 80,
        "spa": 170,
        "spd": 95,
        "spe": 130,
        "weight": 40.5,
        "height": 1.4,
        "types": [
            "Ghost",
            "Poison"
        ],
        "abilities": [
            "Shadow Tag"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Audino-Mega",
        "hp": 103,
        "atk": 60,
        "def": 126,
        "spa": 80,
        "spd": 126,
        "spe": 50,
        "weight": 32,
        "height": 1.5,
        "types": [
            "Normal",
            "Fairy"
        ],
        "abilities": [
            "Healer"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Aerodactyl-Mega",
        "hp": 80,
        "atk": 135,
        "def": 85,
        "spa": 70,
        "spd": 95,
        "spe": 150,
        "weight": 79,
        "height": 2.1,
        "types": [
            "Rock",
            "Flying"
        ],
        "abilities": [
            "Tough Claws"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Medicham-Mega",
        "hp": 60,
        "atk": 100,
        "def": 85,
        "spa": 80,
        "spd": 85,
        "spe": 100,
        "weight": 31.5,
        "height": 1.3,
        "types": [
            "Fighting",
            "Psychic"
        ],
        "abilities": [
            "Pure Power"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Charizard-Mega-X",
        "hp": 78,
        "atk": 130,
        "def": 111,
        "spa": 130,
        "spd": 85,
        "spe": 100,
        "weight": 110.5,
        "height": 1.7,
        "types": [
            "Fire",
            "Dragon"
        ],
        "abilities": [
            "Tough Claws"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Swampert-Mega",
        "hp": 100,
        "atk": 150,
        "def": 110,
        "spa": 95,
        "spd": 110,
        "spe": 70,
        "weight": 102,
        "height": 1.9,
        "types": [
            "Water",
            "Ground"
        ],
        "abilities": [
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Drednaw-Gmax",
        "hp": 90,
        "atk": 115,
        "def": 90,
        "spa": 48,
        "spd": 68,
        "spe": 74,
        "weight": 0,
        "height": 24,
        "types": [
            "Water",
            "Rock"
        ],
        "abilities": [
            "Shell Armor",
            "Strong Jaw",
            "Swift Swim"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Meowth-Gmax",
        "hp": 40,
        "atk": 45,
        "def": 35,
        "spa": 40,
        "spd": 40,
        "spe": 90,
        "weight": 0,
        "height": 33,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Pickup",
            "Technician",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Palafin-Hero",
        "hp": 100,
        "atk": 160,
        "def": 97,
        "spa": 106,
        "spd": 87,
        "spe": 100,
        "weight": 97.4,
        "height": 1.8,
        "types": [
            "Water"
        ],
        "abilities": [
            "Zero to Hero"
        ],
        "formats": [
            "Uber"
        ],
        "isNonstandard": "Standard",
        "oob": null
    },
    {
        "name": "Banette-Mega",
        "hp": 64,
        "atk": 165,
        "def": 75,
        "spa": 93,
        "spd": 83,
        "spe": 75,
        "weight": 13,
        "height": 1.2,
        "types": [
            "Ghost"
        ],
        "abilities": [
            "Prankster"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Centiskorch-Gmax",
        "hp": 100,
        "atk": 115,
        "def": 65,
        "spa": 90,
        "spd": 90,
        "spe": 65,
        "weight": 0,
        "height": 75,
        "types": [
            "Fire",
            "Bug"
        ],
        "abilities": [
            "Flame Body",
            "Flash Fire",
            "White Smoke"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Alcremie-Gmax",
        "hp": 65,
        "atk": 60,
        "def": 75,
        "spa": 110,
        "spd": 121,
        "spe": 64,
        "weight": 0,
        "height": 30,
        "types": [
            "Fairy"
        ],
        "abilities": [
            "Aroma Veil",
            "Sweet Veil"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Necrozma-Ultra",
        "hp": 97,
        "atk": 167,
        "def": 97,
        "spa": 167,
        "spd": 97,
        "spe": 129,
        "weight": 230,
        "height": 7.5,
        "types": [
            "Psychic",
            "Dragon"
        ],
        "abilities": [
            "Neuroforce"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Mawile-Mega",
        "hp": 50,
        "atk": 105,
        "def": 125,
        "spa": 55,
        "spd": 95,
        "spe": 50,
        "weight": 23.5,
        "height": 1,
        "types": [
            "Steel",
            "Fairy"
        ],
        "abilities": [
            "Huge Power"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Machamp-Gmax",
        "hp": 90,
        "atk": 130,
        "def": 80,
        "spa": 65,
        "spd": 85,
        "spe": 55,
        "weight": 0,
        "height": 25,
        "types": [
            "Fighting"
        ],
        "abilities": [
            "Guts",
            "No Guard",
            "Steadfast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Lucario-Mega",
        "hp": 70,
        "atk": 145,
        "def": 88,
        "spa": 140,
        "spd": 70,
        "spe": 112,
        "weight": 57.5,
        "height": 1.3,
        "types": [
            "Fighting",
            "Steel"
        ],
        "abilities": [
            "Adaptability"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Castform-Rainy",
        "hp": 70,
        "atk": 70,
        "def": 70,
        "spa": 70,
        "spd": 70,
        "spe": 70,
        "weight": 0.8,
        "height": 0.3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Forecast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Latios-Mega",
        "hp": 80,
        "atk": 130,
        "def": 100,
        "spa": 160,
        "spd": 120,
        "spe": 110,
        "weight": 70,
        "height": 2.3,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Toxtricity-Low-Key-Gmax",
        "hp": 75,
        "atk": 98,
        "def": 70,
        "spa": 114,
        "spd": 70,
        "spe": 75,
        "weight": 0,
        "height": 24,
        "types": [
            "Electric",
            "Poison"
        ],
        "abilities": [
            "Minus",
            "Punk Rock",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Mewtwo-Mega-X",
        "hp": 106,
        "atk": 190,
        "def": 100,
        "spa": 154,
        "spd": 100,
        "spe": 130,
        "weight": 127,
        "height": 2.3,
        "types": [
            "Psychic",
            "Fighting"
        ],
        "abilities": [
            "Steadfast"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Duraludon-Gmax",
        "hp": 70,
        "atk": 95,
        "def": 115,
        "spa": 120,
        "spd": 50,
        "spe": 85,
        "weight": 0,
        "height": 43,
        "types": [
            "Steel",
            "Dragon"
        ],
        "abilities": [
            "Heavy Metal",
            "Light Metal",
            "Stalwart"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Pikachu-Gmax",
        "hp": 35,
        "atk": 55,
        "def": 40,
        "spa": 50,
        "spd": 50,
        "spe": 90,
        "weight": 0,
        "height": 21,
        "types": [
            "Electric"
        ],
        "abilities": [
            "Lightning Rod",
            "Static"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Blaziken-Mega",
        "hp": 80,
        "atk": 160,
        "def": 80,
        "spa": 130,
        "spd": 80,
        "spe": 100,
        "weight": 52,
        "height": 1.9,
        "types": [
            "Fire",
            "Fighting"
        ],
        "abilities": [
            "Speed Boost"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Absol-Mega",
        "hp": 65,
        "atk": 150,
        "def": 60,
        "spa": 115,
        "spd": 60,
        "spe": 115,
        "weight": 49,
        "height": 1.2,
        "types": [
            "Dark"
        ],
        "abilities": [
            "Magic Bounce"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Cherrim-Sunshine",
        "hp": 70,
        "atk": 60,
        "def": 70,
        "spa": 87,
        "spd": 78,
        "spe": 85,
        "weight": 9.3,
        "height": 0.5,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Flower Gift"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Glalie-Mega",
        "hp": 80,
        "atk": 120,
        "def": 80,
        "spa": 120,
        "spd": 80,
        "spe": 100,
        "weight": 350.2,
        "height": 2.1,
        "types": [
            "Ice"
        ],
        "abilities": [
            "Refrigerate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Kingler-Gmax",
        "hp": 55,
        "atk": 130,
        "def": 115,
        "spa": 50,
        "spd": 50,
        "spe": 75,
        "weight": 0,
        "height": 19,
        "types": [
            "Water"
        ],
        "abilities": [
            "Hyper Cutter",
            "Sheer Force",
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Copperajah-Gmax",
        "hp": 122,
        "atk": 130,
        "def": 69,
        "spa": 80,
        "spd": 69,
        "spe": 30,
        "weight": 0,
        "height": 23,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Heavy Metal",
            "Sheer Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Eevee-Gmax",
        "hp": 55,
        "atk": 55,
        "def": 50,
        "spa": 45,
        "spd": 65,
        "spe": 55,
        "weight": 0,
        "height": 18,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Adaptability",
            "Anticipation",
            "Run Away"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Toxtricity-Gmax",
        "hp": 75,
        "atk": 98,
        "def": 70,
        "spa": 114,
        "spd": 70,
        "spe": 75,
        "weight": 0,
        "height": 24,
        "types": [
            "Electric",
            "Poison"
        ],
        "abilities": [
            "Plus",
            "Punk Rock",
            "Technician"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Mimikyu-Busted-Totem",
        "hp": 55,
        "atk": 90,
        "def": 80,
        "spa": 50,
        "spd": 105,
        "spe": 96,
        "weight": 2.8,
        "height": 0.4,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "abilities": [
            "Disguise"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Sableye-Mega",
        "hp": 50,
        "atk": 85,
        "def": 125,
        "spa": 85,
        "spd": 115,
        "spe": 20,
        "weight": 161,
        "height": 0.5,
        "types": [
            "Dark",
            "Ghost"
        ],
        "abilities": [
            "Magic Bounce"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Flapple-Gmax",
        "hp": 70,
        "atk": 110,
        "def": 80,
        "spa": 95,
        "spd": 60,
        "spe": 70,
        "weight": 0,
        "height": 24,
        "types": [
            "Grass",
            "Dragon"
        ],
        "abilities": [
            "Gluttony",
            "Hustle",
            "Ripen"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Salamence-Mega",
        "hp": 95,
        "atk": 145,
        "def": 130,
        "spa": 120,
        "spd": 90,
        "spe": 120,
        "weight": 112.6,
        "height": 1.8,
        "types": [
            "Dragon",
            "Flying"
        ],
        "abilities": [
            "Aerilate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Slowbro-Mega",
        "hp": 95,
        "atk": 75,
        "def": 180,
        "spa": 130,
        "spd": 80,
        "spe": 30,
        "weight": 120,
        "height": 2,
        "types": [
            "Water",
            "Psychic"
        ],
        "abilities": [
            "Shell Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Garbodor-Gmax",
        "hp": 80,
        "atk": 95,
        "def": 82,
        "spa": 60,
        "spd": 82,
        "spe": 75,
        "weight": 0,
        "height": 21,
        "types": [
            "Poison"
        ],
        "abilities": [
            "Aftermath",
            "Stench",
            "Weak Armor"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Aggron-Mega",
        "hp": 70,
        "atk": 140,
        "def": 230,
        "spa": 60,
        "spd": 80,
        "spe": 50,
        "weight": 395,
        "height": 2.2,
        "types": [
            "Steel"
        ],
        "abilities": [
            "Filter"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Latias-Mega",
        "hp": 80,
        "atk": 100,
        "def": 120,
        "spa": 140,
        "spd": 150,
        "spe": 110,
        "weight": 52,
        "height": 1.8,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "abilities": [
            "Levitate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Cinderace-Gmax",
        "hp": 80,
        "atk": 116,
        "def": 75,
        "spa": 65,
        "spd": 75,
        "spe": 119,
        "weight": 0,
        "height": 3,
        "types": [
            "Fire"
        ],
        "abilities": [
            "Blaze",
            "Libero"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Hatterene-Gmax",
        "hp": 57,
        "atk": 90,
        "def": 95,
        "spa": 136,
        "spd": 103,
        "spe": 29,
        "weight": 0,
        "height": 26,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "abilities": [
            "Anticipation",
            "Healer",
            "Magic Bounce"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Butterfree-Gmax",
        "hp": 60,
        "atk": 45,
        "def": 50,
        "spa": 90,
        "spd": 80,
        "spe": 70,
        "weight": 0,
        "height": 17,
        "types": [
            "Bug",
            "Flying"
        ],
        "abilities": [
            "Compound Eyes",
            "Tinted Lens"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Abomasnow-Mega",
        "hp": 90,
        "atk": 132,
        "def": 105,
        "spa": 132,
        "spd": 105,
        "spe": 30,
        "weight": 185,
        "height": 2.7,
        "types": [
            "Grass",
            "Ice"
        ],
        "abilities": [
            "Snow Warning"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Altaria-Mega",
        "hp": 75,
        "atk": 110,
        "def": 110,
        "spa": 110,
        "spd": 105,
        "spe": 80,
        "weight": 20.6,
        "height": 1.5,
        "types": [
            "Dragon",
            "Fairy"
        ],
        "abilities": [
            "Pixilate"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Groudon-Primal",
        "hp": 100,
        "atk": 180,
        "def": 160,
        "spa": 150,
        "spd": 90,
        "spe": 90,
        "weight": 999.7,
        "height": 5,
        "types": [
            "Ground",
            "Fire"
        ],
        "abilities": [
            "Desolate Land"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Steelix-Mega",
        "hp": 75,
        "atk": 125,
        "def": 230,
        "spa": 55,
        "spd": 95,
        "spe": 30,
        "weight": 740,
        "height": 10.5,
        "types": [
            "Steel",
            "Ground"
        ],
        "abilities": [
            "Sand Force"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Zygarde-Complete",
        "hp": 216,
        "atk": 100,
        "def": 121,
        "spa": 91,
        "spd": 95,
        "spe": 85,
        "weight": 610,
        "height": 4.5,
        "types": [
            "Dragon",
            "Ground"
        ],
        "abilities": [
            "Power Construct"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Houndoom-Mega",
        "hp": 75,
        "atk": 90,
        "def": 90,
        "spa": 140,
        "spd": 90,
        "spe": 115,
        "weight": 49.5,
        "height": 1.9,
        "types": [
            "Dark",
            "Fire"
        ],
        "abilities": [
            "Solar Power"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Sharpedo-Mega",
        "hp": 70,
        "atk": 140,
        "def": 70,
        "spa": 110,
        "spd": 65,
        "spe": 105,
        "weight": 130.3,
        "height": 2.5,
        "types": [
            "Water",
            "Dark"
        ],
        "abilities": [
            "Strong Jaw"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Alakazam-Mega",
        "hp": 55,
        "atk": 50,
        "def": 65,
        "spa": 175,
        "spd": 105,
        "spe": 150,
        "weight": 48,
        "height": 1.2,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Trace"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Rillaboom-Gmax",
        "hp": 100,
        "atk": 125,
        "def": 90,
        "spa": 60,
        "spd": 70,
        "spe": 85,
        "weight": 0,
        "height": 3,
        "types": [
            "Grass"
        ],
        "abilities": [
            "Grassy Surge",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Mewtwo-Mega-Y",
        "hp": 106,
        "atk": 150,
        "def": 70,
        "spa": 194,
        "spd": 120,
        "spe": 140,
        "weight": 33,
        "height": 1.5,
        "types": [
            "Psychic"
        ],
        "abilities": [
            "Insomnia"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Corviknight-Gmax",
        "hp": 98,
        "atk": 87,
        "def": 105,
        "spa": 53,
        "spd": 85,
        "spe": 67,
        "weight": 0,
        "height": 14,
        "types": [
            "Flying",
            "Steel"
        ],
        "abilities": [
            "Mirror Armor",
            "Pressure",
            "Unnerve"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Venusaur-Gmax",
        "hp": 80,
        "atk": 82,
        "def": 83,
        "spa": 100,
        "spd": 100,
        "spe": 80,
        "weight": 0,
        "height": 2,
        "types": [
            "Grass",
            "Poison"
        ],
        "abilities": [
            "Chlorophyll",
            "Overgrow"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Snorlax-Gmax",
        "hp": 160,
        "atk": 110,
        "def": 65,
        "spa": 65,
        "spd": 110,
        "spe": 30,
        "weight": 0,
        "height": 35,
        "types": [
            "Normal"
        ],
        "abilities": [
            "Gluttony",
            "Immunity",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Darmanitan-Zen",
        "hp": 105,
        "atk": 30,
        "def": 105,
        "spa": 140,
        "spd": 105,
        "spe": 55,
        "weight": 92.9,
        "height": 1.3,
        "types": [
            "Fire",
            "Psychic"
        ],
        "abilities": [
            "Zen Mode"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Sceptile-Mega",
        "hp": 70,
        "atk": 110,
        "def": 75,
        "spa": 145,
        "spd": 85,
        "spe": 145,
        "weight": 55.2,
        "height": 1.9,
        "types": [
            "Grass",
            "Dragon"
        ],
        "abilities": [
            "Lightning Rod"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Urshifu-Rapid-Strike-Gmax",
        "hp": 100,
        "atk": 130,
        "def": 100,
        "spa": 63,
        "spd": 60,
        "spe": 97,
        "weight": 105,
        "height": 1.9,
        "types": [
            "Fighting",
            "Water"
        ],
        "abilities": [
            "Unseen Fist"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Meloetta-Pirouette",
        "hp": 100,
        "atk": 128,
        "def": 90,
        "spa": 77,
        "spd": 77,
        "spe": 128,
        "weight": 6.5,
        "height": 0.6,
        "types": [
            "Normal",
            "Fighting"
        ],
        "abilities": [
            "Serene Grace"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Inteleon-Gmax",
        "hp": 70,
        "atk": 85,
        "def": 65,
        "spa": 125,
        "spd": 65,
        "spe": 120,
        "weight": 0,
        "height": 3,
        "types": [
            "Water"
        ],
        "abilities": [
            "Sniper",
            "Torrent"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Kyogre-Primal",
        "hp": 100,
        "atk": 150,
        "def": 90,
        "spa": 180,
        "spd": 160,
        "spe": 90,
        "weight": 430,
        "height": 9.8,
        "types": [
            "Water"
        ],
        "abilities": [
            "Primordial Sea"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Cramorant-Gulping",
        "hp": 70,
        "atk": 85,
        "def": 55,
        "spa": 85,
        "spd": 95,
        "spe": 85,
        "weight": 18,
        "height": 0.8,
        "types": [
            "Flying",
            "Water"
        ],
        "abilities": [
            "Gulp Missile"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    },
    {
        "name": "Appletun-Gmax",
        "hp": 110,
        "atk": 85,
        "def": 80,
        "spa": 100,
        "spd": 80,
        "spe": 30,
        "weight": 0,
        "height": 24,
        "types": [
            "Grass",
            "Dragon"
        ],
        "abilities": [
            "Gluttony",
            "Ripen",
            "Thick Fat"
        ],
        "formats": [
            "National Dex"
        ],
        "isNonstandard": "NatDex",
        "oob": null
    }
];

export const FORMATS =  [
    {
        "name": "Anything Goes",
        "shorthand": "AG",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Uber",
        "shorthand": "Uber",
        "genfamily": [
            "RB",
            "GS",
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "OverUsed",
        "shorthand": "OU",
        "genfamily": [
            "RB",
            "GS",
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "UUBL",
        "shorthand": "UUBL",
        "genfamily": [
            "RB",
            "GS",
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "UnderUsed",
        "shorthand": "UU",
        "genfamily": [
            "RB",
            "GS",
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "RarelyUsed",
        "shorthand": "RU",
        "genfamily": [
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Untiered",
        "shorthand": "Untiered",
        "genfamily": [
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Little Cup",
        "shorthand": "LC",
        "genfamily": [
            "RB",
            "GS",
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Monotype",
        "shorthand": "Monotype",
        "genfamily": [
            "RB",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Doubles OU",
        "shorthand": "Doubles",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Doubles Ubers",
        "shorthand": "Doubles Ubers",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Doubles UnderUsed",
        "shorthand": "Doubles UU",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Battle Stadium Singles",
        "shorthand": "Battle Stadium Singles",
        "genfamily": [
            "SS",
            "SV"
        ]
    },
    {
        "name": "Battle Stadium Singles Series 1",
        "shorthand": "BSS Series 1",
        "genfamily": [
            "SV"
        ]
    },
    {
        "name": "VGC 2023 Series 1",
        "shorthand": "VGC23 Series 1",
        "genfamily": [
            "SV"
        ]
    },
    {
        "name": "Random Battle",
        "shorthand": "Random Battle",
        "genfamily": [
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Random Doubles Battle",
        "shorthand": "Random Doubles",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Challenge Cup 1v1",
        "shorthand": "CC1v1",
        "genfamily": [
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Limbo",
        "shorthand": "Limbo",
        "genfamily": [
            "RB",
            "GS",
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Seasonal",
        "shorthand": "Seasonal",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Create-A-Pokemon",
        "shorthand": "CAP",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Balanced Hackmons",
        "shorthand": "BH",
        "genfamily": [
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Tier Shift",
        "shorthand": "Tier Shift",
        "genfamily": [
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Inverse",
        "shorthand": "Inverse Battle",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Almost Any Ability",
        "shorthand": "Almost Any Ability",
        "genfamily": [
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "STABmons",
        "shorthand": "STABmons",
        "genfamily": [
            "RB",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Hackmons Cup",
        "shorthand": "Hackmons Cup",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Camomons",
        "shorthand": "Camomons",
        "genfamily": [
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Godly Gift",
        "shorthand": "Godly Gift",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Monotype Random Battle",
        "shorthand": "Monotype Random Battle",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Mix and Mega",
        "shorthand": "Mix and Mega",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "1v1",
        "shorthand": "1v1",
        "genfamily": [
            "RB",
            "GS",
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "2v2 Doubles",
        "shorthand": "2v2 Doubles",
        "genfamily": [
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "NFE",
        "shorthand": "NFE",
        "genfamily": [
            "RB",
            "GS",
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "ZeroUsed",
        "shorthand": "ZU",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "National Dex",
        "shorthand": "National Dex",
        "genfamily": [
            "SS",
            "SV"
        ]
    },
    {
        "name": "National Dex AG",
        "shorthand": "National Dex AG",
        "genfamily": [
            "SS",
            "SV"
        ]
    },
    {
        "name": "National Dex UU",
        "shorthand": "National Dex UU",
        "genfamily": [
            "SS",
            "SV"
        ]
    },
    {
        "name": "National Dex Monotype",
        "shorthand": "National Dex Monotype",
        "genfamily": [
            "SS",
            "SV"
        ]
    }
];

export const NATURES = [
    {
        "name": "Adamant",
        "hp": 1,
        "atk": 1.1,
        "def": 1,
        "spa": 0.9,
        "spd": 1,
        "spe": 1,
        "summary": "+Atk, -SpA",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Bashful",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1,
        "summary": "",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Bold",
        "hp": 1,
        "atk": 0.9,
        "def": 1.1,
        "spa": 1,
        "spd": 1,
        "spe": 1,
        "summary": "+Def, -Atk",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Brave",
        "hp": 1,
        "atk": 1.1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 0.9,
        "summary": "+Atk, -Spe",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Calm",
        "hp": 1,
        "atk": 0.9,
        "def": 1,
        "spa": 1,
        "spd": 1.1,
        "spe": 1,
        "summary": "+SpD, -Atk",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Careful",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 0.9,
        "spd": 1.1,
        "spe": 1,
        "summary": "+SpD, -SpA",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Docile",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1,
        "summary": "",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Gentle",
        "hp": 1,
        "atk": 1,
        "def": 0.9,
        "spa": 1,
        "spd": 1.1,
        "spe": 1,
        "summary": "+SpD, -Def",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Hardy",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1,
        "summary": "",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Hasty",
        "hp": 1,
        "atk": 1,
        "def": 0.9,
        "spa": 1,
        "spd": 1,
        "spe": 1.1,
        "summary": "+Spe, -Def",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Impish",
        "hp": 1,
        "atk": 1,
        "def": 1.1,
        "spa": 0.9,
        "spd": 1,
        "spe": 1,
        "summary": "+Def, -SpA",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Jolly",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 0.9,
        "spd": 1,
        "spe": 1.1,
        "summary": "+Spe, -SpA",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Lax",
        "hp": 1,
        "atk": 1,
        "def": 1.1,
        "spa": 1,
        "spd": 0.9,
        "spe": 1,
        "summary": "+Def, -SpD",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Lonely",
        "hp": 1,
        "atk": 1.1,
        "def": 0.9,
        "spa": 1,
        "spd": 1,
        "spe": 1,
        "summary": "+Atk, -Def",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Mild",
        "hp": 1,
        "atk": 1,
        "def": 0.9,
        "spa": 1.1,
        "spd": 1,
        "spe": 1,
        "summary": "+SpA, -Def",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Modest",
        "hp": 1,
        "atk": 0.9,
        "def": 1,
        "spa": 1.1,
        "spd": 1,
        "spe": 1,
        "summary": "+SpA, -Atk",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Naive",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 0.9,
        "spe": 1.1,
        "summary": "+Spe, -SpD",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Naughty",
        "hp": 1,
        "atk": 1.1,
        "def": 1,
        "spa": 1,
        "spd": 0.9,
        "spe": 1,
        "summary": "+Atk, -SpD",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Quiet",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1.1,
        "spd": 1,
        "spe": 0.9,
        "summary": "+SpA, -Spe",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Quirky",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1,
        "summary": "",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Rash",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1.1,
        "spd": 0.9,
        "spe": 1,
        "summary": "+SpA, -SpD",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Relaxed",
        "hp": 1,
        "atk": 1,
        "def": 1.1,
        "spa": 1,
        "spd": 1,
        "spe": 0.9,
        "summary": "+Def, -Spe",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Sassy",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1.1,
        "spe": 0.9,
        "summary": "+SpD, -Spe",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Serious",
        "hp": 1,
        "atk": 1,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1,
        "summary": "",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Timid",
        "hp": 1,
        "atk": 0.9,
        "def": 1,
        "spa": 1,
        "spd": 1,
        "spe": 1.1,
        "summary": "+Spe, -Atk",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    }
];

export const ABILITIES = [
    {
        "name": "Vessel of Ruin",
        "description": "The Special Attack stat of all other active Pokemon is multiplied by 0.75.",
        "isNonstandard": "Standard",
        "genfamily": [
            "SV"
        ]
    },
    {
        "name": "Well-Baked Body",
        "description": "This Pokemon's Defense is raised 2 stages if hit by a Fire move; Fire immunity.",
        "isNonstandard": "Standard",
        "genfamily": [
            "SV"
        ]
    },
    {
        "name": "Wind Power",
        "description": "This Pokemon gains the Charge effect when hit by a wind move or Tailwind begins.",
        "isNonstandard": "Standard",
        "genfamily": [
            "SV"
        ]
    },
    {
        "name": "Cute Charm",
        "description": "30% chance of infatuating Pokemon of the opposite gender if they make contact.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Effect Spore",
        "description": "30% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Flame Body",
        "description": "30% chance a Pokemon making contact with this Pokemon will be burned.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Flash Fire",
        "description": "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Intimidate",
        "description": "On switch-in, this Pokemon lowers the Attack of opponents by 1 stage.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Lightning Rod",
        "description": "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Minus",
        "description": "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Plus",
        "description": "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Poison Point",
        "description": "30% chance a Pokemon making contact with this Pokemon will be poisoned.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Pressure",
        "description": "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Rain Dish",
        "description": "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Rough Skin",
        "description": "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Shadow Tag",
        "description": "Prevents foes from choosing to switch unless they also have this Ability.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Static",
        "description": "30% chance a Pokemon making contact with this Pokemon will be paralyzed.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Trace",
        "description": "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Truant",
        "description": "This Pokemon skips every other turn instead of using a move.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Volt Absorb",
        "description": "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Air Lock",
        "description": "While this Pokemon is active, the effects of weather conditions are disabled.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Blaze",
        "description": "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Fire attacks.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Cloud Nine",
        "description": "While this Pokemon is active, the effects of weather conditions are disabled.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Color Change",
        "description": "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Compound Eyes",
        "description": "This Pokemon's moves have their accuracy multiplied by 1.3.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Hustle",
        "description": "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Insomnia",
        "description": "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Liquid Ooze",
        "description": "This Pokemon damages those draining HP from it for as much as they would heal.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Natural Cure",
        "description": "This Pokemon has its non-volatile status condition cured when it switches out.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Overgrow",
        "description": "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Grass attacks.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Pickup",
        "description": "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Sand Veil",
        "description": "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Serene Grace",
        "description": "This Pokemon's moves have their secondary effect chance doubled.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Shed Skin",
        "description": "This Pokemon has a 33% chance to have its status cured at the end of each turn.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Speed Boost",
        "description": "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Stench",
        "description": "This Pokemon's attacks without a chance to flinch gain a 10% chance to flinch.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Wind Rider",
        "description": "Attack raised by 1 if hit by a wind move or Tailwind begins. Wind move immunity.",
        "isNonstandard": "Standard",
        "genfamily": [
            "SV"
        ]
    },
    {
        "name": "Zero to Hero",
        "description": "If this Pokemon is a Palafin in Zero Form, switching out has it change to Hero Form.",
        "isNonstandard": "Standard",
        "genfamily": [
            "SV"
        ]
    },
    {
        "name": "Sticky Hold",
        "description": "This Pokemon cannot lose its held item due to another Pokemon's Ability or attack.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Sturdy",
        "description": "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Swarm",
        "description": "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Bug attacks.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Synchronize",
        "description": "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Thick Fat",
        "description": "Fire-/Ice-type moves against this Pokemon deal damage with a halved offensive stat.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Torrent",
        "description": "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Water attacks.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Vital Spirit",
        "description": "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Wonder Guard",
        "description": "This Pokemon can only be damaged by supereffective moves and indirect damage.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Keen Eye",
        "description": "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Oblivious",
        "description": "This Pokemon cannot be infatuated or taunted. Immune to Intimidate.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Soundproof",
        "description": "This Pokemon is immune to sound-based moves, unless it used the move.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Inner Focus",
        "description": "This Pokemon cannot be made to flinch. Immune to Intimidate.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Own Tempo",
        "description": "This Pokemon cannot be confused. Immune to Intimidate.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Arena Trap",
        "description": "Prevents opposing Pokemon from choosing to switch out unless they are airborne.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Battle Armor",
        "description": "This Pokemon cannot be struck by a critical hit.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Chlorophyll",
        "description": "If Sunny Day is active, this Pokemon's Speed is doubled.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Clear Body",
        "description": "Prevents other Pokemon from lowering this Pokemon's stat stages.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Damp",
        "description": "Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Drizzle",
        "description": "On switch-in, this Pokemon summons Rain Dance.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Drought",
        "description": "On switch-in, this Pokemon summons Sunny Day.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Early Bird",
        "description": "This Pokemon's sleep counter drops by 2 instead of 1.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Forecast",
        "description": "Castform's type changes to the current weather condition's type, except Sandstorm.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Guts",
        "description": "If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Huge Power",
        "description": "This Pokemon's Attack is doubled.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Hyper Cutter",
        "description": "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Illuminate",
        "description": "No competitive use.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Immunity",
        "description": "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Levitate",
        "description": "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Limber",
        "description": "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Magma Armor",
        "description": "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Magnet Pull",
        "description": "Prevents opposing Steel-type Pokemon from choosing to switch out.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Marvel Scale",
        "description": "If this Pokemon has a non-volatile status condition, its Defense is multiplied by 1.5.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Pure Power",
        "description": "This Pokemon's Attack is doubled.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Rock Head",
        "description": "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Run Away",
        "description": "No competitive use.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Sand Stream",
        "description": "On switch-in, this Pokemon summons Sandstorm.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Shell Armor",
        "description": "This Pokemon cannot be struck by a critical hit.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Shield Dust",
        "description": "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Suction Cups",
        "description": "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Swift Swim",
        "description": "If Rain Dance is active, this Pokemon's Speed is doubled.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Water Absorb",
        "description": "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Water Veil",
        "description": "This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "White Smoke",
        "description": "Prevents other Pokemon from lowering this Pokemon's stat stages.",
        "isNonstandard": "Standard",
        "genfamily": [
            "RS",
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Anger Point",
        "description": "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Bad Dreams",
        "description": "Causes sleeping foes to lose 1/8 of their max HP at the end of each turn.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Flower Gift",
        "description": "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Forewarn",
        "description": "On switch-in, this Pokemon is alerted to the foes' move with the highest power.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Frisk",
        "description": "On switch-in, this Pokemon identifies the held items of all opposing Pokemon.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Hydration",
        "description": "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Leaf Guard",
        "description": "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Magic Guard",
        "description": "This Pokemon can only be damaged by direct attacks.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Normalize",
        "description": "This Pokemon's moves are changed to be Normal type and have 1.2x power.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Simple",
        "description": "When one of this Pokemon's stat stages is raised or lowered, the amount is doubled.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Snow Cloak",
        "description": "If Snow is active, this Pokemon's evasiveness is 1.25x.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Storm Drain",
        "description": "This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Tangled Feet",
        "description": "This Pokemon's evasiveness is doubled as long as it is confused.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Unburden",
        "description": "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Anticipation",
        "description": "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.",
        "isNonstandard": "Standard",
        "genfamily": [
            "DP",
            "BW",
            "XY",
            "SM",
            "SS",
            "SV"
        ]
    },
    {
        "name": "Aftermath",
        "description": "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",
        "isNonstandard": "Standard",
        ]
