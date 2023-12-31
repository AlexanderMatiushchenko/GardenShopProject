import React from 'react';
import styles from './index.module.css';

function SortRender({ selectedSortOption, isActiveSortOptions, handleSort }) {
  return (
    <div className={styles.containerWithSortBtn}>
      <div className={styles.sortBtns + (isActiveSortOptions ? ` ${styles.active}` : '')}>
        <select  onChange={(e) => handleSort(e.target.value)} value={selectedSortOption}>
          <option value="default">by default</option>
          <option value="newest">newest</option>
          <option value="priceHighToLow">price: high-low</option>
          <option value="priceLowToHigh">price: low-high</option>
        </select>
      </div>
    </div>
  );
}

export default SortRender;
