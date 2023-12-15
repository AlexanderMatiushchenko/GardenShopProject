import React, { useState } from 'react';
import styles from "./index.module.css";

const ProductDescription = ({ fullDescription }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleDescription = () => {
    setIsTruncated((prev) => !prev);
  };

  return (
    <p className={isTruncated ? ['truncated-description'] : ['full-description']}>
      {fullDescription}
      <button onClick={toggleDescription}>
        {isTruncated ? 'Read more' : 'Hide'}
      </button>
    </p>
  );
};

export default ProductDescription;
