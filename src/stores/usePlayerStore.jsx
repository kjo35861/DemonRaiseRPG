import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    
    username: "user",
    hp: 50,
    maxhp: 50,

    lv: 1,
    xp: 0,
    needxp: 10,
    fame: 0,

    attack: 5,
    skilldmg: 1,
    critchance: 0,
    critdamage: 1.2,

    vit: 0,
    str: 0,
    dex: 0,
    agi: 0,
    int: 0,
    luk: 0,

    lucky: 0,
    money: 0,
    souls: 0,

    speed: 10,
    corruption: 0,

    inventory: [],
    relics: [],

    buffs: [],
    debuffs: [],

    
}))