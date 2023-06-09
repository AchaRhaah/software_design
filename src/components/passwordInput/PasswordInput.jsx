import React from "react";
import style from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function PhoneInput({ value, setValue }) {
  return (
    <div className={style.inputContainer}>
      <FontAwesomeIcon icon={faLock} />
      <input placeholder="password" type="password" name="password" value={value} onChange={(e) => setValue(e.target.value)} className={style.input} />
      <FontAwesomeIcon icon={faEyeSlash} />
    </div>
  );
}

export default PhoneInput;
