
import React from "react";
import styles from './index.module.css';
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import { backendURL,frontendURL } from "../../../utils/var";

function Categories({ categories}) {
 
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/categories/all", label: "Categories" },
    
  ];
  return (
    <>
    <NavBar links={links}/>
    <div className={styles.categoriesMain}>
      <h1 className={styles.categoriesH1}>Categories</h1>
      <div className={styles.categoriesContainer}>
      {categories.map(category => (
        <Link  to={`${frontendURL}/categories/${category.id}`}  key={category.id}>
          <div  key={category.id}  className={styles.categoriesDivImgContainer}>
            <img src={`${backendURL}${category.image}`} alt={category.title} />
            <h3 className={styles.categoriesH3}>{category.title}</h3>
          </div>
          </Link>
      ))}
      </div>
      </div>
      </>
  );
}

export default Categories;
