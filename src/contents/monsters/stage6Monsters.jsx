import * as i from "../../assets/images/monster/stage6/index";

export const stage6Monsters = [

    {
        id: 501,
        name: "멸망의 감시자",
        type: "normal",

        hp: 10000,
        maxhp: 10000,
        attack: 350,
        spd: 150,

        img: i.stg6_1,

        reward: { xp: 75, fame: 10, money: 28, souls: 1 },
    },

    {
        id: 502,
        name: "폭식의 거신",
        type: "tank",

        hp: 18000,
        maxhp: 18000,
        attack: 240,
        spd: 50,

        img: i.stg6_2,

        reward: { xp: 80, fame: 11, money: 27, souls: 1 },
    },

    {
        id: 503,
        name: "파멸의 그림자",
        type: "fast",

        hp: 9000,
        maxhp: 9000,
        attack: 480,
        spd: 240,

        img: i.stg6_3,

        reward: { xp: 86, fame: 12, money: 31, souls: 1 },
    },

    {
        id: 504,
        name: "심연의 흑마술사",
        type: "magic",

        hp: 11000,
        maxhp: 11000,
        attack: 500,
        spd: 190,

        img: i.stg6_4,

        reward: { xp: 92, fame: 12, money: 34, souls: 1 },
    },

    {
        id: 505,
        name: "지옥의 돌격병",
        type: "berserk",

        hp: 15000,
        maxhp: 15000,
        attack: 430,
        spd: 120,

        img: i.stg6_5,

        reward: { xp: 100, fame: 13, money: 36, souls: 1 },
    },

    {
        id: 506,
        name: "검은 사도",
        type: "elite",

        hp: 14000,
        maxhp: 14000,
        attack: 410,
        spd: 160,

        img: i.stg6_6,

        reward: { xp: 108, fame: 14, money: 39, souls: 1 },
    },

    {
        id: 507,
        name: "피의 추적자",
        type: "crit",

        hp: 8500,
        maxhp: 8500,
        attack: 520,
        spd: 260,

        img: i.stg6_7,

        reward: { xp: 116, fame: 15, money: 42, souls: 2 },
    },

    {
        id: 508,
        name: "영혼을 삼키는 자",
        type: "debuff",

        hp: 13000,
        maxhp: 13000,
        attack: 370,
        spd: 140,

        img: i.stg6_8,

        reward: { xp: 125, fame: 16, money: 45, souls: 2 },
    },

    {
        id: 509,
        name: "종말의 악마 장군",
        type: "boss",

        hp: 40000,
        maxhp: 40000,
        attack: 700,
        spd: 110,

        img: i.stg6_9,

        reward: { xp: 350, fame: 70, money: 160, souls: 6 },
    },
]