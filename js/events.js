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
