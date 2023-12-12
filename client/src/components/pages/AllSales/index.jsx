import React, { useState } from 'react';
import styles from './index.module.css';

function AllSales({ products }) {
  const baseURL = 'http://localhost:3333';
  const onlySalesItems = products.filter((el) => el.discont_price !== null);

  const [sortBy, setSortBy] = useState('default');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([...onlySalesItems]);

  const sortOptions = {
    default: (a, b) => 0,
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    priceHighToLow: (a, b) => b.price - a.price,
    priceLowToHigh: (a, b) => a.price - b.price,
  };

  const handleSort = (option) => {
    setSortBy(option);
    updateFilteredProducts(option, priceFrom, priceTo);
  };

  const handlePriceFilter = () => {
    updateFilteredProducts(sortBy, priceFrom, priceTo);
  };

  const updateFilteredProducts = (sortOption, from, to) => {
    let filteredProducts = [...onlySalesItems];
    filteredProducts.sort(sortOptions[sortOption]);

    if (from && to) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseFloat(from) && product.price <= parseFloat(to)
      );
    }

    setFilteredProducts(filteredProducts);
  };

  function discountPercent(discountedItem) {
    const { discont_price, price } = discountedItem;
    const percent = ((price - discont_price) / price) * 100;
    return percent.toFixed(0);
  }

  return (
    <div className={styles.allSalesMain}>
      <div className={styles.conteinerStateBtn}></div>
      <h1>Discounted items</h1>
      <div className={styles.sortBtnContainer}>
        <h4>Price</h4>
        <input
          type="text"
          placeholder="from"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="to"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
        />
        <div>
          <h4>Sorted</h4>
          <button onClick={() => handleSort('default')}>by default ></button>
          <button onClick={() => handleSort('newest')}>newest</button>
          <button onClick={() => handleSort('priceHighToLow')}>price: high-low</button>
          <button onClick={() => handleSort('priceLowToHigh')}>price: low-high</button>
        </div>
        <button onClick={handlePriceFilter}>Apply Price Filter</button>
      </div>
      <div className={styles.contaierWithAllSalesProducts}>
        {filteredProducts.map((el) => (
          <div key={el.id} className={styles.containerWithProduct}>
            <div className={styles.containerWithImgAndSalesPercent}>
              <img src={`${baseURL}${el.image}`} alt={el.title} />
              <div className={styles.discountPercent}>
                <p>-{discountPercent(el)}%</p>
              </div>
            </div>
            <div className={styles.containerWithProdukTitleAndPrice}>
              <p>{el.title}</p>
              <div className={styles.containerWithPriceAndDiscountPrice}>
                <h2>{el.discont_price} €</h2>
                <del>
                  <h3>{el.price} €</h3>
                </del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllSales;
