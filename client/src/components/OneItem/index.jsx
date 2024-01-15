import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addMoreProduct } from "../../store/slices/cartSlice";
import styles from "./index.module.css";
import OneItemCounter from "../OneItemCounter"
import DiscountPercent from "../DiscountPercent";
import NavBar from "../NavBar";
import { backendURL } from "../../utils/var";



function OneItem({ products, categories}) {

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(1)
  const dispatch = useDispatch();
 


  if (!product) {
    return <div>Product not found</div>;
  }


  const handleAddToCart = () => {
    dispatch(addMoreProduct({ ...product, count }));
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };
  

  const selectedCategory = categories.find((category) => category.id === product.categoryId);

const links = [
  { to: "/", label: "Home page" },
  { to: "/categories/all", label: "Categories" },
  selectedCategory && { to: `/categories/${selectedCategory.id}`, label: selectedCategory.title },
  product && { to: `/products/${product.id}`, label: product.title },
].filter(Boolean);

  return (

    <>
    <NavBar links={links} />
    <div className={styles.containerWithProduct}>
      <div className={styles.containerWithProduktImg}>
        <div className={styles.continerWithSmallImg}>
          <img src={`${backendURL}${product.image}`} alt={product.title} />
          <img src={`${backendURL}${product.image}`} alt={product.title} />
          <img src={`${backendURL}${product.image}`} alt={product.title} />
        </div>
        <div className={styles.containerImgAndDiscountPercent}>
        <img src={`${backendURL}${product.image}`} alt={product.title} />
        <div className={styles.discountContainer  }>
        <DiscountPercent discontPrice={product.discont_price} price={product.price}/>
        </div>
        </div>
      </div>
      <div className={styles.containerWithPriceTitleandDescription}>
        <h3>{product.title}</h3>
        <div className={styles.containerWithDescTitlePriceBtn}>

          
          <div className={styles.priceContainer}>
      {product.discont_price !== null ? (
        <>
            <h2>{product.discont_price} €</h2>
          <h4>{product.price} €</h4>
          </>
          ):(
          <h2>{product.price} €</h2>
          
          )}
          </div>
          <div className={styles.counterAndCartBtn}>
          <OneItemCounter product={product} onCountChange={setCount} />

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
    </>
  );
}

export default OneItem;
