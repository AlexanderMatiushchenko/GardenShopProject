import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addAction } from "../../store/slices/cartSlice";
import styles from "./index.module.css";
import OneItemCounter from "../OneItemCounter"
import DiscountPercent from "../DiscountPercent";



function OneItem({ products }) {
  const baseURL = "http://localhost:3333";
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
 

  if (!product) {
    return <div>Product not found</div>;
  }


  const handleAddToCart = () => {
    dispatch(addAction(product));
    setIsAdded(true);
    console.log(product);

    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className={styles.containerWithProduct}>
      <div className={styles.containerWithProduktImg}>
        <div className={styles.continerWithSmallImg}>
          <img src={`${baseURL}${product.image}`} alt={product.title} />
          <img src={`${baseURL}${product.image}`} alt={product.title} />
          <img src={`${baseURL}${product.image}`} alt={product.title} />
        </div>
        <img src={`${baseURL}${product.image}`} alt={product.title} />
      </div>
      <div className={styles.containerWithPriceTitleandDescription}>
        <h3>{product.title}</h3>
        <div className={styles.containerWithDescTitlePriceBtn}>

          
          <div className={styles.priceContainer}>
          <div className={styles.percentContainer}>
          <DiscountPercent discountedItem={product}/>
          </div>
            <h2>{product.discont_price} €</h2>
          
          <h4>{product.price} €</h4>
          
          </div>
          
          <div className={styles.counterAndCartBtn}>
          <OneItemCounter product={product}/>
          <button
            className={isAdded ? styles.addedButton : styles.addToCartButton}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? "Added" : "Add to cart"}
          </button>
          </div>
        </div>
       <p>{`${product.description}`}</p>
      </div>
    </div>
  );
}

export default OneItem;
