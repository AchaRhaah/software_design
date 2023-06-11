import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  PasswordInput,
  GreenBtn,
  PhoneInput,
  Checkboxes,
  SocialSquareBtn,
} from "../../components";
import TextInput from "../../components/TextInput/TextInput";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/reducers/loaderReducer";
import { addCustomerThunk, loginCustomer } from "../../redux/thunks/customerThunk";
import { addCollectorThunk, loginCollector } from "../../redux/thunks/collectorsThunk";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({});

  const login = async () => {
    dispatch(setLoading(true));
    try{
      const isCollector = userDetails.isCollector;
      if(isCollector){
        dispatch(loginCollector(userDetails)).then((res) => {
          if(res.payload.status === 400){
            alert('Wrong Credentials');
          }else{
            navigate('/publish-routes')
          }
          console.log('Res', res);
          dispatch(setLoading(false))
        })
      }else{
        await dispatch(loginCustomer(userDetails)).then(() => {
          dispatch(setLoading(false))
        })
      }
    }catch(e){
      console.log(`Error`, e);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Link to="/">
          <FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} />
        </Link>
      </div>
      <div className={styles.image}>
        <div className={styles.textOverlay}>
          <p>Login to</p>
          <p>Your Account</p>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <PhoneInput value={userDetails.phone_number} setValue={(val) => setUserDetails((u) => ({...u, phone_number: val}))}/>
        <PasswordInput value={userDetails.password} setValue={(val) => setUserDetails((u) => ({...u, password: val}))}/>
      </div>
      <Checkboxes isCollector={userDetails.isCollector} setValue={(val) => setUserDetails((u) => ({...u, isCollector: val}))} />
      <GreenBtn text={"Log in"} onPress={login}/>
      <div className={styles.line}>
        <div className={styles.subline} />
        <p className={styles.or}>or contine with</p>
        <div className={styles.subline} />
      </div>
      <div className={styles.socials}>
        <SocialSquareBtn facebook={true} />
        <SocialSquareBtn facebook={false} />
      </div>
      <p className={styles.name}>
        Don't have an account? <Link className={styles.signUp} to="/create-account"> Sign Up</Link>
      </p>
    </div>
  );
}
export default Login;

