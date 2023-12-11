
import React from "react";
import styles from './index.module.css';

function Categories({ categories,}) {
  const baseURL = "http://localhost:3333";

  return (
    <div className={styles.categoriesMain}>
      <h1 className={styles.categoriesH1}>Categories</h1>
      <div className={styles.categoriesContainer}>
      {categories.map(category => (
          <div  key={category.id}  className={styles.categoriesDivImgContainer}>
            <img src={`${baseURL}${category.image}`} alt={category.title} />
            <h3 className={styles.categoriesH3}>{category.title}</h3>
          </div>
      ))}
      </div>
      </div>
  );
}

export default Categories;
