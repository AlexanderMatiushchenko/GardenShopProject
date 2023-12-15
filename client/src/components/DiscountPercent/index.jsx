import React from 'react';
import styles from './index.module.css';

function DiscountPercent({ discountedItem }) {
  const { discont_price, price } = discountedItem;

  
  if (discont_price === null || discont_price === undefined) {
    return null;
  }

  const percent = ((price - discont_price) / price) * 100;

  return (
    <div className={styles.discountPercentContainer}>
      <p>-{percent.toFixed(0)}%</p>
    </div>
  );
}

export default DiscountPercent;
