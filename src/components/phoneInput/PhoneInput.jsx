import React from "react";
import styles from "./styles.module.css";

function PhoneInput({ value, setValue}) {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.countryCode}>237</p>
      <input placeholder="Phone number" type="text" name="phone" value={value} onChange={(e) => setValue(e.target.value)} className={styles.input} />
    </div>
  );
}

export default PhoneInput;
