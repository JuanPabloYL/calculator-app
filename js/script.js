const currentNumber = document.querySelector("[data-name='current']");
const previousNumber = document.querySelector("[data-name='previous']");

// Operations
const addition = document.querySelector('[data-name="addition"]');
const substraction = document.querySelector("[data-name='substraction']");
const division = document.querySelector('[data-name="division"]');
const multiplication = document.querySelector('[data-name="multiplication"]');

const numbers = document.querySelectorAll(".numbers__number");
const operations = document.querySelectorAll(".operation");

class Calculator {
  constructor({ previousOperandInput, currentOperandInput }) {
    this.previousOperandInput = previousOperandInput;
    this.currentOperandInput = currentOperandInput;
    this.operation = undefined;
    this.currentOperand = "";
    this.previousOperand = "";
  }

  appendNumber(number) {
    this.currentOperand += number;
    this.updateUI();
  }

  updateUI() {
    this.currentOperandInput.textContent = this.currentOperand;
  }

  selectOperation(operand) {
    if (this.currentOperandInput.innerText === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    // Assign operation
    this.operation = operand;
    this.previousOperand = this.currentOperand;

    this.previousOperandInput.innerText =
      this.currentOperandInput.innerText + operand;

    // Update values
    this.currentOperand = "";
    this.currentOperandInput.innerText = "";
  }

  compute() {
    let computation;
    const number1 = parseInt(this.currentOperand);
    const number2 = parseInt(this.previousOperand);
    console.log(number1, number2);
    switch (this.operation) {
      case "+":
        computation = number1 + number2;
        break;
      case "-":
        computation = number1 - number2;
        break;
      case "*":
        computation = number1 * number2;
        break;
      case "/":
        computation = number1 / number2;
        break;
      default:
        break;
    }
    this.currentOperand = computation;
    this.currentOperandInput.innerText = computation;
    this.previousOperand = "";
    console.log(computation);
  }
}

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
