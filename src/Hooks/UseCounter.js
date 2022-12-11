import React from "react";
import "../App.css";
 function useCounter(InitialValue) {
     const [count, setCount] = React.useState(InitialValue || 0);
     
     const Increment = () =>  setCount((prevValue) => prevValue + 1);
     const Decrement = () =>  setCount((prevValue) => prevValue - 1);
     const Reset = () =>  setCount(InitialValue || 0);

     return{
         count,
         Increment,
         Decrement,
         Reset,
         setCount,
     }
 }
export default useCounter;
