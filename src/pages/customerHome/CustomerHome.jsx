import React from "react";
import styles from "./styles.module.css";
import { Footer, Search, TopCard } from "../../components";
import CollectorGrid from "../../components/collector-grid/CollectorGrid";

const CustomerHome = () => {
  const header = {
    text: "Waste Pick-Up Service",
    buttonText: "Schedule Now",
    buttonDisabled: false,
  };
  const user = { name: "Sally" };
  return (
    <section className={`${styles.pageWrapper}`}>
      <div>
        <p className={`${styles.text}`}>Hello {user.name} !</p>
        <p className={styles.greyText}>Where would you dispose today?</p>
      </div>
      <TopCard
        text={header.text}
        buttonText={header.buttonText}
        buttonDisabled={header.buttonDisabled}
      />
      <Search />
      <CollectorGrid />
      <Footer />
    </section>
  );
};

export default CustomerHome;
