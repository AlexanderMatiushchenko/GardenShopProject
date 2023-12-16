  import React, { useEffect } from 'react';
  import styles from './index.module.css';
  import SortRender from '../SortRender';
  import CheckBox from '../CheckBox';

  function SortAndFilterOption({
    priceFrom,
    priceTo,
    handlePriceFilterChange,
    handleSort,
    selectedSortOption,
    isActiveSortOptions,
    onDiscountedOnlyChange, 
    showDiscountedOnly, 
  }) {
    useEffect(() => {
      handleSort(selectedSortOption);
    }, [priceFrom, priceTo, selectedSortOption]);


    return (
      <div className={styles.sortBtnAndInputsContainer}>
        <h4>Price</h4>
      
        <input className={styles.sortInp}
          type="text"
          placeholder="from"
          value={priceFrom}
          onChange={(e) => handlePriceFilterChange(e.target.value, priceTo)}
        />
        <input className={styles.sortInp}
          type="text"
          placeholder="to"
          value={priceTo}
          onChange={(e) => handlePriceFilterChange(priceFrom, e.target.value)}
        />
        <CheckBox
          labelText={"Discounted Items"}
          onCheckboxChange={onDiscountedOnlyChange}
          checked={showDiscountedOnly}
        />
      

        <h4>Sorted</h4>
        <SortRender
          selectedSortOption={selectedSortOption}
          isActiveSortOptions={isActiveSortOptions}
          handleSort={handleSort}
        />
      </div>
    );
  }

  export default SortAndFilterOption;
