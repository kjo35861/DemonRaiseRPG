import * as i from "../../assets/images/monster/stage4/index";

export const stage4Monsters = [

    {
        id: 301,
        name: "비명 먹는 악마",
        type: "normal",

        hp: 1800,
        maxhp: 1800,
        attack: 110,
        spd: 65,

        img: i.stg4_1,

        reward: { xp: 26, fame: 4, money: 10, souls: 1 },
    },

    {
        id: 302,
        name: "타락한 흑기사",
        type: "tank",

        hp: 3200,
        maxhp: 3200,
        attack: 85,
        spd: 28,

        img: i.stg4_2,

        reward: { xp: 28, fame: 4, money: 11, souls: 1 },
    },

    {
        id: 303,
        name: "지옥 창기병",
        type: "fast",

        hp: 1600,
        maxhp: 1600,
        attack: 145,
        spd: 110,

        img: i.stg4_3,

        reward: { xp: 30, fame: 5, money: 12, souls: 1 },
    },

    {
        id: 304,
        name: "죽음의 마안",
        type: "magic",

        hp: 1500,
        maxhp: 1500,
        attack: 150,
        spd: 90,

        img: i.stg4_4,

        reward: { xp: 33, fame: 5, money: 13, souls: 1 },
    },

    {
        id: 305,
        name: "광란의 투사",
        type: "berserk",

        hp: 2500,
        maxhp: 2500,
        attack: 130,
        spd: 50,

        img: i.stg4_5,

        reward: { xp: 36, fame: 6, money: 14, souls: 1 },
    },

    {
        id: 306,
        name: "검은 사슬 감시자",
        type: "tank",

        hp: 3500,
        maxhp: 3500,
        attack: 90,
        spd: 22,

        img: i.stg4_6,

        reward: { xp: 39, fame: 6, money: 15, souls: 1 },
    },

    {
        id: 307,
        name: "심연의 처형인",
        type: "crit",

        hp: 1700,
        maxhp: 1700,
        attack: 155,
        spd: 120,

        img: i.stg4_7,

        reward: { xp: 42, fame: 7, money: 17, souls: 1 },
    },

    {
        id: 308,
        name: "저주 퍼뜨리는 망령",
        type: "debuff",

        hp: 2100,
        maxhp: 2100,
        attack: 100,
        spd: 58,

        img: i.stg4_8,

        reward: { xp: 46, fame: 8, money: 19, souls: 2 },
    },

    {
        id: 309,
        name: "멸망의 수호 악마",
        type: "boss",

        hp: 7000,
        maxhp: 7000,
        attack: 180,
        spd: 70,

        img: i.stg4_9,

        reward: { xp: 120, fame: 25, money: 60, souls: 4 },
    },
]