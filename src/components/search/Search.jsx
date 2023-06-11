import React from "react";
import style from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className={style.inputContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input placeholder="Search Collectors in Location" type="text" className={style.input} />
    </div>
  );
}

export default Search;
