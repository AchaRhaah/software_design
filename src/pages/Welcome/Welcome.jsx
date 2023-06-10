import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Welcome() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.heading1}>Welcome !</h3>
      <div className={styles.img}></div>
      <h1 className={styles.heading2}>Trowey</h1>
      <h2 className={styles.heading3}>Uber for Waste</h2>
      <FontAwesomeIcon className={styles.arrowRight} icon={faArrowRight} />
    </div>
  );
}

export default Welcome;
