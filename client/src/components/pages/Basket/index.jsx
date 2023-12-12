import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeItem } from "../../../store/slices/cartSlice";
import styles from "./index.module.css";

function Basket() {
  const baseURL = "http://localhost:3333";
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.list);

  const cartCounterIncrement = (productId) => {
    dispatch(increment(productId));
  };

  const cartCounterDecrement = (productId) => {
    dispatch(decrement(productId));
  };

  const calculateItems = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  const calculatePrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0);
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
  };

  return (
    <div className={styles.basketMainContainer}>
      {cartItems.length === 0 ? (
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
        
      ) : (
        <div>
          <div className={styles.containerWithH1ShoppingCart}>
            <h1>Shopping cart</h1>
            <div></div>
            <button>Back to the store</button>
          </div>

          <div className={styles.containerWithProductAndInputsForm}>
            <div className={styles.mapProductsRenderContainer}>
              {cartItems.map((el) => (
                <div className={styles.containerWithProduct} key={el.id}>
                  <img src={`${baseURL}${el.image}`} alt={el.title} />
                  <div className={styles.containerWithContainersTitleCounterAndPrice}>
                    <div className={styles.containerProductTitleAndCloseBtn}>
                      <p>{el.title}</p>
                      <button onClick={() => handleRemoveItem(el.id)}>x</button>
                    </div>

                    <div className={styles.containerWithPriceAndCounter}>
                      <del>
                        <h5>{el.discont_price ? `${el.discont_price} €` : null}</h5>
                      </del>
                      <h3>{el.price} €</h3>
                      <div className={styles.containerWithProductCounter}>
                        <button onClick={() => cartCounterIncrement(el.id)}>+</button>
                        <h3>{el.count}</h3>
                        <button onClick={() => cartCounterDecrement(el.id)}>-</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
