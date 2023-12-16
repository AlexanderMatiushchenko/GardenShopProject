const sortProducts = (products, sortBy, sortDirection) => {
  const sortOptions = {
    default: (a, b) => a.title.localeCompare(b.title),
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    priceHighToLow: (a, b) => (b.discont_price || 0) - (a.discont_price || 0),
    priceLowToHigh: (a, b) => (a.discont_price || 0) - (b.discont_price || 0),
  };

  const sortedProducts = [...products].filter((el) => el.price );
  sortedProducts.sort(sortOptions[sortBy]);

  return sortDirection === 'up' ? sortedProducts.reverse() : sortedProducts;
};

export default sortProducts;
