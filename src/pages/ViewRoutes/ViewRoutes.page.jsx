import React from "react";
import styles from "./viewRoutes.module.css";
import { LocationField } from "../../components";

const ViewRoutes = () => {
	return (
		<section className={`${styles.pageWrapper}`}>
			<section className={`${styles.topCard}`}>
				<p className={`${styles.text}`}>
					Blanco Disposal <br /> Services
				</p>
			</section>
			<LocationField />
		</section>
	);
};

export default ViewRoutes;
