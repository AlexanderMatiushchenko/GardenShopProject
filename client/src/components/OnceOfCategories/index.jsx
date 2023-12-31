import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import DiscountPercent from "../DiscountPercent";
import SortAndFilterOption from "../SortAndFilterOption";
import sortProducts from "../../utils/api";
import { addAction } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import NavBar from "../NavBar";
import { backendURL,frontendURL } from "../../utils/var";

function OnceOfCategories({ products, categories}) {
 
  const { id } = useParams();
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("default");
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isActiveSortOptions, setIsActiveSortOptions] = useState(false);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
  const [isAdded,setIsAdded]=useState(false);
  const [addedProducts, setAddedProducts] = useState([]);

  useEffect(() => {
    let filteredItems = products.filter((el) => el.price);
    if (showDiscountedOnly) {
      filteredItems = filteredItems.filter((el) => el.discont_price !== null);
    }
  
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
  }, [products, sortBy, priceFrom, priceTo, showDiscountedOnly]);
  


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
    setIsAdded(true);

    setAddedProducts((prevAddedProducts) => [...prevAddedProducts, product.id]);

    setTimeout(()=>{
      setAddedProducts((prevAddedProducts) =>
      prevAddedProducts.filter((id) => id !== product.id)
    );
  }, 1500);
  };

  const productsToDisplay = filteredProducts.filter((product) => product.categoryId === parseInt(id));

  const selectedCategory = categories.find((category) => category.id === parseInt(id));

  const links = [
    { to: "/", label: "Home page" },
    { to: "/categories/all", label: "Categories" },
    selectedCategory && { to: `/categories/${selectedCategory.id}`, label: selectedCategory.title },
  ].filter(Boolean); 

  return (
    <>
    <NavBar links={links} />
    <div className={styles.mainContainer}>
    <h1>{selectedCategory ? selectedCategory.title : "Loading..."}</h1>
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
    <div className={styles.continerMainProduct}>
      {productsToDisplay.map((el) => (
        <div className={styles.containerWithProduct} key={el.id}>
            <div className={styles.containerWithImgAndBtn} >
            <img src={`${backendURL}${el.image}`} alt={el.title} />
          <div className={styles.discountContainer}>
            <DiscountPercent discontPrice={el.discont_price} price={el.price} />
            </div>
            <button
                className={
                  addedProducts.includes(el.id)
                    ? styles.addedButton
                    : styles.addToCartButton
                }
                onClick={() => handleAddToCart(el)}
                disabled={addedProducts.includes(el.id)}
              >
                {addedProducts.includes(el.id) ? "Added" : "Add to cart"}
              </button>
            </div>
            <Link to={`${frontendURL}/products/${el.id}`}>
            <div className={styles.titleAndPriceContainer}>
            <h3>{el.title}</h3>
            <div className={styles.priceContainer}>
            {el.discont_price !== null ? (
                <>
                  <h2>{el.discont_price} €</h2>
                  <del><p>{el.price} €</p></del>
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
    </>
  );
      }  

export default OnceOfCategories;