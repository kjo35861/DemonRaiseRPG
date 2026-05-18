import { usePlayerStore } from "../../stores/usePlayerStore";
import useEnemy from "../useEnemy/useEnemy";


function usePlayer() {

    const player = usePlayerStore();

    const restPlayer = () => {
        usePlayerStore.setState((state) => ({
            hp: state.maxhp,
        }))
    }

    const damagePlayer = (damage) => {
        usePlayerStore.setState((state) => ({
            hp: Math.max(state.hp - damage, 0),
        }));
    }

    const rewardPlayerMoney = (reward) => {
        usePlayerStore.setState((state) => ({
            money: Math.max(state.money + reward, 0),
        }));
    }

    const rewardPlayerSoul = (reward) => {
        usePlayerStore.setState((state) => ({
            souls: Math.max(state.souls + reward, 0),
        }));
    }

    return {
        player,
        restPlayer,
        damagePlayer,
        rewardPlayerMoney,
        rewardPlayerSoul,
    }
}

export default usePlayer;