import React, { useState } from "react";
import styles from "./index.module.css";
import { backendURL } from "../../utils/var";

function PostRequestCart({ btnName }) {
 
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false)

  const nameInput = (event) => {
    setName(event.target.value);
  };

  const phoneNumberInput = (event) => {
    setPhoneNumber(event.target.value);
  };

  const emailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    const postData = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };

    try {
      const response = await fetch(`${backendURL}/sale/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setModalActive(true);
        setIsOrdered(true)
        setName("");
        setPhoneNumber("");
        setEmail("");

        setTimeout(() => {
          setModalActive(false);
          setIsOrdered(false)
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } 
  };

  return (
    <div>
      <form className={styles.orderForm} onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Name" onChange={nameInput} />
        <input type="text" value={phoneNumber} placeholder="Phone number" onChange={phoneNumberInput} />
        <input type="text" value={email} placeholder="Email" onChange={emailInput} />
        <button type="submit" className={isOrdered? styles.btnAktiv:null} >
          {isOrdered? "The Order is Placed" : btnName}
        </button>
      </form>
      {modalActive && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
          <div className={styles.modalText}>
            <h5>Congratulations!</h5>
            <p>Your order has been successfully placed on the website. <br /> 
              A manager will contact you shortly to confirm your order.</p>
          </div>
          <span onClick={()=>setModalActive(false)}> &times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostRequestCart;
