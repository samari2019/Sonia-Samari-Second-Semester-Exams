import React from 'react';
import useReducerCustom from "../Hooks/UseReducer"

function Reducer() {
    const { arthimetic, dispatchArthimetic } = useReducerCustom()
    return (
        <div>
            <h4>Counter: {arthimetic.val} </h4>
            <button onClick={() => dispatchArthimetic({
                type: "INCREMENT"
            })} >Increment</button>
            <button onClick={() => dispatchArthimetic({
                type: "DECREMENT"
            })} >Decrement</button>
            <button onClick={() => dispatchArthimetic({
                type: "RESET"
            })} >Reset</button>
            <div>
                <input type="number"  onChange={(e) => dispatchArthimetic({
                    type: "SET",
                    payload: Number(e.target.value)
                })} ></input>

            </div>
        </div>
    );
} 

export default Reducer;
