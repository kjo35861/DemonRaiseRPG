import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const mainContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 1800px;
    height: 800px;
    background-color: #121320d2;
    border-radius: 6px;
    box-shadow:
        inset 0 0 15px rgba(255,255,255,0.03),
        inset 0 0 30px rgba(0,0,0,0.9),
        0 0 10px rgba(0,0,0,0.8),
        0 0 25px rgba(0,0,0,0.6);
`

export const container = css`
    position: relative;
    box-sizing: border-box;
    width: 1780px;
    height: 780px;
    border-radius: 6px;
    background: linear-gradient(
        180deg,
        #0d0f14 0%,
        #151a23 40%,
        #0a0c10 100%
    );
    box-shadow:
    inset 0 0 15px rgba(255,255,255,0.03),
    inset 0 0 30px rgba(0,0,0,0.9),
    0 0 10px rgba(0,0,0,0.8),
    0 0 25px rgba(0,0,0,0.6);
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0;

        border-radius: 6px;

        box-shadow:
            inset 0 0 10px rgba(255,255,255,0.05),
            0 0 8px rgba(255,255,255,0.03);

        pointer-events: none;
}
    
`