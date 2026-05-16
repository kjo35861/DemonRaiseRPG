import usePageMove from "../../hooks/usePageMove/usePageMove";
import * as s from "./styles";

function Home() {
    const {moveToLobby} = usePageMove();
    
    return (
        <>
            <div css={s.layout} onClick={moveToLobby}>
                <div css={s.logo}></div>
                <div css={s.pressStart}>
                    Press the Button...
                </div>
            </div>
        </>
    )
}

export default Home;