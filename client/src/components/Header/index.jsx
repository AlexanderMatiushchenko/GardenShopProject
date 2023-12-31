import React from "react";
import logo from "../../assets/header/logo.svg"
import basket from "../../assets/header/basket.svg"
import styles from "./index.module.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { frontendURL } from "../../utils/var";
import BurgerMenu from "../BurgerMenu";
function Header(){
    const cartItems = useSelector((state)=>state.cart.list);
    const cartItemsSumme = cartItems.reduce((el,item)=>{
    
        return el+item.count
    },0)
    
    return (
        <div className={styles.headerMain}>
           <Link to={`${frontendURL}/`}><img src={logo} alt="" /></Link> 
           <BurgerMenu />
            <div className={styles.headerPContainer}>
                <Link to={`${frontendURL}/`}><p>Main Page</p></Link>
                <Link to={`${frontendURL}/categories/all`}><p>Categories</p></Link>
                <Link to={`${frontendURL}/products/all`}><p>All products</p></Link>
                <Link to={`${frontendURL}/sales/all`}><p>All sales</p></Link>
            </div>
            <div className={styles.headerBasket}>
            {cartItemsSumme !==0 && cartItemsSumme !==undefined &&(
                <>
                <div className={styles.cartItemsSummeSign}>
                    <p>{cartItemsSumme}</p>
                </div>
            </> 
            )}
           <Link to={`${frontendURL}/cart`}> <img src={basket} alt="basket" /></Link>
            </div>
        </div>
    )

}
export default Header