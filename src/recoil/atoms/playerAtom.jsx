import { atom } from "recoil";

export const playerState = atom({
    key: "playerState",
    
    default: {
        username: "user",
        hp: 50,
        maxhp: 50,

        lv: 1,
        xp: 0,
        needxp: 10,
        fame: 0,

        attack: 5,
        critchance: 0,
        critdamage: 1.2,

        vit: 0,
        str: 0,
        dex: 0,
        agi: 0,
        int: 0,
        luk: 0,

        money: 0,
        souls: 0,

        corruption: 0,

        inventory: [],
        relics: [],

        buffs: [],
        debuffs: [],
    }
})