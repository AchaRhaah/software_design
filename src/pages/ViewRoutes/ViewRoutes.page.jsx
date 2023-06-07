import React from "react";
import styles from "./viewRoutes.module.css";
import { LocationField, PrimaryButton, Tabs, Footer } from "../../components";
import arrowBack from "../../assets/bi_arrow-left.svg";

const ViewRoutes = () => {
	const texts = [
		{ top: "Bla bla bla", bottom: "Buea" },
		{ top: "Cite La plaza, Molyko", bottom: "Limbe" },
		{ top: "Bla bla bla", bottom: "Tiko" },
		{ top: "Bla bla bla", bottom: "Kumba" },
		{ top: "Bla bla bla", bottom: "Douala" },
	];

	return (
		<section className={`${styles.pageWrapper}`}>
			<img className={`${styles.backArrow}`} src={arrowBack} alt="" />
			<div className={`${styles.topCard}`}>
				<p className={`${styles.text}`}>
					Blanco Disposal <br /> Services
				</p>
				<div className={`${styles.btnWrapper}`}>
					<PrimaryButton text={"Subscribe"} disabled={false} />
				</div>
			</div>
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
