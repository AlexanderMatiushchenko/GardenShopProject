import React, { useState } from "react";
import styles from "./index.module.css"
import { Link } from "react-router-dom";
import { frontendURL } from "../../utils/var";

const BurgerMenu = () => {

    
    const [isMenuClicked, setIsMenuClicked,] = useState(false);
  
    const closeMenu=()=>{
      setIsMenuClicked(false)
    }
  
    return (
      <div className={styles.burgerMenuMain}>
        <nav className={`${styles.burgerNav} ${isMenuClicked ? styles.active : ""}`}>

            <ul className={styles.burgerList}>
              <Link to={`${frontendURL}/`} onClick={() => setIsMenuClicked(!isMenuClicked)}>
              <li className={styles.burgerItem} onClick={() => setIsMenuClicked(!isMenuClicked)}>Main page</li>
              </Link>
              <Link to={`${frontendURL}/categories/all`} onClick={() => setIsMenuClicked(!isMenuClicked)}>
              <li className={styles.burgerItem}>Categories</li>
              </Link>
              <Link to={`${frontendURL}/products/all`} onClick={() => setIsMenuClicked(!isMenuClicked)}>
              <li className={styles.burgerItem}>All produkts</li>
              </Link>
              <Link  to={`${frontendURL}/sales/all`} onClick={() => setIsMenuClicked(!isMenuClicked)}>
              <li className={styles.burgerItem}>All sales</li>
              </Link>
            </ul>
        </nav>
        <button className={styles.burgerBtn} onClick={() => setIsMenuClicked(!isMenuClicked)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>
    );
  };
  
  export default BurgerMenu;