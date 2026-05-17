import { selector } from "recoil";
import { playerState } from "../atoms/playerAtom";


export const finalAttackState = selector({
    key: "finalAttackState",

    get: ({ get }) => {
        const player = get(playerState);    // player의 정보를 가져옴 (체력 공격력 버프 등)
        let finalAttack = player.attack;

        player.buffs.forEach(buff => {          // player 기본 공격력 * 버프수치 +
            if(buff.type === "attackUp") {
                finalAttack += player.attack * buff.value;
            }
        });

        player.debuffs.forEach(debuff => {          // player 기본 공격력 * 디버프수치 -
            if(debuff.type === "attackDown") {
                finalAttack -= player.attack * debuff.value;
            }
        });

        if (player.corruption >= 40) {
            finalAttack = Math.floor(finalAttack * 1.2);
        }

        return finalAttack;

    }
})