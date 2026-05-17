import { useEffect } from "react";
import { goldIcon, soulIcon } from "../../assets/images";
import useEnemy from "../../hooks/useEnemy/useEnemy";
import usePageMove from "../../hooks/usePageMove/usePageMove";
import usePlayer from "../../hooks/usePlayer/usePlayer";
import * as s from "./styles";
import { getRandomMonster } from "../../utils/getRandomMonster";
import { useParams } from "react-router";


function Reward() {
    const param = useParams();
    const { moveToLobby } = usePageMove();
    const {player, setPlayer, rewardPlayerMoney, rewardPlayerSoul} = usePlayer();
    const {enemy, setEnemy} = useEnemy();

    const loseMoney = Math.floor(player.money * 5 / 100);

    const handleCheckOnClick = () => {
        moveToLobby();
        setEnemy(getRandomMonster());
        setPlayer(prev => ({
            ...prev,
            hp: player.maxhp * 0.2,
        }))
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
                                param.result === "win" ? enemy.reward.money :"- " + loseMoney}</p>
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