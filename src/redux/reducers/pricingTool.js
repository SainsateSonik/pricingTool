import actionTypes from "../actionTypes";

const initialState = {
    calculatorToggle: false,
    resultToggle: false,
    animationStat: false,
    inputValues: {
        currentMortgage: "",
        loanToValue: "",
        newMortgage: "",
        monthlyAmortization: "",
        otherMortgages: "",
        yearlyIncome: "",
        municipality: ""
    }
};

export default (state = {...initialState}, action) => {

    const handleUpdate = () => {
        const id = action.payload.id,
              val = action.payload.val;
        switch(id) {
            case "in-1":
                return { ...state, inputValues: { ...state.inputValues, currentMortgage: val }};
            case "in-2":
                return { ...state, inputValues: { ...state.inputValues, loanToValue: val }};
            case "in-3":
                return { ...state, inputValues: { ...state.inputValues, newMortgage: val }};
            case "in-4":
                return { ...state, inputValues: { ...state.inputValues, monthlyAmortization: val }};
            case "in-5":
                return { ...state, inputValues: { ...state.inputValues, otherMortgages: val }};
            case "in-6":
                return { ...state, inputValues: { ...state.inputValues, yearlyIncome: val }};
            case "selection":
                return { ...state, inputValues: { ...state.inputValues, municipality: val }};
            default:
                return state;
        }
    };

    switch(action.type) {
        case actionTypes.TOGGLE_CALCULATOR:
            return { ...state, calculatorToggle: !state.calculatorToggle };
        case actionTypes.TOGGLE_RESULT:
            return { ...state, resultToggle: !state.resultToggle };
        case actionTypes.SET_RESULT:
            return { ...state, resultToggle: action.resultStat};
        case actionTypes.SET_ANIMATION:
            return { ...state, animationStat: action.animationStat}
        case actionTypes.COLLAPSE_PRICING_TOOL:
            return { ...state, calculatorToggle: false, resultToggle: false, animationStat: false };
        case actionTypes.CHANGE_HANDLER:
            return handleUpdate();
        case actionTypes.CALCULATE_RATES:
            return state;
        case actionTypes.RESET_TOOL: 
            return initialState;
        default:
            return state;
    }
};