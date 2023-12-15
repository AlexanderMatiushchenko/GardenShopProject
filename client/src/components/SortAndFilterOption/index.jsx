import React, { useEffect } from 'react';
import styles from './index.module.css';
import SortRender from '../SortRender';

function SortAndFilterOption({
  priceFrom,
  priceTo,
  handlePriceFilterChange,
  handleSort,
  toggleSortOptions,
  selectedSortOption,
  sortDirection,
  isActiveSortOptions,
}) {
  useEffect(() => {

    handleSort(selectedSortOption);
  }, [priceFrom, priceTo, selectedSortOption, sortDirection]);
  

  return (
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
      <SortRender
        selectedSortOption={selectedSortOption}
        sortDirection={sortDirection}
        isActiveSortOptions={isActiveSortOptions}
        handleSort={handleSort}
        toggleSortOptions={toggleSortOptions}
      />
    </div>
  );
}

export default SortAndFilterOption;
