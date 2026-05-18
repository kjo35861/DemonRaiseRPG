
export function calcFinalAttack(player) {

    let finalAttack = player.attack;

    player.buffs.forEach(buff => {
        if (buff.type === "attackUp") {
            finalAttack += player.attack * buff.value;
        }
    });

    player.debuffs.forEach(debuff => {
        if (debuff.type === "attackDown") {
            finalAttack -= player.attack * debuff.value;
        }
    });

    if (player.corruption >= 40) {
        finalAttack = Math.floor(finalAttack * 1.2);
    }

    return finalAttack;
}
