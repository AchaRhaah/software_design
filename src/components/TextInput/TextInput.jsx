import React from "react";
import styles from "./styles.module.css";

const TextInput = ({ placeholder, value, setValue }) => {
  return (
    <div className={styles.inputContainer}>
      <input placeholder={placeholder} type="text" value={value} onChange={(e) => setValue(e.target.value)} className={styles.input} />
    </div>
  );
}

export default TextInput;
