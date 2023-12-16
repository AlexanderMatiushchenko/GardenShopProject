import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import SortAndFilterOption from '../../SortAndFilterOption';
import DiscountPercent from '../../DiscountPercent';
import sortProducts from '../../../utils/api';
import { useDispatch } from 'react-redux';
import { addAction } from "../../../store/slices/cartSlice";

function AllSales({ products }) {
  const baseURL = 'http://localhost:3333';
  const frontendURL = 'http://localhost:3000';
  const [onlySalesItems, setOnlySalesItems] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [selectedSortOption, setSelectedSortOption] = useState('default');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isActiveSortOptions, setIsActiveSortOptions] = useState(false);
  

  const dispatch = useDispatch();
  const handleAddToCart = (products) => {
    dispatch(addAction(products)); 
    console.log("Product added to cart:", products);
  };

  useEffect(() => {

  }, [products, sortBy, priceFrom, priceTo]);
  useEffect(() => {
    const filteredItems = products.filter((el) => el.discont_price !== null);
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

    setOnlySalesItems(filteredItems);
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

  

  return (
    <div className={styles.allSalesMain}>
      <div className={styles.conteinerStateBtn}></div>
      <h1>Discounted items</h1>
      <SortAndFilterOption
        priceFrom={priceFrom}
        priceTo={priceTo}
        handlePriceFilterChange={handlePriceFilterChange}
        handleSort={handleSort}
        selectedSortOption={selectedSortOption}
        isActiveSortOptions={isActiveSortOptions}
      />
      <div className={styles.contaierWithAllSalesProducts}>
        {filteredProducts.map((el) => (
          
            <div className={styles.containerWithProduct}>
              <div className={styles.containerWithImgAndSalesPercent}>
                <img src={`${baseURL}${el.image}`} alt={el.title} />
                <button onClick={() => handleAddToCart(products)}>Add to cart</button>
                <DiscountPercent discountedItem={el} />
              </div>
              <Link to={`${frontendURL}/products/${el.id}`} key={el.id}>
              <div className={styles.containerWithProdukTitleAndPrice}>
                <p>{el.title}</p>
                <div className={styles.containerWithPriceAndDiscountPrice}>
                  <h2>{el.discont_price} €</h2>
                  <del>
                    <h3>{el.price} €</h3>
                  </del>
                </div>
                
              </div>
              </Link>
            </div>
         
        ))}
      </div>
    </div>
  );
}

export default AllSales;
