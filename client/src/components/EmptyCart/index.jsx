
import React from "react";
import styles from "./index.module.css";

function EmptyCart() {
  return (
    <div>
      <div className={styles.container}>
        <h1>Shopping cart</h1>
        <div></div>
        <button>Back to the store</button>
      </div>
      <div className={styles.emptyCartPandButton}>
        <p>Looks like you have no items in your basket currently.</p>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
}

export default EmptyCart;
