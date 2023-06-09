import React from "react";
import styles from "./styles.module.css";

function Checkbox({ isCollector, setValue }) {
  return (
    <div className={styles.checkboxCotainer}>
      <div className={styles.checkContainer}>
        <input type="checkbox" className={styles.checkbox} />
        <p>Remember me</p>
      </div>
      <div className={styles.checkContainer}>
        <input type="checkbox" className={styles.checkbox} checked={isCollector} onChange={(e) => setValue(e.target.checked)} />
        <p>I am a collector</p>
      </div>
    </div>
  );
}

export default Checkbox;
