import * as s from "./styles";

function MainLayout({ children }) {

    return (
        <>
            <div css={s.layout}>
                <div css={s.mainContainer}>
                    <div css={s.container}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout;