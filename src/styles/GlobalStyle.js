import { css } from "@emotion/react";
import DGM from "../assets/fonts/DungGeunMo.ttf";

export const GlobalStyle = css`

    @font-face {
        font-family: "DungGeunMo";
        src: url(${DGM}) format("truetype");
    }

    html, body, #root {
        margin: 0;
        height: 100vh;

        font-family: "DungGeunMo";
        color: #d8d2d2;

        background: radial-gradient(
            circle at top,
            #8b0000 0%,
            #3b0000 20%,
            #120000 45%,
            #05070d 100%
        );

        overflow-y: auto;
    }

    * {
        box-sizing: border-box;
    }
`;