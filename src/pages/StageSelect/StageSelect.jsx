import { useParams } from "react-router";
import * as s from "./styles";
import usePageMove from "../../hooks/usePageMove/usePageMove";
import { stage } from "../../contents/stage";
import useStageSelect from "../../hooks/useStageSelect/useStageSelect";
import { IoIosReturnLeft } from "react-icons/io";

function StageSelect() {
    const { moveToLobby, moveToBattle } = usePageMove();
    const { selectstage, setStageSelect, clearSelect } = useStageSelect();

    const handleBackOnClick = () => {
        clearSelect();
        moveToLobby();
    }

    const handleCheckOnClick = () => {
        moveToBattle();
    }

    return (
        <>
            <div css={s.layout}>
                <div css={s.leftlayout}>
                    <div css={s.text}>스테이지 선택</div>
                    <div css={s.stageimg(stage[selectstage-1].bg)}></div>
                    <div css={s.back} onClick={handleBackOnClick}><IoIosReturnLeft /></div>
                </div>
                <div css={s.rightlayout}>
                    <ul css={s.listlayout}>
                        {
                            stage.map(stg => (

                                <li css={s.listblock} id={stg.id} onClick={() => setStageSelect(stg.id)}>
                                    <div css={s.listid}>{stg.id}</div>
                                    <div css={s.listname}>{stg.name}</div>
                                    <p css={s.recommand}>권장 Lv.{stg.rec}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <button css={s.check} onClick={handleCheckOnClick} >확 인</button>
                </div>
            </div>
        </>
    )
}

export default StageSelect;