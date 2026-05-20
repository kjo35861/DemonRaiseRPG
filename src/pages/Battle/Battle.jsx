import * as s from "./styles";
import useBattle from "../../hooks/useBattle/useBattle";
import { stage } from "../../contents/stage";
import useStageSelect from "../../hooks/useStageSelect/useStageSelect";
import { useEffect } from "react";
import useEnemy from "../../hooks/useEnemy/useEnemy";
import { userChr } from "../../assets/images/character";


function Battle() {
    const {player, attackEnemy, useSkill, useAction, escapeBattle} = useBattle();
    const {selectstage} = useStageSelect();
    const {enemy} = useEnemy();
    
    
    
    return (
        <>
            <div css={s.layout(stage[selectstage-1].bg)}>
                <div css={s.toplayout}>
                    <div css={s.playerchr(userChr[player.class-1])}></div>
                    {
                        enemy && (
                            <div css={s.enemychr(enemy.img)}></div>
                        )
                    }
                </div>
                <div css={s.bottomlayout}>
                    <div css={s.user}>
                        {player.username}
                        <div css={s.userinfo}>
                            <div>{player.hp} / {player.maxhp}</div>
                            <div></div>
                        </div>
                    </div>

                    <div css={s.actionbuttons}>
                        <button onClick={attackEnemy} value={"attack"}>공격</button>
                        <button onClick={useSkill} value={"skills"}>스킬</button>
                        <button onClick={useAction} value={"action"}>행동</button>
                        <button onClick={escapeBattle} value={"escape"}>도망</button>
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