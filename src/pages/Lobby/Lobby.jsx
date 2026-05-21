import * as s from "./styles";
import { GrMoney } from "react-icons/gr";
import { ImExit } from "react-icons/im";
import { FaRegLightbulb } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { goldIcon } from "../../assets/images";
import usePageMove from "../../hooks/usePageMove/usePageMove";
import usePlayer from "../../hooks/usePlayer/usePlayer";
import PlayerInfos from "./InfoList/PlayerInfos";
import { useEffect } from "react";
import useStageSelect from "../../hooks/useStageSelect/useStageSelect";


function Lobby() {
    const { setStageSelect, setLevelSelect } = useStageSelect();
    const { moveToInventory, moveToStageSelect, moveToShop } = usePageMove();
    const { player, restPlayer } = usePlayer();


    useEffect(() => {
        restPlayer();
        setStageSelect(1);
        setLevelSelect(null);
    }, [])

    return (
        <>
            <div css={s.layout}>
                <div css={s.toplayout}>
                    <div css={s.profile}>{player.username}</div>
                    <div css={s.logo}></div>
                    <div css={s.money}>
                        <div css={s.gold}>
                            <div className="goldIcon"></div>
                            <div>{player.money}G</div>
                        </div>
                        <div css={s.soul}>
                            <div className="soulIcon"></div>
                            <div>{player.souls}</div>
                        </div>
                    </div>
                </div>
                <div css={s.bottomlayout}>
                    <div css={s.infolayout}>
                        <div css={s.infotitleline}>
                            <div>Info</div>
                            <div className="subinfo">
                                <div css={s.skillpoint}><BiPlusMedical />
                                    {
                                        player.skillpoints > 0 &&
                                        < div css={s.remaining}>!</div>
                                    }
                            </div>
                            <div css={s.tip} data-tooltip=""><FaRegLightbulb /></div>
                        </div>
                    </div>
                    <ul css={s.infoList}>
                        <PlayerInfos />
                    </ul>
                </div>
                <div css={s.buttons}>
                    <div css={s.buttonstop}>
                        <div css={s.classchange}>
                            <span>전</span>
                            <span>직</span>
                        </div>
                        <div css={s.noset}></div>
                        <div css={s.lord}>
                            <span>군</span>
                            <span>주</span>
                            <span>토</span>
                            <span>벌</span>
                        </div>
                        <div css={s.buttonstopright}>
                            <div css={s.battle} onClick={moveToStageSelect}>
                                <span>사</span>
                                <span>냥</span>
                            </div>
                            <div css={s.inventory}
                                onClick={moveToInventory}>인벤토리</div>
                        </div>
                    </div>
                    <div css={s.buttonsbottom}>
                        <div css={s.shop}>상 점</div>
                        <div css={s.skill}>스킬트리</div>
                        <div css={s.quit}><ImExit /></div>
                    </div>
                </div>

            </div>
        </div >
        </>
    )
}

export default Lobby;