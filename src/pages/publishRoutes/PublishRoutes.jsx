import React, { useState } from "react";
import styles from "./styles.module.css";
import { Tabs, RouteCard, Footer, SelectLocation } from "../../components";
function PublishRoutes() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.img}></div>
          <h2 className={styles.heading}>Publish Routes</h2>
        </div>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <SelectLocation />
        <p className={styles.savedRoutes}>Saved Routes</p>
        <div className={styles.routeCard}>
          <RouteCard place={"Pres Hostel T. Malingo"} city={"Buea"} />
          <RouteCard place={"Cite La Plaza. Malingo"} city={"Buea"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PublishRoutes;
