const sortProducts = (products, sortBy, sortDirection) => {
  const sortOptions = {
    default: (a, b) => a.title.localeCompare(b.title),
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    priceHighToLow: (a, b) => (b.price || 0) - (a.price || 0),
    priceLowToHigh: (a, b) => (a.price || 0) - (b.price || 0),
  };

  const sortedProducts = [...products].filter((el) => el.price );
  sortedProducts.sort(sortOptions[sortBy]);

  return sortDirection === 'up' ? sortedProducts.reverse() : sortedProducts;
};

export default sortProducts;
