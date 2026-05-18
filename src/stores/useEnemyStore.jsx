import { create } from "zustand";
// import { enemy } from "../pages/Battle/styles";

export const useEnemyStore = create((set) => ({
    
    enemy: null,

    setEnemy: (enemyData) => {
        set({
            enemy: enemyData
        });
    },

    damageEnemy: (damage) => {
        set((state) => ({
            enemy: {
                ...state.enemy,

                hp: Math.max(state.enemy.hp - damage, 0),
            }
        }))
    },

    clearEnemy: () => {
        set({
            enemy: null,
        })
    },
}))