import { useNavigate } from "react-router";

function usePageMove() {

    const navigate = useNavigate();

    const moveToLobby = () => {
        navigate("/lobby", {
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

    return {
        moveToLobby,
        moveToBattle,
        moveToInventory,
        moveToShop,
    };
}

export default usePageMove;