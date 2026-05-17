import { useRecoilState } from "recoil";
import { getRandomMonster } from "../../utils/getRandomMonster";
import { enemyState } from "../../recoil/atoms/enemyAtom";


function useEnemy() {

    const [enemy, setEnemy] = useRecoilState(enemyState); 

    const damageEnemy = (damage) => {
        setEnemy((prev) => ({
            ...prev,
            hp: Math.max(prev.hp - damage, 0),
        }));
    }

    return {
        enemy,
        setEnemy,
        damageEnemy,
    }
}

export default useEnemy;