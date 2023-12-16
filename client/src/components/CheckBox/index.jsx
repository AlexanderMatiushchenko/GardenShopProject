import React from "react";
import styles from "./index.module.css";

function CheckBox({ labelText, onCheckboxChange, checked }) {
  const handleCheckboxChange = (event) => {
    if (typeof onCheckboxChange === 'function') {
      onCheckboxChange(event.target.checked);
    }
  };

  return (
    <div className={styles.checkBoxContainer}>
      <label>
        {labelText}
        <input
          type="checkbox"
          className={styles.chBoxNative}
          onChange={handleCheckboxChange}
          checked={checked}
        />
        <span className={styles.chBoxCustom}></span>
      </label>
    </div>
  );
}

export default CheckBox;
