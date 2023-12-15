
 const sortProducts = (products, sortBy, sortDirection) => {
    const sortOptions = {
      default: (a, b) => a.title.localeCompare(b.title),
      newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      priceHighToLow: (a, b) => b.discont_price - a.discont_price,
      priceLowToHigh: (a, b) => a.discont_price - b.discont_price,
    };
  
    const sortedProducts = [...products].filter((el) => el.discont_price !== null);
    sortedProducts.sort(sortOptions[sortBy]);
  
    return sortDirection === 'up' ? sortedProducts.reverse() : sortedProducts;
  };
  export default sortProducts;