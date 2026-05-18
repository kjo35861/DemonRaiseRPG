import usePageMove from "../../hooks/usePageMove/usePageMove";
import * as s from "./styles";
import { monsters } from "../../contents/monster";
import { getRandomMonster } from "../../utils/getRandomMonster";
import { useEffect, useState } from "react";
import usePlayer from "../../hooks/usePlayer/usePlayer";
import useEnemy from "../../hooks/useEnemy/useEnemy";
import { calcFinalAttack } from "../../utils/calcFinalAttack";


function Battle() {
    const { moveToLobby, moveToReward } = usePageMove();

    const { player, damagePlayer } = usePlayer();
    const { enemy, setEnemy, damageEnemy } = useEnemy();

    const finalAttack = calcFinalAttack(player);


    const handleActionsOnClick = (e) => {
        const actionButton = e.target.value;
        if (actionButton === "attack") {
            damageEnemy(finalAttack)
        }

        if (actionButton === "skills") {
            damagePlayer(10);
        }

        if (actionButton === "action") {

        }

        if (actionButton === "escape") {
            moveToLobby();
        }
    }

    useEffect(() => {
        if (!enemy) {
            setEnemy(getRandomMonster())
        }
    }, [])

    useEffect(() => {
        if (player.hp === 0) {
            moveToReward("lose");
        }

        if (enemy?.hp === 0) {
            moveToReward("win");
        }
    }, [player.hp, enemy?.hp])

    return (
        <>
            <div css={s.layout}>
                <div css={s.toplayout}></div>
                <div css={s.bottomlayout}>
                    <div css={s.user}>
                        {player.username}
                        <div css={s.userinfo}>
                            <div>{player.hp} / {player.maxhp}</div>
                            <div></div>
                        </div>
                    </div>

                    <div css={s.actionbuttons}>
                        <button onClick={handleActionsOnClick} value={"attack"}>공격</button>
                        <button onClick={handleActionsOnClick} value={"skills"}>스킬</button>
                        <button onClick={handleActionsOnClick} value={"action"}>행동</button>
                        <button onClick={handleActionsOnClick} value={"escape"}>도망</button>
                    </div>

                    <div css={s.enemy}>
                        {
                            enemy && (
                                <>
                                    {enemy.rarity} {enemy.name}
                                    <div css={s.enemyinfo}>
                                        <div>{enemy.hp} / {enemy.maxhp}</div>
                                        <div>{enemy.attack}</div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Battle;