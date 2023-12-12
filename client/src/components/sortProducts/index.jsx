import React, { useState } from 'react';

const ProductListSort = ({ products }) => {
  const [sortBy, setSortBy] = useState('default');

  const sortOptions = {
    default: (a, b) => 0, // логика сортировки по умолчанию
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    priceHighToLow: (a, b) => b.price - a.price,
    priceLowToHigh: (a, b) => a.price - b.price,
  };

  const handleSort = (option) => {
    setSortBy(option);
  };

  const sortedProducts = [...products];
  sortedProducts.sort(sortOptions[sortBy]);

  return (
    <div>
      <h4>Sorted</h4>
      <button onClick={() => handleSort('default')}>by default ></button>
      <button onClick={() => handleSort('newest')}>newest</button>
      <button onClick={() => handleSort('priceHighToLow')}>price: high-low</button>
      <button onClick={() => handleSort('priceLowToHigh')}>price: low-high</button>

      {/* Вывод отсортированных продуктов */}
      {sortedProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          {/* Добавьте остальные поля, которые вы хотите отобразить */}
        </div>
      ))}
    </div>
  );
};

export default ProductListSort;
