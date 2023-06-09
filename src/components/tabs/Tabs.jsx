import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./tabs.module.css";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  if (!tabs) {
    throw new Error("Tabs prop Must Be defined");
  }
  if (!Array.isArray(tabs)) {
    throw new Error("Tabs must be an array");
  }

  return (
    <div className={styles.body}>
      {tabs.map((tab, i) => {
        return (
          <div
            className={`${styles.tab} ${i === activeTab ? styles.active : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </div>
        );
      })}
      <span className={styles.arrow}><FontAwesomeIcon className={styles.arrowRight} icon={faChevronRight} /></span>
    </div>
  );
};

export default Tabs;
