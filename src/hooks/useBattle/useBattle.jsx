import { useEffect } from "react";
import useEnemy from "../useEnemy/useEnemy";
import usePageMove from "../usePageMove/usePageMove";
import usePlayer from "../usePlayer/usePlayer";
import { getRandomMonster } from "../../utils/getRandomMonster";
import { calcFinalAttack } from "../../utils/calcFinalAttack";


export function useBattle() {
    const { moveToLobby, moveToReward } = usePageMove();
    const { damagePlayer, player, } = usePlayer();
    const { enemy, setEnemy, damageEnemy, clearEnemy } = useEnemy();


    useEffect(() => {
        if (!enemy) {
            setEnemy(
                getRandomMonster(),
            );
        }
    }, []);

    useEffect(() => {

        if (player.hp === 0) {
            moveToReward("lose");
        }

        if (enemy?.hp === 0) {
            moveToReward("win");
        }

    }, [player.hp, enemy?.hp])


    const attackEnemy = () => {
        const finalAttack = calcFinalAttack(player);
        damageEnemy(finalAttack);
    };

    const useSkill = () => {

    };

    const useAction = () => {
        
    };

    const escapeBattle = () => {
        clearEnemy();
        moveToLobby();

    };

    return {
        player,
        enemy,

        attackEnemy,
        useSkill,
        useAction,
        escapeBattle,
    }
}

export default useBattle;