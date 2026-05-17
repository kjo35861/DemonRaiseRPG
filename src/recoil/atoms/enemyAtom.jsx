import { atom } from "recoil";

export const enemyState = atom({
    key: "enemyState",

    default: {
        id: 0,
        name: "",
        type: "",
        rarity: "",

        hp: 1,
        maxhp:1,

        attack: 0,

        reward: {
            xp: 0,
            fame: 0,
            money: 0,
            souls: 0,
        }
    },
})