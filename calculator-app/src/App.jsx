import { useState } from "react";
import styles from "./app.module.css";

function App() {
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className={styles.calculator}>
			<div className={styles.display}></div>
			<div className={styles.keyboard}>
				<div className={styles.numbers}>
					{numbers.map((number) => (
						<button className={styles.button}>{number}</button>
					))}
				</div>
				<div className={styles.operations}>
					<button className={styles.button}>+</button>
					<button className={styles.button}>-</button>
					<button className={styles.button}>=</button>
					<button className={styles.button}>C</button>
				</div>
			</div>
		</div>
	);
}

export default App;
