import { useRecoilState } from "recoil";
import { playerState } from "../../recoil/atoms/playerAtom";
import useEnemy from "../useEnemy/useEnemy";


function usePlayer() {
    
    const [player, setPlayer] = useRecoilState(playerState);
    const {enemy} = useEnemy();

    const damagePlayer = (damage) => {
        setPlayer((prev) => ({
            ...prev,
            hp: Math.max(prev.hp - damage, 0)
        }));
    }

    const rewardPlayerMoney = (reward) => {
        setPlayer((prev) => ({
            ...prev,
            money: Math.max(player.money + reward, 0),
        }))
    }

    const rewardPlayerSoul = (reward) => {
        setPlayer((prev) => ({
            ...prev,
            souls: Math.max(player.souls + reward, 0),
        }))
    }

    return {
        player,
        setPlayer,
        damagePlayer,
        rewardPlayerMoney,
        rewardPlayerSoul,
    }
}

export default usePlayer;