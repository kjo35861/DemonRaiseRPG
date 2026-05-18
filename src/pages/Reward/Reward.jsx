import { useEffect } from "react";
import useEnemy from "../../hooks/useEnemy/useEnemy";
import usePageMove from "../../hooks/usePageMove/usePageMove";
import usePlayer from "../../hooks/usePlayer/usePlayer";
import * as s from "./styles";
import { useParams } from "react-router";


function Reward() {
    const param = useParams();
    const { moveToLobby } = usePageMove();
    const { player, rewardPlayerMoney, rewardPlayerSoul } = usePlayer();
    const { enemy, clearEnemy } = useEnemy();

    const loseMoney = Math.floor(player.money * 5 / 100);

    const handleCheckOnClick = () => {
        moveToLobby();
        clearEnemy();
    }

    useEffect(() => {

        if (param.result === "win") {
            rewardPlayerMoney(enemy.reward.money);
            rewardPlayerSoul(enemy.reward.souls);
        }

        if (param.result === "lose") {
            rewardPlayerMoney(-loseMoney);
        }
    }, [])

    return (
        <>
            <div css={s.layout}>
                <div css={s.sign(param.result)} />
                <div css={s.currency(param.result)}>
                    <div>
                        <div>
                            <div className="goldIcon"></div>
                            <div className="text">:
                                <p className="numb">{
                                    param.result === "win" ? enemy.reward.money : "- " + loseMoney}</p>
                                <p>G</p>
                            </div>
                        </div>
                        <div>
                            <div className="soulIcon"></div>
                            <div className="text">:
                                <p className="numb">{
                                    param.result === "win" ? enemy.reward.souls : ""}</p>
                                <p>개</p>
                            </div>
                        </div>
                    </div>
                    <div css={s.xp}>경험치</div>
                </div>
                <div css={s.check} onClick={handleCheckOnClick}>확 인</div>
            </div>
        </>
    )
}

export default Reward;