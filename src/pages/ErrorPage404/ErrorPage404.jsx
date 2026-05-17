import usePageMove from "../../hooks/usePageMove/usePageMove";


function ErrorPage404() {
    const { moveToLobby } = usePageMove();

    return (
        <>
            <div>404 에러</div>
            <button onClick={moveToLobby}>돌아가기</button>
        </>
    )
}

export default ErrorPage404;