import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/slices/cartSlice";
import styles from "./index.module.css";
import CartSum from "../CartSum";
import EmptyCart from "../EmptyCart";
import ProductCounter from "../ProductCounter";
import { Link } from "react-router-dom";

import { backendURL,frontendURL } from "../../utils/var";
import DiscountPercent from "../DiscountPercent";

function Basket() {

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
        <Link to={`${frontendURL}/products/all`}>
            <button>Back to the store</button>
            </Link>
          </div>
          <div className={styles.containerWithProductAndInputsForm}>
         
            <div className={styles.mapProductsRenderContainer}>
              {cartItems.map((el) => (
                
                <div className={styles.containerWithProduct} key={el.id}>
                 <Link to={`${frontendURL}/products/${el.id}`}>
                  <div className={styles.discountContainer}>
                  <DiscountPercent discontPrice={el.discont_price} price={el.price}/> 
                  </div> 
                  <img src={`${backendURL}${el.image}`} alt={el.title} /></Link> 
                  <div className={styles.containerWithContainersTitleCounterAndPrice}>
                    <div className={styles.containerProductTitleAndCloseBtn}>
                    <Link to={`${frontendURL}/products/${el.id}`}> 
                     <p>{el.title}</p></Link>
          
                      <button onClick={() => handleRemoveItem(el.id)}>&times;</button>
                    </div>
                    
                    <div className={styles.containerWithPriceAndCounter}>
                    {el.discont_price ? (
                    <>
                     
                        <del><h5>{el.price} €</h5></del>
                      
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
