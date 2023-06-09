import React from "react";
import styles from "./styles.module.css";
function GreenBtn({ text, onPress }) {
  return (
    <button onPress={onPress} className={styles.btnContainer}>
      {text}
    </button>
  );
}

export default GreenBtn;
