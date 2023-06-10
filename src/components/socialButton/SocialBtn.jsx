import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.css";

function SocialBtn({ facebook }) {
  return (
    <div className={styles.btnContainer}>
      {/* <FontAwesomeIcon icon={faFacebook} /> */}
      <h3 className={styles.btnText}>{`Continue with ${
        facebook ? "Facebook" : "Apple"
      }`}</h3>
    </div>
  );
}

export default SocialBtn;
