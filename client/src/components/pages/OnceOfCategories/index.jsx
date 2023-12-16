import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import DiscountPercent from "../../DiscountPercent";
import SortAndFilterOption from "../../SortAndFilterOption";
import sortProducts from "../../../utils/api";
import { addAction } from "../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

function OnceOfCategories({ products }) {
  const baseURL = "http://localhost:3333";
  const frontendURL = "http://localhost:3000";
  const { id } = useParams();
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("default");
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isActiveSortOptions, setIsActiveSortOptions] = useState(false);

  useEffect(() => {
    const filteredItems = products.filter((el) => el.price);
    const sortedItems = sortProducts(filteredItems, sortBy);

    if (priceFrom && priceTo) {
      const filteredAndSortedItems = sortedItems.filter(
        (product) =>
          product.price >= parseFloat(priceFrom) && product.price <= parseFloat(priceTo)
      );
      setFilteredProducts(filteredAndSortedItems);
    } else {
      setFilteredProducts(sortedItems);
    }
  }, [products, sortBy, priceFrom, priceTo]);

  const handleSort = (option) => {
    setSortBy(option);
    setSelectedSortOption(option);
    setIsActiveSortOptions(false);
  };

  const handlePriceFilterChange = (from, to) => {
    setPriceFrom(from);
    setPriceTo(to);
  };

  const handleAddToCart = (product) => {
    dispatch(addAction(product));
    console.log("Product added to cart:", product);
  };

  const productsToDisplay = filteredProducts.filter((product) => product.categoryId === parseInt(id));

    


  return (
    <div className={styles.mainContainer}>
      <SortAndFilterOption
        priceFrom={priceFrom}
        priceTo={priceTo}
        handlePriceFilterChange={handlePriceFilterChange}
        handleSort={handleSort}
        selectedSortOption={selectedSortOption}
      />
    <div className={styles.continerMainProduct}>
      {productsToDisplay.map((el) => (
        
        <div className={styles.containerWithProduct} key={el.id}>
            <div className={styles.containerWithImgAndBtn} >
            <img src={`${baseURL}${el.image}`} alt={el.title} />
            <button onClick={() => handleAddToCart(products)}>Add to cart</button>
            <DiscountPercent discountedItem={el} />
            {/* <button>Add to cart</button> */}
            </div>
            <Link to={`${frontendURL}/products/${el.id}`}>
            <div className={styles.titleAndPriceContainer}>
            <h3>{el.title}</h3>
            <div className={styles.priceContainer}>
            {el.discont_price !== null ? (
                <>
                  <h2>{el.discont_price} €</h2>
                  <p><del>{el.price} €</del></p>
                </>
              ) : (
                <h2>{el.price} €</h2>
              )}
              </div>
            </div>
            </Link>
        </div>
      ))}
    </div>
    </div>
  );
      }  

export default OnceOfCategories;