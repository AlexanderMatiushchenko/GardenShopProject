
import React from 'react';
import styles from './index.module.css';

function DiscountPercent({ discontPrice, price }) {
  if (discontPrice === null || discontPrice === undefined || discontPrice >= price) {
    return null;
  }

  const percent = ((price - discontPrice) / price) * 100;

  return (
    <div className={styles.discountPercentContainer}>
      <p>-{percent.toFixed(0)}%</p>
    </div>
  );
}

export default DiscountPercent;
