import * as s from "./styles";
import usePlayer from "../../../hooks/usePlayer/usePlayer";
import { PiSwordDuotone } from "react-icons/pi";
import { BiPlusMedical } from "react-icons/bi";
import { GiBouncingSword } from "react-icons/gi";
import { GiPointySword } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { FaMagic } from "react-icons/fa";
import { LuClover } from "react-icons/lu";

function PlayerInfos() {

    const { player } = usePlayer();

    const playerInfos = [
        {
            label: "레벨",
            value: player.lv,
        },
        {
            label: "경험치",
            value: player.xp + " / " + player.needxp,
        },
        {
            label: "명성치",
            value: player.fame,
        },
        {
            label: (<><BiPlusMedical />체력</>),
            value: player.hp + " / " + player.maxhp,
        },
        {
            label: (<><PiSwordDuotone />공격력</>),
            value: player.attack,
        },
        {
            label: (<><FaMagic />스킬 피해</>),
            value: "x " + player.skilldmg,
        },
        {
            label: (<><GiBouncingSword />크리티컬 확률</>),
            value: player.critchance + "%",
        },
        {
            label: (<><GiPointySword />크리티컬 데미지</>),
            value: "x " + player.critdamage,
        },
        {
            label: (<><TbShoe /> 스피드</>),
            value: player.speed,
        },
        {
            label: (<><LuClover /> 행운</>),
            value: player.lucky,
        },
        {
            label: "오염도",
            value: player.corruption,
        },
        {
            label: "Vit",
            value: player.str,
            detail: (
                <>
                    1당 <BiPlusMedical /> 12 증가
                </>
            ),
        },
        {
            label: "Str",
            value: player.vit,
            detail: (
                <>
                    1당 <PiSwordDuotone /> 2 증가
                </>
            ),
        },
        {
            label: "Dex",
            value: player.dex,
            detail: (
                <>
                    1당 <GiBouncingSword />0.35%, <GiPointySword /> x0.02 증가
                </>
            ),
        },
        {
            label: "Agi",
            value: player.agi,
            detail: (
                <>
                    1당 <TbShoe />1 증가
                </>
            ),
        },
        {
            label: "Int",
            value: player.int,
            detail: (
                <>
                    1당 <FaMagic /> 2% 증가
                </>
            ),
        },
        {
            label: "Luk",
            value: player.luk,
            detail: (
                <>
                    1당 <LuClover /> 증가
                </>
            ),
        },

    ]

    return (
        <>
            {
                playerInfos.map(info => (
                    <li css={s.liststyle}>
                        <div>{info.label} : {info.value}</div>

                        <div css={s.detailtext}>
                            {info.detail ? info.detail : null}
                        </div>
                    </li>
                ))
            }
        </>
    )
}

export default PlayerInfos;




