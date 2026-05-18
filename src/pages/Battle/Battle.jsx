import * as s from "./styles";
import useBattle from "../../hooks/useBattle/useBattle";
import { stage } from "../../contents/stage";


function Battle() {
    const {player, enemy, attackEnemy, useSkill, useAction, escapeBattle} = useBattle();
    const stagebg = stage[0].bg;
    return (
        <>
            <div css={s.layout(stagebg)}>
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