import { css, keyframes } from "@emotion/react";
import { logoImg } from "../../assets/images/index.js";


const blink = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
`;

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const logo = css`
    width: 1000px;
    height: 500px;

    background-image: url(${logoImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const pressStart = css`
    font-size: 50px;
    font-weight: 800;
    color: #b9b9b9;
    animation: ${blink} 1.5s infinite;
    text-shadow: 5px 5px 5px #5f5f5fb6;
    cursor: default;
`;