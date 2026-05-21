import * as i from "../../assets/images/monster/stage2/index";


export const stage2Monsters = [

    {
        id: 101,
        name: "불타는 임프",
        type: "fast",

        hp: 130,
        maxhp: 130,
        attack: 20,
        spd: 28,

        img: i.stg2_1,

        reward: {
            xp: 7,
            fame: 1,
            money: 4,
            souls: 0,
        },
    },

    {
        id: 102,
        name: "화염 먹는 악귀",
        type: "tank",

        hp: 240,
        maxhp: 240,
        attack: 14,
        spd: 10,

        img: i.stg2_2,

        reward: {
            xp: 8,
            fame: 1,
            money: 4,
            souls: 0,
        },
    },

    {
        id: 103,
        name: "녹아내린 기사",
        type: "normal",

        hp: 180,
        maxhp: 180,
        attack: 22,
        spd: 20,

        img: i.stg2_3,

        reward: {
            xp: 8,
            fame: 1,
            money: 5,
            souls: 0,
        },
    },

    {
        id: 104,
        name: "핏빛 사냥개",
        type: "crit",

        hp: 140,
        maxhp: 140,
        attack: 28,
        spd: 34,

        img: i.stg2_4,

        reward: {
            xp: 9,
            fame: 1,
            money: 5,
            souls: 0,
        },
    },

    {
        id: 105,
        name: "불꽃 감시자",
        type: "ranged",

        hp: 120,
        maxhp: 120,
        attack: 26,
        spd: 30,

        img: i.stg2_5,

        reward: {
            xp: 9,
            fame: 2,
            money: 5,
            souls: 0,
        },
    },

    {
        id: 106,
        name: "지옥 방패병",
        type: "tank",

        hp: 280,
        maxhp: 280,
        attack: 16,
        spd: 12,

        img: i.stg2_6,

        reward: {
            xp: 10,
            fame: 2,
            money: 5,
            souls: 0,
        },
    },

    {
        id: 107,
        name: "재의 망령",
        type: "debuff",

        hp: 150,
        maxhp: 150,
        attack: 20,
        spd: 22,

        img: i.stg2_7,

        reward: {
            xp: 10,
            fame: 2,
            money: 6,
            souls: 0,
        },
    },

    {
        id: 108,
        name: "폭주한 화염술사",
        type: "magic",

        hp: 160,
        maxhp: 160,
        attack: 30,
        spd: 26,

        img: i.stg2_8,

        reward: {
            xp: 12,
            fame: 3,
            money: 7,
            souls: 1,
        },
    },
    {
        id: 109,
        name: "용암 심장 수호자",
        type: "boss",

        hp: 450,
        maxhp: 450,
        attack: 35,
        spd: 18,

        img: i.stg2_9,

        reward: {
            xp: 35,
            fame: 8,
            money: 18,
            souls: 2,
        },
    },
]