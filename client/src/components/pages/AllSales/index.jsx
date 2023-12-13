import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function AllSales({ products }) {
  const baseURL = 'http://localhost:3333';
  const frontendURL = 'http://localhost:3000';
  const [onlySalesItems, setOnlySalesItems] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [selectedSortOption, setSelectedSortOption] = useState('default');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [isActiveSortOptions, setIsActiveSortOptions] = useState(false);
  const [sortDirection, setSortDirection] = useState('down');

  useEffect(() => {
    const filteredItems = products.filter((el) => el.discont_price !== null);
    filteredItems.sort(sortOptions[sortBy]);

    if (priceFrom && priceTo) {
      setFilteredProducts(
        filteredItems.filter(
          (product) =>
            product.price >= parseFloat(priceFrom) && product.price <= parseFloat(priceTo)
        )
      );
    } else {
      setFilteredProducts(filteredItems);
    }

    setOnlySalesItems(filteredItems);
  }, [products, sortBy, priceFrom, priceTo]);

  const sortOptions = {
    default: (a, b) => a.title.localeCompare(b.title),
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    priceHighToLow: (a, b) => b.discont_price - a.discont_price,
    priceLowToHigh: (a, b) => a.discont_price - b.discont_price,
  };

  const handleSort = (option) => {
    setSortBy(option);
    setSelectedSortOption(option);
    setIsActiveSortOptions(false);
  };

  const handlePriceFilterChange = (from, to) => {
    setPriceFrom(from);
    setPriceTo(to);
  };

  const toggleSortOptions = () => {
    setIsActiveSortOptions(!isActiveSortOptions);
    setSortDirection(sortDirection === 'down' ? 'up' : 'down');
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
      <div className={styles.sortBtnAndInputsContainer}>
        <h4>Price</h4>
        <input
          type="text"
          placeholder="from"
          value={priceFrom}
          onChange={(e) => handlePriceFilterChange(e.target.value, priceTo)}
        />
        <input
          type="text"
          placeholder="to"
          value={priceTo}
          onChange={(e) => handlePriceFilterChange(priceFrom, e.target.value)}
        />
        <h4>Sorted</h4>
        <div className={styles.containerWithSortBtn}>
  <div className={styles.sortBtns + (isActiveSortOptions ? ` ${styles.active}` : '')}>
  <button onClick={toggleSortOptions}>
    {selectedSortOption === 'default'
      ? 'by default'
      : selectedSortOption === 'priceHighToLow'
      ? 'price: high-low'
      : selectedSortOption === 'priceLowToHigh'
      ? 'price: low-high'
      : selectedSortOption}{' '}
    {sortDirection === '' ? '▼' : '▲'}
  </button>

    {isActiveSortOptions && (
      <>
        {selectedSortOption !== 'default' && (
          <button onClick={() => handleSort('default')}>by default</button>
        )}
        <button onClick={() => handleSort('newest')}>newest</button>
        <button onClick={() => handleSort('priceHighToLow')}>price: high-low</button>
        <button onClick={() => handleSort('priceLowToHigh')}>price: low-high</button>
      </>
    )}
  </div>
</div>
      </div>
      <div className={styles.contaierWithAllSalesProducts}>
        {filteredProducts.map((el) => (
          <Link to={`${frontendURL}/products/${el.id}`}>
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
          </Link>
        ))}

      </div>
    </div>
  );
}

export default AllSales;
