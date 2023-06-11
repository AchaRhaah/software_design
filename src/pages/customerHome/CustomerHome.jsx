import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Footer, Search, TopCard } from "../../components";
import CollectorGrid from "../../components/collector-grid/CollectorGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCollectors } from "../../redux/thunks/collectorsThunk";
import { useNavigate } from "react-router-dom";

const header = {
  text: "Waste Pick-Up Service",
  buttonText: "Schedule Now",
  buttonDisabled: false,
};
const user = { name: "Sally" };

function CustomerHome() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector((state) => state.getCustomers.customer);
  const collector = useSelector((state) => state.getCollectors.collector);



  useEffect(() => {
    if(!(customer.customer_id || collector.collector_id)){
      navigate('/login');
    }
    dispatch(fetchAllCollectors());
  }, []);

  return (
    <>
      <section className={`${styles.pageWrapper}`}>
        <div>
          <p className={`${styles.text}`}>Hello {customer.user?.name || 'Sally'} !</p>
          <p className={styles.greyText}>Where would you dispose today?</p>
        </div>
        <TopCard
          text={header.text}
          buttonText={header.buttonText}
          buttonDisabled={header.buttonDisabled}
        />
        <Search />
        <CollectorGrid />
      </section>
      <Footer />
    </>
  );
}

export default CustomerHome;
