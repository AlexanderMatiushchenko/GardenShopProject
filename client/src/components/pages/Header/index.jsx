import React from "react";
import logo from "../../../assets/header/logo.svg"
import basket from "../../../assets/header/basket.svg"
import styles from "./index.module.css"

function Header(){
    return (
        <div className={styles.headerMain}>
            <img src={logo} alt="" />
            <div className={styles.headerPContainer}>
                <p>Main Page</p>
                <p>Categories</p>
                <p>All products</p>
                <p>All sales</p>
            </div>
            <img src={basket} alt="basket" />
        </div>
    )

}
export default Header