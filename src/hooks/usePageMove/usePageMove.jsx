import { useNavigate } from "react-router";

function usePageMove() {

    const navigate = useNavigate();

    const moveToLobby = () => {
        navigate("/lobby", {
            replace: true,
        });
    };

    // const moveToInventory = () => {
    //     navigate("/inventory");
    // };

    return {
        moveToLobby,
        // moveToInventory,
    };
}

export default usePageMove;