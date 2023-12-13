
import React from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../../store/slices/cartSlice";
import styles from "../../pages/AllProducts/index.module.css";

function AllProducts({ products }) {
  const baseURL = "http://localhost:3333";

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addAction(product)); 
    console.log("Product added to cart:", product);
  };

  return (
    <div className={styles.allProductsMain}>
      <h1>All products</h1>
      <div className={styles.containerWithAllProducts}>
        {products.map((product) => (
          <div key={product.id} className={styles.containerWithImgAndPrice}>
            <div className={styles.containerWithImgAndBtn}>
              <img src={`${baseURL}${product.image}`} alt="" />
              <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
            <div className={styles.containerPriceAndTitle}>
              <h3>{product.title}</h3>
              {product.discont_price !== null ? (
                <>
                  <h2>${product.discont_price}</h2>
                  <p><del>${product.price}</del></p>
                </>
              ) : (
                <h2>${product.price}</h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
