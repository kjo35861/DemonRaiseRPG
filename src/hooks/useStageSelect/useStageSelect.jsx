import { useStage } from "../../stores/useStageStore";

function useStageSelect() {
    const selectstage = useStage((state) => state.selectstage);
    
    const nowRound = useStage((state) => state.nowround);

    const nowTurn = useStage((state) => state.nowturn);

    const setStageSelect = useStage((state) => state.setSelectStg);

    const setLevelSelect = useStage((state) => state.setSelectLvl);

    const clearSelect = useStage((state) => state.clearSelect);

    const nextRound = useStage((state) => state.nextRound);

    const clearRound = useStage((state) => state.clearRound);

    const nextTurn = useStage((state) => state.nextTurn);

    const clearTurn = useStage((state) => state.clearTurn);

    return {
        selectstage,
        nowRound,
        nowTurn,
        setStageSelect,
        setLevelSelect,
        clearSelect,
        nextRound,
        clearRound,
        nextTurn,
        clearTurn,
    }
}

export default useStageSelect;