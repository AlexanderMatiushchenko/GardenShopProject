import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../../store/slices/cartSlice";
import styles from "../../pages/AllProducts/index.module.css";
import SortAndFilterOption from "../../SortAndFilterOption";
import sortProducts from "../../../utils/api";
import DiscountPercent from "../../DiscountPercent";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import { backendURL,frontendURL } from "../../../utils/var";



function AllProducts({ products }) {
 
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState('default');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isActiveSortOptions, setIsActiveSortOptions] = useState(false);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
  const [isAdded,setIsAdded]=useState(false);
  const [addedProducts, setAddedProducts] = useState([]);

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
    setIsAdded(true);

    setAddedProducts((prevAddedProducts) => [...prevAddedProducts, product.id]);

    setTimeout(()=>{
      setAddedProducts((prevAddedProducts) =>
      prevAddedProducts.filter((id) => id !== product.id)
    );
  }, 1500);
  };

  const handleSort = (option) => {
    setSortBy(option);
    setIsActiveSortOptions(false);
  };

  const handlePriceFilterChange = (from, to) => {
    setPriceFrom(from);
    setPriceTo(to);
  };

  const links = [
    { to: "/", label: "Home page" },
    { to: "/products/all", label: "All products" },
  ];

  return (
    <> 
    <NavBar links={links} />
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
              
              <img src={`${backendURL}${product.image}`} alt="" />
              <div className={styles.discountContainer}>
              <DiscountPercent discontPrice={product.discont_price} price={product.price} />
              </div>
              <button
                className={
                  addedProducts.includes(product.id)
                    ? styles.addedButton
                    : styles.addToCartButton
                }
                onClick={() => handleAddToCart(product)}
                disabled={addedProducts.includes(product.id)}
              >
                {addedProducts.includes(product.id) ? "Added" : "Add to cart"}
              </button>
            </div>
            <Link to={`${frontendURL}/products/${product.id}`} >
            <div className={styles.containerPriceAndTitle}>
              <h3>{product.title}</h3>
              <div className={styles.priceContainer}>
              {product.discont_price !== null ? (
                <>
                  <h2>{product.discont_price} €</h2>
                  <del><p>{product.price} €</p></del>
                  </>
               
              ) : (
                <h2>{product.price} €</h2>
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

export default AllProducts;