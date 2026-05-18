import { css } from "@emotion/react";
import { hellStone, longcommon, inventoryImg, commonImg } from "../../assets/images";


export const layout = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px;
    
    background-image: url(${hellStone});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 108%;
`

export const leftlayout = css`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
`

export const text = css`
    font-size: 60px;
    color: #ffffffab;
    padding-bottom: 150px;
    `

export const stageimg = (img) => css`
    position: relative;
    width: 700px;
    height: 300px;
    border-radius: 10px;
    border: 2px solid #ff6b4a22;
    outline: 5px solid #7a1c1c88;
    box-shadow: 5px 5px 15px #7070707a;
    
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 108%;
`


export const rightlayout = css`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
`

export const listlayout = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    list-style: none;
    padding: 20px;
    margin: 0;
    gap: 20px;
    width: 870px;
    height: 600px;

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #120909bb;
    }

    &::-webkit-scrollbar-thumb {
        background: #884c4cbb;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #64373788;
    }
`

export const listblock = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 70px;
    gap: 10px;
    width: 600px;
    height: 120px;

    background-image: url(${longcommon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;

    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }


    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const listid = css`
    padding-left: 10px;
    width: 80px;
    height: 70px;
    font-size: 50px;
    /* border-right: 2px solid #dbdbdb88; */
`

export const listname = css`
    flex-grow: 1;
    font-size: 35px;
    height: 50px;
    border-left: 2px solid #dbdbdb88;
`

export const recommand = css`
    position: absolute;
    top: 5%;
    right: 12%;
`

export const check = css`
    width: 400px;
    height: 150px;
    margin-top: 30px;
    background-color: #00000000;
    outline: none;
    border: none;

    font-family: "DungGeunMo";
    font-size: 30px;
    color: #d8d2d2;
    
    background-image: url(${inventoryImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;

    filter: drop-shadow(10px 8px 5px #000000);

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000);
    }
`

export const back = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 2%;
    left: 1%;

    background-image: url(${commonImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;

    filter: drop-shadow(10px 8px 5px #000000bb);

    & > svg {
        font-size: 50px;
        color: #d8d2d288;
    }

    &:hover {
        scale: 98%;
    }
    
    &:active {
        scale: 95%;
        filter: brightness(0.7) drop-shadow(10px 8px 5px #000000bb);
    }
`