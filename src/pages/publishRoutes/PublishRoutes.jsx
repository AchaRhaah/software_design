import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Tabs, RouteCard, Footer, SelectLocation } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRoute, fetchCollectorRoutes } from "../../redux/thunks/collectorsThunk";
import PrimaryButton from "../../components/primaryBtn/PrimaryButton";
import { setRoutes } from "../../redux/reducers/collectorsReducer";
import { setLoading } from "../../redux/reducers/loaderReducer";
const tabs = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function PublishRoutes() {
  const collector = useSelector((state) => state.getCollectors.collector);
  const routes = useSelector((state) => state.getCollectors.routes);
  const route_ids = useSelector((state) => state.getCollectors.route_ids);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [deletedPoints, setDeletedPoints] = useState([]);

  useEffect(() => {
    if(!collector.collector_id){  
      navigate('/login');
    }
    else{
      dispatch(fetchCollectorRoutes(collector.collector_id))
    }
  }, [collector])

  const addLocation = (location_name) => {
    const _routes = [...routes];
    _routes[activeTab] = [..._routes[activeTab], {collectionpoint: { Location : { name: location_name}}}]
    dispatch(setRoutes(_routes));
    if(!isEditing){
      setIsEditing(true)
    }
  }

  const deleteLocation = (idx) => {
    const _routes = [...routes];
    const spliced = [..._routes[activeTab]]
    const point = spliced.splice(idx, 1)[0];
    _routes[activeTab] = spliced;
    dispatch(setRoutes(_routes));
    console.log(point);
    if(point?.point_id && point?.route_id){
      setDeletedPoints([...deletedPoints, point.collectionpoint.Location.location_id])
    }
  }

  const saveRoutes = () => {
    const saveData = {routes, collector_id: collector.collector_id, deletedPoints, route_ids};
    
    console.log('Deleted', deletedPoints);
    // return;
    try{
      dispatch(setLoading(true));
      dispatch(addRoute(saveData)).then(() => {
        dispatch(fetchCollectorRoutes(collector.collector_id));
        dispatch(setLoading(false));
      })
    }catch(e){
      console.log('Error', e)
    }
  }



  return (
    <>
      <div className={styles.mainContainer}>
      <div className={styles.header}>
        <div className={styles.img}></div>
        <h2 className={styles.heading}>Publish Routes</h2>
      </div>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <SelectLocation addLocation={addLocation} />
      <p className={styles.savedRoutes}>{tabs[activeTab]} Routes</p>
      {
        routes.length > 0 && routes[activeTab].map(({ collectionpoint }, i) => {
          return (<RouteCard place={collectionpoint.Location.name} city={"Buea"} deleteLoc={() => deleteLocation(i)} />)
        })
      }
      <div className={styles.save}><PrimaryButton text={"Save All"} disabled={!isEditing} onClick={saveRoutes}/></div>
    </div>
    <Footer collector />
    </>
  );
}

export default PublishRoutes;
