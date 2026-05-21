import { useEffect } from "react";
import useEnemy from "../useEnemy/useEnemy";
import usePageMove from "../usePageMove/usePageMove";
import usePlayer from "../usePlayer/usePlayer";
import { getRandomMonster } from "../../utils/getRandomMonster";
import { calcFinalAttack } from "../../utils/calcFinalAttack";
import useStageSelect from "../useStageSelect/useStageSelect";
import { useStage } from "../../stores/useStageStore";


export function useBattle() {
    const { moveToLobby, moveToReward } = usePageMove();
    const {selectstage, nextRound, clearRound, nextTurn, clearTurn} = useStageSelect();
    const { damagePlayer, player, } = usePlayer();
    const { enemy, setEnemy, damageEnemy, clearEnemy } = useEnemy();


    useEffect(() => {
        if (!enemy) {
            setEnemy(
                getRandomMonster(selectstage),
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
        damagePlayer(10)

    };

    const useAction = () => {
        nextRound();
        nextTurn();
    };

    const escapeBattle = () => {
        clearRound();
        clearTurn();
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