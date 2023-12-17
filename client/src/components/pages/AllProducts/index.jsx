import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../../store/slices/cartSlice";
import styles from "../../pages/AllProducts/index.module.css";
import SortAndFilterOption from "../../SortAndFilterOption";
import sortProducts from "../../../utils/api";
import DiscountPercent from "../../DiscountPercent";

function AllProducts({ products }) {
  const baseURL = "http://localhost:3333";
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState('default');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isActiveSortOptions, setIsActiveSortOptions] = useState(false);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);

  useEffect(() => {
    const filterAndSortProducts = () => {
      let filteredItems = [...products];

      if (priceFrom && priceTo) {
        filteredItems = filteredItems.filter(
          (product) =>
            product.price >= parseFloat(priceFrom) && product.price <= parseFloat(priceTo)
        );
      }

      if (showDiscountedOnly) {
        filteredItems = filteredItems.filter((product) => product.discont_price !== null);
      }

      const sortedItems = sortProducts(filteredItems, sortBy);

      setFilteredProducts(sortedItems);
    };

    filterAndSortProducts();
  }, [products, sortBy, priceFrom, priceTo, showDiscountedOnly]);

  const handleAddToCart = (product) => {
    dispatch(addAction(product));
    console.log("Product added to cart:", product);
  };

  const handleSort = (option) => {
    setSortBy(option);
    setIsActiveSortOptions(false);
  };

  const handlePriceFilterChange = (from, to) => {
    setPriceFrom(from);
    setPriceTo(to);
  };

  return (
    <div className={styles.allProductsMain}>
      <h1>All products</h1>
      <SortAndFilterOption
       priceFrom={priceFrom}
       priceTo={priceTo}
       handlePriceFilterChange={handlePriceFilterChange}
       handleSort={handleSort}
       selectedSortOption={sortBy}
       isActiveSortOptions={isActiveSortOptions}
       onDiscountedOnlyChange={setShowDiscountedOnly}
       showDiscountedOnly={showDiscountedOnly}
      />
      <div className={styles.containerWithAllProducts}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.containerWithImgAndPrice}>
            <div className={styles.containerWithImgAndBtn}>
              
              <img src={`${baseURL}${product.image}`} alt="" />
              <DiscountPercent discontPrice={product.discont_price} price={product.price} />
              <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
            <div className={styles.containerPriceAndTitle}>
              <h3>{product.title}</h3>
              {product.discont_price !== null ? (
                <>
                  <h2>{product.discont_price} €</h2>
                  <p><del>{product.price} €</del></p>
                </>
              ) : (
                <h2>{product.price} €</h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;