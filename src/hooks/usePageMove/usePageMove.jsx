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

    const moveToStageSelect = () => {
        navigate("/stageselect", {
            replace: true,
        });
    };

    const moveToBattle = () => {
        navigate("/battle", {
            replace: true,
        });

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
        moveToStageSelect,
        moveToBattle,
        moveToInventory,
        moveToShop,
        moveToReward,
    };
}

export default usePageMove;