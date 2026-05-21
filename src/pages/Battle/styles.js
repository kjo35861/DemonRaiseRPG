import { css } from "@emotion/react";
import { actionButton, actionController, roundView, turnView } from "../../assets/images";


export const layout = (stage) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    background-image: url(${stage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const toplayout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 1780px;
    height: 600px;
`

export const round = css`
    width: 800px;
    height: 100px;

    background-image: url(${roundView});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const turn = css`
    position: relative;
    width: 300px;
    height: 100px;

    background-image: url(${turnView});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ChrEne = css`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    padding: 0 120px;
`

export const playerchr = (img) => css`
    width: 400px;
    height: 400px;
    margin-bottom: 80px;

    background-image: ${img ? `url(${img})` : "none"};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    

    filter: drop-shadow(-8px 8px 10px #72727266);
`

export const enemychr = (img) => css`
    width: 400px;
    height: 400px;
    margin-bottom: 80px;

    background-image: ${img ? `url(${img})` : "none"};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    filter: drop-shadow(8px 8px 10px #57575744);
`


export const bottomlayout = css`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    height: 200px;
    gap: 5px;
    background-color: #00000000;
`

export const user = css`
    display: flex;
    flex-direction: column;
    width: 450px;
    border-top-right-radius: 150px;
    padding: 15px;
    gap: 10px;
    font-size: 18px;
    background-color: #00000000;
    box-shadow: inset 0 0 10px #dbdbdb50;
`

export const userinfo = css`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #dbdbdb50;
    padding: 5px;
    width: 350px;
    font-size: 18px;
`

export const actionbuttons = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    gap: 30px;
    width: 870px;
    height: 180px;

    background-image: url(${actionController});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
    filter: drop-shadow(0 0 5px #414141);

    & > button {
        font: inherit;
        font-size: 40px;
        border: none;
        outline: none;
        width: 150px;
        height: 130px;
        background-color: #00000000;
        color: #dbdbdb;


        background-image: url(${actionButton});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        filter: drop-shadow(10px 8px 5px #00000088);

        &:hover {
            scale: 98%;
        }
        
        &:active {
            scale: 95%;
            filter: brightness(0.7) drop-shadow(10px 8px 5px #00000088);
        }
    }
`
export const enemy = css`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 450px;
    border-top-left-radius: 150px;
    padding: 15px;
    gap: 10px;
    font-size: 18px;
    background-color: #00000000;
    box-shadow: inset 0 0 10px #dbdbdb50;
`

export const enemyinfo = css`
    display: flex;
    flex-direction: column;
    align-items: end;
    border-top: 1px solid #dbdbdb50;
    padding: 5px;
    width: 350px;
    font-size: 18px;
`