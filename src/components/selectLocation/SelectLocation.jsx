import React, { useState } from "react";
import styles from "./styles.module.css";

function SelectLocation({ addLocation }) {
  const [name, setName] = useState('');

  const saveAndClear = () => {
    addLocation(name);
    setName('');
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <h5 className={styles.selectLocation}>Add Location</h5>
        <input
          className={styles.input}
          placeholder="e.g. Kiki mini cite Malingo Buea"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if(e.keyCode === 13){
              saveAndClear()
            }
          }}
        />
      </div>
      <button className={styles.savedBtn} onClick={saveAndClear}>Add</button>
    </div>
  );
}

export default SelectLocation;
