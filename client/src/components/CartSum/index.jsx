  import React,{useState} from "react";
  import styles from "./index.module.css"
  import PostRequestCart from "../PostRequestCart/index";

  const CartSum = ({ cartItems, handleRemoveItem }) => {
    const calculateItems = () => {
      return cartItems.reduce((total, item) => total + item.count, 0);
    };

    const calculatePrice = () => {
      return cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
    };

    const [orderDetails, setOrderDetails] = useState({
      name: "",
      phoneNumber: "",
      email: "",
    });



    return (
      <div className={styles.containerWithOrderDetails}>
        <h2>Order details</h2>
        <h3>{calculateItems()} items</h3>
        <h3>Total:</h3>
        <h1>{calculatePrice()} €</h1>
        <PostRequestCart btnName={"Order"}/>


      </div>
    );
  };

  export default CartSum;
