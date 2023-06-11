import React from "react";
import styles from "./styles.module.css";

function SelectLocation() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <h5 className={styles.selectLocation}>Select Location</h5>
        <input
          className={styles.input}
          placeholder="Kiki mini cite malingo Buea"
          type="text"
        />
      </div>
      <button className={styles.savedBtn}>Saved</button>
    </div>
  );
}

export default SelectLocation;
