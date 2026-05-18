import { create } from "zustand";

export const useStage = create((set) => ({

    selectstage: 1,
    selectlevel: null,


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
            selectlevel: null,
        })
    },
}))