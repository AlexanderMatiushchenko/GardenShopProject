import React, { useState } from "react";
import styles from "./index.module.css";
import { backendURL } from "../../utils/var";

function PostRequest({ btnName }) {
  
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

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
       
        setName("");
        setPhoneNumber("");
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form className={styles.discountForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={nameInput} />
        <input type="text" placeholder="Phone number" value={phoneNumber} onChange={phoneNumberInput} />
        <input type="text" placeholder="Email" value={email} onChange={emailInput} />
        <button type="submit">{btnName}</button>
      </form>
    </div>
  );
}

export default PostRequest;
