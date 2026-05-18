import { useStage } from "../../stores/useStageStore";

function useStageSelect() {
    const selectstage = useStage((state) => state.selectstage);
    
    const selectlevel = useStage((state) => state.selectlevel);

    const setStageSelect = useStage((state) => state.setSelectStg);

    const setLevelSelect = useStage((state) => state.setSelectLvl);

    const clearSelect = useStage((state) => state.clearSelect);


    return {
        selectstage,
        selectlevel,
        setStageSelect,
        setLevelSelect,
        clearSelect,
    }
}

export default useStageSelect;