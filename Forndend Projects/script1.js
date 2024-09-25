let display = document.getElementById('display');
let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  display.innerText = displayValue;
}

function appendOperator(operator) {
  displayValue += operator;
  display.innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  display.innerText = '0';
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  display.innerText = displayValue || '0';
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    display.innerText = displayValue;
  } catch (error) {
    display.innerText = 'Error';
  }
}
