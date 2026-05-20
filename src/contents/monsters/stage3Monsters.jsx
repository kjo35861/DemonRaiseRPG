import * as i from "../../assets/images/monster/stage3/index";

export const stage3Monsters = [

    {
        id: 201,
        name: "저주받은 집행자",
        type: "normal",

        hp: 520,
        maxhp: 520,
        attack: 48,
        spd: 38,

        img: i.stg3_1,

        reward: {
            xp: 14,
            fame: 2,
            money: 6,
            souls: 0,
        },
    },

    {
        id: 202,
        name: "암흑 포식자",
        type: "fast",

        hp: 430,
        maxhp: 430,
        attack: 68,
        spd: 65,

        img: i.stg3_2,

        reward: {
            xp: 15,
            fame: 2,
            money: 7,
            souls: 0,
        },
    },

    {
        id: 203,
        name: "철갑 악마",
        type: "tank",

        hp: 900,
        maxhp: 900,
        attack: 38,
        spd: 18,

        img: i.stg3_3,

        reward: {
            xp: 17,
            fame: 2,
            money: 6,
            souls: 0,
        },
    },

    {
        id: 204,
        name: "검은 피의 망령",
        type: "debuff",

        hp: 480,
        maxhp: 480,
        attack: 52,
        spd: 42,

        img: i.stg3_4,

        reward: {
            xp: 18,
            fame: 3,
            money: 8,
            souls: 0,
        },
    },

    {
        id: 205,
        name: "악몽의 사냥개",
        type: "crit",

        hp: 410,
        maxhp: 410,
        attack: 72,
        spd: 70,

        img: i.stg3_5,

        reward: {
            xp: 20,
            fame: 3,
            money: 9,
            souls: 1,
        },
    },

    {
        id: 206,
        name: "심연의 주술사",
        type: "magic",

        hp: 500,
        maxhp: 500,
        attack: 66,
        spd: 45,

        img: i.stg3_6,

        reward: {
            xp: 22,
            fame: 3,
            money: 10,
            souls: 1,
        },
    },

    {
        id: 207,
        name: "핏빛 도살자",
        type: "berserk",

        hp: 700,
        maxhp: 700,
        attack: 58,
        spd: 30,

        img: i.stg3_7,

        reward: {
            xp: 24,
            fame: 4,
            money: 10,
            souls: 1,
        },
    },

    {
        id: 208,
        name: "절망의 수문장",
        type: "elite",

        hp: 850,
        maxhp: 850,
        attack: 60,
        spd: 24,

        img: i.stg3_8,

        reward: {
            xp: 28,
            fame: 5,
            money: 13,
            souls: 1,
        },
    },

    {
        id: 209,
        name: "심연의 기사단장",
        type: "boss",

        hp: 1800,
        maxhp: 1800,
        attack: 85,
        spd: 36,

        img: i.stg3_9,

        reward: {
            xp: 70,
            fame: 15,
            money: 35,
            souls: 3,
        },
    },
]