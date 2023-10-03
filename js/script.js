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
