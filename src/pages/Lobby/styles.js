import { css } from "@emotion/react";
import { logoImg, 
    classchangeImg, lordImg, battleImg, inventoryImg, shopImg, commonImg, 
    lobbyBG, 
    goldIcon, soulIcon,
    skillImg,
} from "../../assets/images/index.js";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
    font-size: 45px;
    gap: 30px;
`

export const toplayout = css`
    display: flex;
    justify-content: space-between;
    height: 70px;
`

export const profile = css`
    display: flex;
    border-radius: 4px;
    border: 2px solid #ff6b4a88;
    outline: 5px solid #7a1c1c;
    padding: 10px;
    background-color: rgba(18, 10, 10, 0.88);
    box-shadow: inset 0 0 10px #dbdbdb88;
`

export const logo = css`
    position: absolute;
    width: 150px;
    height: 76px;

    left: 815px;

    background-image: url(${logoImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`

export const money = css`
    display: flex;
    gap: 40px;

    & > div {
        border-radius: 4px;
        border: 2px solid #ff6b4a88;
        outline: 5px solid #7a1c1c;
        padding: 10px;
        background-color: rgba(18, 10, 10, 0.88);
        box-shadow: inset 0 0 10px #dbdbdb88;
    }
`

export const gold = css`
    display: flex;

    & .goldIcon {
        width: 45px;
        height: 45px;
        background-image: url(${goldIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
`

export const soul = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    & .soulIcon {
        width: 45px;
        height: 45px;
        background-image: url(${soulIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

`

export const bottomlayout = css`
    display: flex;
    gap: 20px;
    width: 1740px;
    height: 640px;
    padding: 15px;
    border-radius: 4px;
    border: 2px solid #ff6b4a88;
    outline: 5px solid #7a1c1c;
    box-shadow: inset 0 0 10px #dbdbdb88;

    background-image: url(${lobbyBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 110%;
`

export const infolayout = css`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 610px;
    background-color: rgba(233, 212, 156, 0.05);
    border-radius: 8px;
    border: 1px solid #ff6b4a3d;
    /* outline: 5px solid #7a1c1c; */
    /* box-shadow: inset 0 0 10px #dbdbdb88; */
    padding: 10px 30px;
    
`

export const infotitleline = css`
    display: flex;
    justify-content: space-between;

    & .subinfo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 540px;
        height: 45px;
        gap: 10px;
        font-size: 40px;
    }
`

export const infoList = css`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    border-top: 1px solid #dbdbdb;
    gap: 20px;
    margin: 0;
    padding-top: 20px;
    width: 100%;
    height: 100%;
    font-size: 25px;
    color: #dbdbdb;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #12090988;
    }

    &::-webkit-scrollbar-thumb {
        background: #884c4c88;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #64373788;
    }

    & > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const buttons = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
`

export const buttonstop = css`
    display: flex;
    flex-grow: 1;
    gap: 20px;
`
export const buttonstopright = css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 2;
`

export const buttonsbottom = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
`

export const classchange = css`
    display: flex;
    width: 190px;
    height: 460px;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-lr;
    font-size: 35px;
    gap: 80px;

    background-image: url(${classchangeImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 110%;
    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }
`

export const noset = css`
    flex: 0.8;

`

export const lord = css`
    display: flex;
    width: 190px;
    height: 460px;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-lr;
    font-size: 40px;
    gap: 20px;

    background-image: url(${lordImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 140%;
    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }
`

export const battle = css`
    display: flex;
    width: 390px;
    height: 265px;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    gap: 40px;

    background-image: url(${battleImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 105%;
    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }
`

export const inventory = css`
    display: flex;
    width: 390px;
    height: 175px;
    justify-content: center;
    align-items: center;
    font-size: 40px;

    background-image: url(${inventoryImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }
`
export const shop = css`
    display: flex;
    width: 300px;
    height: 120px;
    justify-content: center;
    align-items: center;
    font-size: 40px;

    background-image: url(${shopImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }
`

export const skill = css`
    display: flex;
    width: 300px;
    height: 120px;
    justify-content: center;
    align-items: center;
    font-size: 35px;

    background-image: url(${skillImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }
`

export const quit = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;


    background-image: url(${commonImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    filter: brightness(1.3) drop-shadow(5px 5px 5px #00000099);

    & > svg {
        color: #7a1c1c;
    }

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(1) drop-shadow(5px 5px 5px #00000099);
    }
`

export const tip = css`
    position: relative;

    &::after {
        content: attr(data-tooltip);

        position: absolute;
        display: flex;

        padding: 8px 12px;
        border-radius: 8px;
        width: 500px;
        height: 400px;

        background-color: #3b3b3b;
        color: white;
        box-shadow: inset 0 0 20px #dbdbdb77;

        z-index: 100;
        opacity: 0;
        visibility: hidden;

        transition: all 0.2s ease-in-out;

        font-size: 20px;
    }

    &:hover::after {
        opacity: 0.9;
        visibility: visible;
    }
`

export const skillpoint = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #ff64;
    border: 2px solid #ff6b4a3d;
`
export const remaining = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    top: -25%;
    right: -25%;
    width: 20px;
    height: 20px;
    background-color: red;
    box-shadow: inset 0 0 5px #dbdbdb;
    font-size: 24px;
    color: #dbdbdb;
`