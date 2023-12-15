import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../store/slices/cartSlice";
import styles from "./index.module.css";
import CartSum from "../../CartSum";
import EmptyCart from "../../EmptyCart";
import ProductCounter from "../../ProductCounter";

function Basket() {
  const baseURL = "http://localhost:3333";
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.list);

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
  };


  return (
    <div className={styles.basketMainContainer}>
      {cartItems.length === 0 ? (
        <EmptyCart />
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
                    {el.discont_price ? (
                    <>
                     <h5>
                        <del>{el.price} €</del>
                      </h5>
                         <h3>{el.discont_price} €</h3>
                    </>
                     ) : (
                       <h3>{el.price} €</h3>
                     )}
                      <ProductCounter productId={el.id} count={el.count} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CartSum cartItems={cartItems} onRemoveItem={handleRemoveItem} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
