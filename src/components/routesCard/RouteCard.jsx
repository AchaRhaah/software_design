import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function RouteCard({ place, city }) {
  return (
    <div className={styles.mainConatiner}>
      <div className={styles.left}>
        <h2 className={styles.place}>{place}</h2>
        <p className={styles.city}>{city}</p>
      </div>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon className={styles.icon} icon={faPen} />
        <FontAwesomeIcon className={styles.icon} icon={faTrashCan} />
      </div>
    </div>
  );
}

export default RouteCard;
