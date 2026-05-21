import { css } from "@emotion/react";
import { logoImg } from "../../assets/images";


export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const logo = css`
    width: 600px;
    height: 300px;

    background-image: url(${logoImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const errorText = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 800px;
    height: 100px;

    font-size: 50px;
`