import { css } from "@emotion/react";
import { battleImg, goldIcon, logoImg, soulIcon } from "../../assets/images";


export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 80px;
    width: 100%;
    height: 100%;
`

export const sign = (param) => css`
    width: 400px;
    height: 200px;

    background-image: url(${logoImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    filter: saturate(${param === "win" ? 1 : 0});
`

export const currency = (param) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div {
        display: flex;
        gap: 80px;
        
    
        & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            font-size: 20px;
        }

        & .goldIcon {
            width: 50px;
            height: 50px;
            background-image: url(${goldIcon});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            overflow: auto;
        }

        & .soulIcon {
            width: 50px;
            height: 50px;
            background-image: url(${soulIcon});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        & .text {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 150px;

            & .numb {
                font-size: 24px;
                color: ${param === "win" ? "inherit" : "red"};
            }
        }
    }
`

export const xp = css`

`

export const check = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;

    font-size: 40px;

    background-image: url(${battleImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }
`