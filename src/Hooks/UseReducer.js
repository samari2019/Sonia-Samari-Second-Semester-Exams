import { useReducer } from "react";




const useReducerCustom = () => {
    const initialState = { val: 0 };
    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return { val: state.val + 1 };
        };
        if (action.type === "DECREMENT") {
            return { val: state.val - 1 };
        }
        if (action.type === "RESET") {
            return { val: 0 };
        }
        if (action.type === "SET") {
            return { val: action.payload };
        }
        return state;
    }
    const [arthimetic, dispatchArthimetic] = useReducer(reducer, initialState)
    return {
        arthimetic,
        dispatchArthimetic,
    }

};


export default useReducerCustom