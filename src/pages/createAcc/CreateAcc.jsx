import React from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PasswordInput, PhoneInput } from "../../components";

function LetsGo() {
  const navigate = useNavigate();
  const onBtnPress = () => {
    navigate("/create-account");
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Link to="/">
          <FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} />
        </Link>
      </div>
      <div className={styles.image}>
        <div className={styles.textOverlay}>
          <p>Create your</p>
          <p>Account</p>
        </div>
      </div>
      <PhoneInput />
      <PasswordInput />
      <p className={styles.name}>
        Already have an account? <Link className={styles.signUp}> Log in</Link>
      </p>
    </div>
  );
}
export default LetsGo;
