import React from "react";
import styles from "./index.module.css"

const CartSum = ({ cartItems, handleRemoveItem }) => {
  const calculateItems = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  const calculatePrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  return (
    <div className={styles.containerWithOrderDetails}>
      <h2>Order details</h2>
      <h3>{calculateItems()} items</h3>
      <h3>Total:</h3>
      <h1>{calculatePrice()} €</h1>
      <input type="text" placeholder="Name" />
      <input type="number" placeholder="Phone number" />
      <input type="text" placeholder="Email" />
      <button>Order</button>
    </div>
  );
};

export default CartSum;
