import React from "react";
import styles from "./index.module.css"
import imgWithBtn from "../../../assets/homepage/img1.svg"
import imgDiscount from "../../../assets/homepage/img2.svg"

function HomePage(){
    return(
        <div className={styles.mainHomePageDiv}>
        <div className={styles.divWithCheckoutBtn}>
            <h1 className={styles.h1HomePage}>Amazing Discounts on Garden Products!</h1>
            <button className={styles.buttonCheckOut}>Check out</button>
        </div>
        <div className={styles.divWithLineAndButtonAllCategories}>
        <h2>Categories</h2>
        <div class={styles.line}></div>
        <button>All categories</button>
        </div>
        <div className={styles.smallCategories}></div>
        <div className={styles.conteinerDiscountForm}>
            <h3>5% off on the first order</h3>
            <div className={styles.imgAndInputWithBtn}>
            <img src={imgDiscount} alt="handsWithGardenEquipments" />
            <div className={styles.discountForm}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone number" />
                <input type="text" placeholder="Email" />
                <button>Get a discount  </button>
            </div>
            </div>
        </div>
        <div className={styles.sale}>
  
        <h2>Sale</h2>
        <div class={styles.line}></div>
        <button>All sales</button>
        
        </div>
       
        </div>
    )
}export default HomePage;