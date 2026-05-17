import { useNavigate } from "react-router";
import usePlayer from "../usePlayer/usePlayer";

function usePageMove() {
    const { player } = usePlayer();

    const navigate = useNavigate();

    const moveToLobby = () => {
        navigate("/lobby", {
            replace: true,
        });
    };

    const moveToBattle = () => {
        if (player.hp > 0) {
            navigate("/battle", {
                replace: true,
            });
        } else {
            alert("체력이 0입니다.")
        }
    }

    const moveToInventory = () => {
        navigate("/inventory", {
            replace: true,
        });
    };

    const moveToShop = () => {
        navigate("/shop", {
            replace: true,
        });
    };

    const moveToReward = (result) => {
        navigate(`/reward/${result}`, {
            replace: true,
        });
    };

    return {
        moveToLobby,
        moveToBattle,
        moveToInventory,
        moveToShop,
        moveToReward,
    };
}

export default usePageMove;