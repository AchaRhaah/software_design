import React from "react";
import styles from "./styles.module.css";

function PasswordInput() {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.countryCode}>237</p>
      <input placeholder="Phone number" type="text" className={styles.input} />
    </div>
  );
}

export default PasswordInput;
