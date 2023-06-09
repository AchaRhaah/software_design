import React from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { SocialBtn, GreenBtn } from "../../components";

function LetsGo() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <Link to="/">
            <FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} />
          </Link>
        </div>
        <div className={styles.image}></div>
        <h2>Lets get in</h2>
        <div className={styles.socialBtnContainer}>
          <SocialBtn facebook={true} />
          <SocialBtn facebook={false} />
        </div>
        <div className={styles.line}>
          <div className={styles.subline} />
          <p className={styles.or}>or</p>
          <div className={styles.subline} />
        </div>
        <GreenBtn onPress={() => navigate('/create-account')} text={"Sign in with password"} />
        <p className={styles.name}>
          Don't have an account? <Link className={styles.signUp} to='/create-account'> Sign up</Link>
        </p>
      </div>
    </>
  );
}
export default LetsGo;
