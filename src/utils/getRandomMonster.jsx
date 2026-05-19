import {stage1Monsters} from "../contents/monsters/stage1Monsters";
import {stage2Monsters} from "../contents/monsters/stage2Monsters";
import {stage3Monsters} from "../contents/monsters/stage3Monsters";
import {stage4Monsters} from "../contents/monsters/stage4Monsters";
import {stage5Monsters} from "../contents/monsters/stage5Monsters";
import {stage6Monsters} from "../contents/monsters/stage6Monsters";
import {stage7Monsters} from "../contents/monsters/stage7Monsters";
import {stage8Monsters} from "../contents/monsters/stage8Monsters";


export function getRandomMonster(stage) {

    const allStage = [
        null, 
        stage1Monsters, 
        stage2Monsters, 
        stage3Monsters, 
        stage4Monsters, 
        stage5Monsters, 
        stage6Monsters, 
        stage7Monsters, 
        stage8Monsters,
    ];

    const monsters = allStage[stage]

    if (!monsters) return null;

    const randomIndex = Math.floor(
        Math.random() * stage1Monsters.length
    );
    return {
        ...monsters[randomIndex]
    }
}
