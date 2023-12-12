import React from "react";
import logo from "../../../assets/header/logo.svg"
import basket from "../../../assets/header/basket.svg"
import styles from "./index.module.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header(){
    const cartItems = useSelector((state)=>state.cart.list);
    const cartItemsSumme = cartItems.reduce((el,item)=>{
    
        return el+item.count
    },0)
    const baseUrl = "http://localhost:3000";
    return (
        <div className={styles.headerMain}>
           <Link to={`${baseUrl}/`}><img src={logo} alt="" /></Link> 
            <div className={styles.headerPContainer}>
                <Link to={`${baseUrl}/`}><p>Main Page</p></Link>
                <Link to={`${baseUrl}/categories/all`}><p>Categories</p></Link>
                <Link to={`${baseUrl}/products/all`}><p>All products</p></Link>
                <a href=""><p>All sales</p></a>
            </div>
            <div className={styles.headerBasket}>
            {cartItemsSumme !==0 && cartItemsSumme !==undefined &&(
                <>
                <div className={styles.cartItemsSummeSign}>
                    <p>{cartItemsSumme}</p>
                </div>
            </> 
            )}
           <Link to={`${baseUrl}/cart`}> <img src={basket} alt="basket" /></Link>
            
            </div>
            
        </div>
    )

}
export default Header