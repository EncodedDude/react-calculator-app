import { useState } from "react";
import styles from "./app.module.css";

function App() {
	const [operand1, setOperand1] = useState("");
	const [operand2, setOperand2] = useState("");
	const [operator, setOperator] = useState("");

	const clickNumber = (value) => {
		if (!operator) {
			setOperand1(operand1 + value);
		} else {
			setOperand2(operand2 + value);
		}
	};

	const clickOperator = (value) => {
		const display = document.querySelector("#display");
		display.style.color = "white";
		if (value === "+" || value === "-") {
			setOperator(value);
		} else if (value === "C") {
			setOperand1("");
			setOperand2("");
			setOperator("");
		} else if (value === "=") {
			const num1 = Number(operand1);
			const num2 = Number(operand2);
			setOperand1(operator === "+" ? num1 + num2 : num1 - num2);
			setOperand2("");
			setOperator("");
			display.style.color = "#FF9F0A";
		}
	};

	const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "=", "C"];
	return (
		<div className={styles.calculator}>
			<div className={styles.display} id="display">
				{operand1 + operator + operand2}
			</div>
			<div className={styles.keyboard}>
				<div className={styles.numbers}>
					{buttons.map(
						(value, index) =>
							index < 10 && (
								<button
									className={styles.button}
									onClick={() => clickNumber(value)}
									key={index}
								>
									{value}
								</button>
							)
					)}
				</div>
				<div className={styles.operations}>
					{buttons.map(
						(value, index) =>
							index >= 10 && (
								<button
									className={styles.button}
									onClick={() => clickOperator(value)}
									key={index}
								>
									{value}
								</button>
							)
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
