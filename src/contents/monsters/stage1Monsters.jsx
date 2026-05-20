import * as i from "../../assets/images/monster/stage1/index";


export const stage1Monsters = [

    {
        id: 1,
        name: "굶주린 하급 악마",
        type: "normal",
        rarity: "normal",

        hp: 25,
        maxhp: 25,
        attack: 5,
        spd: 8,

        img: i.stg1_1,

        reward: {
            xp: 2,
            fame: 0,
            money: 1,
            souls: 0,
        },
    },

    {
        id: 2,
        name: "불안정한 임프",
        type: "fast",
        rarity: "normal",

        hp: 18,
        maxhp: 18,
        attack: 7,
        spd: 16,

        img: i.stg1_2,

        reward: {
            xp: 3,
            fame: 0,
            money: 1,
            souls: 0,
        },
    },

    {
        id: 3,
        name: "절름발이 악귀",
        type: "tank",
        rarity: "normal",

        hp: 45,
        maxhp: 45,
        attack: 4,
        spd: 5,

        img: i.stg1_3,

        reward: {
            xp: 4,
            fame: 0,
            money: 1,
            souls: 0,
        },
    },

    {
        id: 4,
        name: "핏빛 송곳니",
        type: "crit",
        rarity: "normal",

        hp: 22,
        maxhp: 22,
        attack: 8,
        spd: 15,

        img: i.stg1_4,

        reward: {
            xp: 4,
            fame: 1,
            money: 2,
            souls: 0,
        },
    },

    {
        id: 5,
        name: "붉은 눈의 망령",
        type: "debuff",
        rarity: "elite",

        hp: 35,
        maxhp: 35,
        attack: 6,
        spd: 10,

        img: i.stg1_5,

        reward: {
            xp: 6,
            fame: 1,
            money: 3,
            souls: 1,
        },
    },

    {
        id: 6,
        name: "불씨를 품은 임프",
        type: "burn",
        rarity: "normal",

        hp: 28,
        maxhp: 28,
        attack: 7,
        spd: 14,

        img: i.stg1_6,

        reward: {
            xp: 4,
            fame: 0,
            money: 2,
            souls: 0,
        },
    },

    {
        id: 7,
        name: "타락한 광부",
        type: "tank",
        rarity: "normal",

        hp: 55,
        maxhp: 55,
        attack: 5,
        spd: 6,

        img: i.stg1_7,

        reward: {
            xp: 5,
            fame: 1,
            money: 2,
            souls: 0,
        },
    },

    {
        id: 8,
        name: "찢어진 날개의 악마",
        type: "fast",
        rarity: "elite",

        hp: 30,
        maxhp: 30,
        attack: 10,
        spd: 18,

        img: i.stg1_8,

        reward: {
            xp: 8,
            fame: 2,
            money: 4,
            souls: 1,
        },
    },

    {
        id: 9,
        name: "지옥 문지기",
        type: "boss",
        rarity: "boss",

        hp: 80,
        maxhp: 80,
        attack: 12,
        spd: 12,

        img: i.stg1_9,

        reward: {
            xp: 20,
            fame: 5,
            money: 10,
            souls: 2,
        },
    },
]