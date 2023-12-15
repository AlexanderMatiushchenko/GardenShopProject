
import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../store/slices/cartSlice";
import styles from "./index.module.css";

const ProductCounter = ({ productId, count }) => {
  const dispatch = useDispatch();

  const cartCounterIncrement = () => {
    dispatch(increment(productId));
  };

  const cartCounterDecrement = () => {
    dispatch(decrement(productId));
  };

  return (
    <div className={styles.containerWithProductCounter}>
      <button onClick={cartCounterIncrement}>+</button>
      <h3>{count}</h3>
      <button onClick={cartCounterDecrement}>-</button>
    </div>
  );
};

export default ProductCounter;
