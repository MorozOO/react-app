import React, { useEffect, useState } from "react";
import "./First.css";

const First = () => {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [arr, setarr] = useState([1, 2, 45]);
  useEffect(() => {
    console.log("effect");
  }, [showCounter]);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const addElement = () => {
    setarr([...arr, Math.round(Math.random() * 20)]);
  };
  return (
    <div className="wrapper">
      <div style={{ textAlign: "center" }}>
        <button onClick={addElement}>add</button>
        <br />
        {arr.join(", ")}
      </div>
      <button onClick={() => setShowCounter(!showCounter)}>Show</button>
      {showCounter && (
        <div className="btns" style={{ color: "white" }}>
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </div>
      )}
    </div>
  );
};

export default First;
