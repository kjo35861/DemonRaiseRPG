import usePageMove from "../../hooks/usePageMove/usePageMove";
import * as s from "./styles";

function ErrorPage404() {
    const { moveToLobby } = usePageMove();

    return (
        <>
            <div css={s.layout}>
                <div css={s.logo}></div>
                <div css={s.errorText}>ErrorCode : 404 Not Found</div>
                <button onClick={moveToLobby}>돌아가기</button>
            </div>
        </>
    )
}

export default ErrorPage404;