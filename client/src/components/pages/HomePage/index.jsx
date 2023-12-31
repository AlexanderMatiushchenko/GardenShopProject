import React from "react";
import styles from "./index.module.css";

import imgDiscount from "../../../assets/homepage/img2.svg";
import CategoriesCarousel from "../../CategoriesCarousel";
import DiscountCarousel from "../../DiscountCarousel";
import PostRequest from "../../PostRequest";
import { Link } from "react-router-dom";
import { frontendURL } from "../../../utils/var";


function HomePage() {


  return (
    <div className={styles.mainHomePageDiv}>
      <div className={styles.divWithCheckoutBtn}>
        <h1 className={styles.h1HomePage}>
          Amazing Discounts <br />
           on Garden Products!
        </h1>
       
        <Link to={`${frontendURL}/sales/all`}>
        <button className={styles.buttonCheckOut} >Check out</button></Link>
      </div>
      <div className={styles.divWithLineAndButtonAllCategories}>
        <h2>Categories</h2>
        <div className={styles.line}></div>
        <Link to={`${frontendURL}/categories/all`}>
        <button>All categories</button>
        </Link>
      </div>
      <CategoriesCarousel />
      <div className={styles.smallCategories}></div>
      <div className={styles.conteinerDiscountForm}>
        <h3>5% off on the first order</h3>
        <div className={styles.imgAndInputWithBtn}>
          <img src={imgDiscount} alt="handsWithGardenEquipments" />
          <PostRequest btnName="Get a discount" />
        </div>
      </div>
      <div className={styles.sale}>
        <h2>Sale</h2>
        <div className={styles.line}></div>
        <Link to={`${frontendURL}/sales/all`}>
        <button>All sales</button>
        </Link>
      </div>
      <DiscountCarousel />
    </div>
  );
}


export default HomePage;
