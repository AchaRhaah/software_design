import React from "react";
import styles from "./locationField.module.css";

const LocationField = ({ topText, bottomText }) => {
	return (
		<div className={`${styles.wrapper}`}>
			<p className={`${styles.topText}`}>{topText}</p>
			<p className={`${styles.bottomText}`}>{bottomText}</p>
		</div>
	);
};

export default LocationField;
