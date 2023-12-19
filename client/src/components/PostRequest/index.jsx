import React, { useState } from "react";
import styles from "./index.module.css";

function PostRequest({ btnName }) {
  const baseUrl = "http://localhost:3333";
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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

    if (isSubmitting) {
      return; 
    }

    setIsSubmitting(true);

    const postData = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };

    try {
      const response = await fetch(`${baseUrl}/sale/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setIsSuccessModalOpen(true);

        setTimeout(() => {
          setIsSuccessModalOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className={styles.discountForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={nameInput} />
        <input type="text" placeholder="Phone number" onChange={phoneNumberInput} />
        <input type="text" placeholder="Email" onChange={emailInput} />
        <button type="submit" disabled={isSubmitting}>
          {btnName}
        </button>
      </form>

      {isSuccessModalOpen && (
        <div className={styles.successModal}>
          <p>Request successfully submitted!</p>
        </div>
      )}
    </div>
  );
}

export default PostRequest;
