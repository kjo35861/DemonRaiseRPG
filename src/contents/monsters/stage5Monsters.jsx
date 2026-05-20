import * as i from "../../assets/images/monster/stage5/index";

export const stage5Monsters = [

    {
        id: 401,
        name: "핏빛 학살자",
        type: "normal",

        hp: 5000,
        maxhp: 5000,
        attack: 210,
        spd: 100,

        img: i.stg5_1,

        reward: { xp: 45, fame: 7, money: 18, souls: 1 },
    },

    {
        id: 402,
        name: "심연의 포식룡",
        type: "tank",

        hp: 9000,
        maxhp: 9000,
        attack: 160,
        spd: 40,

        img: i.stg5_2,

        reward: { xp: 48, fame: 7, money: 17, souls: 1 },
    },

    {
        id: 403,
        name: "붕괴의 암살자",
        type: "fast",

        hp: 4200,
        maxhp: 4200,
        attack: 280,
        spd: 170,

        img: i.stg5_3,

        reward: { xp: 52, fame: 8, money: 20, souls: 1 },
    },

    {
        id: 404,
        name: "재앙의 흑마도사",
        type: "magic",

        hp: 4800,
        maxhp: 4800,
        attack: 300,
        spd: 135,

        img: i.stg5_4,

        reward: { xp: 56, fame: 8, money: 22, souls: 1 },
    },

    {
        id: 405,
        name: "절망의 파수꾼",
        type: "tank",

        hp: 10000,
        maxhp: 10000,
        attack: 150,
        spd: 32,

        img: i.stg5_5,

        reward: { xp: 60, fame: 9, money: 24, souls: 1 },
    },

    {
        id: 406,
        name: "광기의 사냥개",
        type: "crit",

        hp: 4300,
        maxhp: 4300,
        attack: 290,
        spd: 180,

        img: i.stg5_6,

        reward: { xp: 65, fame: 10, money: 26, souls: 1 },
    },

    {
        id: 407,
        name: "저주받은 학살 병기",
        type: "berserk",

        hp: 7000,
        maxhp: 7000,
        attack: 250,
        spd: 75,

        img: i.stg5_7,

        reward: { xp: 70, fame: 11, money: 29, souls: 2 },
    },

    {
        id: 408,
        name: "영혼 수확자",
        type: "debuff",

        hp: 5500,
        maxhp: 5500,
        attack: 230,
        spd: 120,

        img: i.stg5_8,

        reward: { xp: 78, fame: 12, money: 32, souls: 2 },
    },

    {
        id: 409,
        name: "심판의 지옥 군주",
        type: "boss",

        hp: 20000,
        maxhp: 20000,
        attack: 420,
        spd: 85,

        img: i.stg5_9,

        reward: { xp: 220, fame: 45, money: 100, souls: 5 },
    },
]