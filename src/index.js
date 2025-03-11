import { add, subtract, multiply, divide } from './calculator.js';

document.addEventListener("DOMContentLoaded", function () {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operationSelect = document.getElementById("operation");
    const calculateButton = document.getElementById("calculate");
    const resetButton = document.getElementById("reset"); // Add a reset button
    const resultDisplay = document.getElementById("result");

    function calculate() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;
        let result;

        // Error handling for empty inputs
        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.innerText = "Please enter valid numbers!";
            return;
        }

        switch (operation) {
            case "add":
                result = add(num1, num2);
                break;
            case "subtract":
                result = subtract(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                result = divide(num1, num2);
                break;
            default:
                result = "Invalid operation";
        }

        resultDisplay.innerText = `Result: ${result}`;
    }

    calculateButton.addEventListener("click", calculate);

    // Add event listener for the Enter key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calculate();
        }
    });

    // Add event listener for the reset button
    resetButton.addEventListener("click", function () {
        num1Input.value = "";
        num2Input.value = "";
        resultDisplay.innerText = "";
    });
});
