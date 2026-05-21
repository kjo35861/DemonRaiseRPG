import { create } from "zustand";

export const useStage = create((set) => ({

    selectstage: 1,
    nowround: 1,
    nowturn: 1,


    setSelectStg: (value) => {
        set((state) => ({
            selectstage: value,
        }))
    },

    setSelectLvl: (value) => {
        set({
            selectlevel: value,
        });
    },

    clearSelect: () => {
        set({
            selectstage: 1,
            nowround: 0,
        })
    },


    nextRound: () => {
        set((state) => ({
            nowround: state.nowround + 1,
        }))
    },

    clearRound: () => {
        set({
            nowround: 0,
        })
    },

    nextTurn: () => {
        set((state) => ({
            nowturn: state.nowturn + 1,
        }))
    },

    clearTurn: () => {
        set((state) => ({
            nowturn: 0,
        }))
    },
}))