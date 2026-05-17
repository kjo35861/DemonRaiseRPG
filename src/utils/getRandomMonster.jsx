import { monsters } from "../contents/monster";


export function getRandomMonster() {

    const randomIndex = Math.floor(
        Math.random() * monsters.length
    );
    return {
        ...monsters[randomIndex]
    }
}
