// const currentNumber = document.querySelector("[data-name='current']");
// const previousNumber = document.querySelector("[data-name='previous']");
//
// // Operations
// const addition = document.querySelector('[data-name="addition"]');
// const substraction = document.querySelector("[data-name='substraction']");
// const division = document.querySelector('[data-name="division"]');
// const multiplication = document.querySelector('[data-name="multiplication"]');
// const assign = document.querySelector('[data-name="equal"]');
//
// const numbers = document.querySelectorAll(".numbers__number");
// const operations = document.querySelectorAll(".operation");
// const reset = document.querySelector("[data-name='reset']");
// const deleteBtn = document.querySelector('[data-name="delete"]');

// class Calculator {
//   constructor({ previousOperandInput, currentOperandInput }) {
//     this.previousOperandInput = previousOperandInput;
//     this.currentOperandInput = currentOperandInput;
//     this.operation = undefined;
//     this.currentOperand = "";
//     this.previousOperand = "";
//   }
//
//   appendNumber(number) {
//     if (number === ".") {
//       if (this.currentOperand.includes(".") || !this.currentOperand.length)
//         return;
//     }
//     this.currentOperand += number;
//     this.updateUI();
//   }
//
//   updateUI() {
//     this.currentOperandInput.textContent = this.currentOperand;
//   }
//
//   selectOperation(operand) {
//     if (this.currentOperandInput.innerText === "") return;
//     if (this.previousOperand !== "") {
//       this.compute();
//     }
//     // Assign operation
//     this.operation = operand;
//     this.previousOperand = this.currentOperand;
//
//     this.previousOperandInput.innerText =
//       this.currentOperandInput.innerText + operand;
//
//     // Update values
//     this.currentOperand = "";
//     this.currentOperandInput.innerText = "";
//   }
//
//   compute() {
//     let computation;
//     const number2 = parseFloat(this.currentOperand);
//     const number1 = parseFloat(this.previousOperand);
//     switch (this.operation) {
//       case "+":
//         computation = number1 + number2;
//         break;
//       case "-":
//         computation = number1 - number2;
//         break;
//       case "x":
//         computation = number1 * number2;
//         break;
//       case "/":
//         if (number2 === 0) {
//           return alert("Error: Cannot divide by 0");
//         }
//         computation = number1 / number2;
//         break;
//       default:
//         break;
//     }
//     this.currentOperand = computation;
//     this.currentOperandInput.innerText = computation;
//     this.previousOperand = "";
//     this.previousOperandInput.innerText = "";
//     console.log(computation);
//   }
//
//   deleteNum() {
//     this.currentOperandInput.innerText =
//       this.currentOperandInput.innerText.slice(0, -1);
//
//     this.currentOperand = this.currentOperandInput.innerText;
//   }
//
//   reset() {
//     this.operation = undefined;
//     this.currentOperand = "";
//     this.previousOperand = "";
//     this.previousOperandInput.innerText = "";
//     this.currentOperandInput.innerText = "";
//   }
// }
//
import Calculator from "./classes/calculator.js";
import {
  previousNumber,
  currentNumber,
  numbers,
  operations,
  assign,
  reset,
  deleteBtn,
} from "./selectors.js";

const calculator = new Calculator({
  previousOperandInput: previousNumber,
  currentOperandInput: currentNumber,
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.appendNumber(number.textContent);
  });
});

operations.forEach((operand) => {
  operand.addEventListener("click", () => {
    calculator.selectOperation(operand.textContent);
  });
});

assign.addEventListener("click", () => {
  calculator.compute();
});

reset.addEventListener("click", () => {
  calculator.reset();
});

deleteBtn.addEventListener("click", () => {
  calculator.deleteNum();
});
// numbers.forEach((number) => {
//   number.addEventListener("click", () => {
//     calculator.appendNumber(number.textContent);
//   });
// });
//
// operations.forEach((operand) => {
//   operand.addEventListener("click", () => {
//     calculator.selectOperation(operand.textContent);
//   });
// });
//
// assign.addEventListener("click", () => {
//   calculator.compute();
// });
//
// reset.addEventListener("click", () => {
//   calculator.reset();
// });
//
// deleteBtn.addEventListener("click", () => {
//   calculator.deleteNum();
// });
