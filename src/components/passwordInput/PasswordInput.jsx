import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function PhoneInput() {
  return (
    <div className={styles.inputContainer}>
      <FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} />
      <input placeholder="password" type="password" />
      <FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} />
    </div>
  );
}

export default PhoneInput;
