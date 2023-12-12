import React from "react";
import kaktusImage from "../../../assets/errpage/kaktus.svg";
import fourImage from "../../../assets/errpage/4.svg"
import styles from "./index.module.css";
import { Link } from "react-router-dom";
 function ErrorPage(){
    return(
        <div className={styles.errPageContainer}>
            <div className={styles.containerWithCactus}>
                <img src={fourImage} alt="4" />
                <img src={kaktusImage} alt="kaktusInNullForm" />
                <img src={fourImage} alt="4" />
            </div>
            <div className={styles.containerWithBtn}>
                <h2 className={styles.errPageH2}>Page Not Found</h2>
                <p className={styles.errPageP}> We’re sorry, the page you requested could not be found.
                 Please go back to the homepage.</p>
                 <Link to= "/">
                <button  className={styles.errPageBtn}>Go Home</button>
                </Link>
            </div>
        </div>
    )
 }
 export default ErrorPage;
