import React, { useEffect, useState } from "react";
import styles from "./viewRoutes.module.css";
import { Tabs, Footer, TopCard, RouteCard } from "../../components";
import arrowBack from "../../assets/bi_arrow-left.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectorRoutes } from "../../redux/thunks/collectorsThunk";

const tabs = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const ViewRoutes = () => {
  const { collectorID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const routes = useSelector((state) => state.getCollectors.routes);
  const collectors = useSelector((state) => state.getCollectors.collectors);
  const [collectorName, setCollectorName] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!collectorID) {
      navigate("/home");
    } else {
      dispatch(fetchCollectorRoutes(collectorID));
	  const collector = collectors.find((col) => col.collector_id === collectorID);
	  setCollectorName(collector.user?.name || 'Blanco');
    }
  }, []);

  const header = {
    text: "Blanco Disposal Services",
    buttonText: "Subscribe",
    buttonDisabled: false,
  };
  return (
    <>
      <section className={`${styles.pageWrapper}`}>
        <img className={`${styles.backArrow}`} src={arrowBack} alt="" onClick={() => navigate('/home')}/>
        <TopCard
          text={`${collectorName} Disposal Services`}
          buttonText={header.buttonText}
          buttonDisabled={header.buttonDisabled}
        />
        <div className={`${styles.tabContainer}`}>
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
		  <br/>
          {routes.length > 0 ?
            routes[activeTab].map(({ collectionpoint }, i) => {
              return (
                <RouteCard
                  place={collectionpoint.Location.name}
                  city={"Buea"}
				  customerView
                />
              );
            }) : <i style={{textAlign: 'center', marginTop: '1rem', opacity: 0.6}}>No Routes For this Collector</i>}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ViewRoutes;
