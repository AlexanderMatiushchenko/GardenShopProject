import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.css";

function OneItemCounter({ product, onCountChange }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const itemIncrement = () => {
    setCount(count + 1);
    onCountChange(count + 1);
  };

  const itemDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(count - 1);
    }
  };

  return (
    <div className={styles.containerWithProductCounter}>
      <button onClick={itemIncrement}>+</button>
      <h3>{count}</h3>
      <button onClick={itemDecrement}>-</button>
    </div>
  );
}

export default OneItemCounter;
