import actionTypes from "../actionTypes";

const initalState = {
    isAuthenticated: null,
    inputs: {
        username: "",
        password: ""
    }
};

export default (state=initalState, action) => {
    const handleChange = () => {
        const  id= action.payload.name;
        const val= action.payload.value;
        return { ...state, inputs: { ...state.inputs, [id]: val }};
    };

    const validate = () => {
        const stat = state.inputs.username === "sonik" && state.inputs.password === "letin";
        return { ...state, isAuthenticated: stat };
    };

    const logout = () => {
        return initalState;
    };

    switch(action.type) {
        case actionTypes.AUTH_CHANGE_HANDLER: return handleChange();
        case actionTypes.VALIDATE_USER: return validate();
        case actionTypes.LOG_OUT: return logout();
        default: return state;
    }
};