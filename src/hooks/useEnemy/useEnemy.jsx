import { useEnemyStore } from "../../stores/useEnemyStore";

function useEnemy() {

    const enemy = useEnemyStore((state) => state.enemy);

    const setEnemy = useEnemyStore((state) => state.setEnemy);

    const damageEnemy = useEnemyStore((state) => state.damageEnemy);

    const clearEnemy = useEnemyStore((state) => state.clearEnemy);

    return {
        enemy,
        setEnemy,
        damageEnemy,
        clearEnemy,
    };
}

export default useEnemy;