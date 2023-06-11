import React from "react";
import styles from "./viewRoutes.module.css";
import { LocationField, Tabs, Footer, TopCard } from "../../components";
import arrowBack from "../../assets/bi_arrow-left.svg";

const ViewRoutes = () => {
	const texts = [
		{ top: "Bla bla bla", bottom: "Buea" },
		{ top: "Cite La plaza, Molyko", bottom: "Limbe" },
		{ top: "Bla bla bla", bottom: "Tiko" },
		{ top: "Bla bla bla", bottom: "Kumba" },
		{ top: "Bla bla bla", bottom: "Douala" },
	];

	const header = {text: "Blanco Disposal Services", buttonText:"Subscribe", buttonDisabled:false}
	return (
		<section className={`${styles.pageWrapper}`}>
			<img className={`${styles.backArrow}`} src={arrowBack} alt="" />
			<TopCard text={header.text} buttonText={header.buttonText} buttonDisabled={header.buttonDisabled}/>
			<div className={`${styles.tabContainer}`}>
				<Tabs
					tabs={[
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					]}
					activeTab={2}
					setActiveTab={""}
				/>
				{texts.map((item, index) => {
					return (
						<LocationField
							topText={item.top}
							bottomText={item.bottom}
							key={index}
						/>
					);
				})}
			</div>
			<Footer />
		</section>
	);
};

export default ViewRoutes;
