import React from "react";
import styles from "./locationField.module.css";

const LocationField = () => {
	return (
		<div className={`${styles.wrapper}`}>
			<p className={`${styles.topText}`}>Cite La paza, Malingo</p>
			<p className={`${styles.bottomText}`}>Buea</p>
		</div>
	);
};

export default LocationField;
