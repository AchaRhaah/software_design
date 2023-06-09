import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
function GreenBtn({ text, link }) {
	const navigate = useNavigate();
	return (
		<button onClick={onPress} className={styles.btnContainer}>
			{text}
		</button>
	);
}

export default GreenBtn;
