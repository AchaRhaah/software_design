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
import { addCustomerThunk } from "../../redux/thunks/customerThunk";
import { addCollectorThunk } from "../../redux/thunks/collectorsThunk";

function CreateAcc() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({});

  const register = async () => {
    dispatch(setLoading(true));
    try{
      userDetails.location = {name: userDetails.address};
      const isCollector = userDetails.isCollector;
      delete userDetails.address;
      delete userDetails.isCollector
      if(isCollector){
        dispatch(addCollectorThunk(userDetails)).then((res) => {
          if(res.payload.status === 400){
            alert('Please Enter all Fields');
          }else{
            navigate('/login')
          }
          dispatch(setLoading(false))
        })
      }else{
        await dispatch(addCustomerThunk(userDetails)).then((res) => {
          if(res.payload.status === 400){
            alert('Please Enter all Fields');
          }else{
            navigate('/login')
          }
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
          <p>Create your</p>
          <p>Account</p>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <PhoneInput value={userDetails.phone_number} setValue={(val) => setUserDetails((u) => ({...u, phone_number: val}))}/>
        <PasswordInput value={userDetails.password} setValue={(val) => setUserDetails((u) => ({...u, password: val}))}/>
        <TextInput placeholder={'Full Name'} value={userDetails.name} setValue={(val) => setUserDetails((u) => ({...u, name: val}))}/>
        <TextInput placeholder={'Address'} value={userDetails.address} setValue={(val) => setUserDetails((u) => ({...u, address: val}))}/>
      </div>
      <Checkboxes isCollector={userDetails.isCollector} setValue={(val) => setUserDetails((u) => ({...u, isCollector: val}))} />
      <GreenBtn text={"Sign up"} onPress={register}/>
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
        Already have an account? <Link className={styles.signUp} to="/login"> Log in</Link>
      </p>
    </div>
  );
}
export default CreateAcc;

