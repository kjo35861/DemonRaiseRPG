import * as s from "./styles";
import usePlayer from "../../../hooks/usePlayer/usePlayer";

function PlayerInfos() {

    const { player } = usePlayer();

    const playerInfos = [
        {
            label: "레벨",
            value:  player.lv,
        },
        {
            label: "경험치",
            value:  player.xp + " / " + player.needxp,
        },
        {
            label: "명성치",
            value: player.fame,
        },
        {
            label: "현재 체력",
            value:  player.hp + " / " + player.maxhp,
        },
        {
            label: "공격력",
            value: player.attack,
        },
        {
            label: "크리티컬 확률",
            value: player.critchance,
        },
        {
            label: "크리티컬 데미지",
            value: "x" + player.critdamage,
        },
        {
            label: "오염도",
            value: player.corruption,
        },
        {
            label: "Vit",
            value: player.str,
            detail: "n당 체력 n증가",
        },
        {
            label: "Str",
            value: player.vit,
            detail: "n당 체력 공격력 n증가",
        },
        {
            label: "Dex",
            value: player.dex,
            detail: "n당 크리티컬 확률, 데미지 n증가",
        },
        {
            label: "Agi",
            value: player.agi,
            detail: "n당 속공 n증가",
        },
        {
            label: "Int",
            value: player.int,
            detail: "n당 스킬피해 n%증가",
        },
        {
            label: "Luk",
            value: player.luk,
            detail: "n당 보상 획득량 n증가",
        },

    ]

    return (
        <>
            {
                playerInfos.map(info => (
                    <li>
                        {info.label} : {info.value}

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




