import { create } from "zustand";

export const playerState = create({
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

        getFinalAttack: () => {
            const player = get(playerState);    // player의 정보를 가져옴 (체력 공격력 버프 등)
            let finalAttack = player.attack;

            player.buffs.forEach(buff => {          // player 기본 공격력 * 버프수치 +
                if (buff.type === "attackUp") {
                    finalAttack += player.attack * buff.value;
                }
            });

            player.debuffs.forEach(debuff => {          // player 기본 공격력 * 디버프수치 -
                if (debuff.type === "attackDown") {
                    finalAttack -= player.attack * debuff.value;
                }
            });

            if (player.corruption >= 40) {
                finalAttack = Math.floor(finalAttack * 1.2);
            }

            return finalAttack;
        }
    }
})