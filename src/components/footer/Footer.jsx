import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./footer.module.css";
import Home from "../../assets/icons/Home.icon";
import Book from "../../assets/icons/Book.icon";
import Info from "../../assets/icons/Info.icon";
import Phone from "../../assets/icons/Phone.icon";

const Footer = () => {
	return (
		<footer className={styles.body}>
			<NavLink
				to="/home"
				className={({ isActive }) =>
					isActive ? `${styles.nav} ${styles.active}` : styles.nav
				}
			>
				<Home />
			</NavLink>
			<NavLink
				to="/view-routes"
				className={({ isActive }) =>
					isActive ? `${styles.nav} ${styles.active}` : styles.nav
				}
			>
				<Book />
			</NavLink>
			<NavLink
				to="/phone"
				className={({ isActive }) =>
					isActive ? `${styles.nav} ${styles.active}` : styles.nav
				}
			>
				<Phone />
			</NavLink>
			<NavLink
				to="/info"
				className={({ isActive }) =>
					isActive ? `${styles.nav} ${styles.active}` : styles.nav
				}
			>
				<Info />
			</NavLink>
		</footer>
	);
};

export default Footer;
