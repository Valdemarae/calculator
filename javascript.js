function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
}

function displayButtonValue () {
    for (button of buttons) {
        if (button.classList.contains('1')) {
            button.addEventListener('click', () => displayValues.textContent += '1');
        } else if (button.classList.contains('2')) {
            button.addEventListener('click', () => displayValues.textContent += '2');
        } else if (button.classList.contains('3')) {
            button.addEventListener('click', () => displayValues.textContent += '3');
        } else if (button.classList.contains('4')) {
            button.addEventListener('click', () => displayValues.textContent += '4');
        } else if (button.classList.contains('5')) {
            button.addEventListener('click', () => displayValues.textContent += '5');
        } else if (button.classList.contains('6')) {
            button.addEventListener('click', () => displayValues.textContent += '6');
        } else if (button.classList.contains('7')) {
            button.addEventListener('click', () => displayValues.textContent += '7');
        } else if (button.classList.contains('8')) {
            button.addEventListener('click', () => displayValues.textContent += '8');
        } else if (button.classList.contains('9')) {
            button.addEventListener('click', () => displayValues.textContent += '9');
        } else if (button.classList.contains('divi')) {
            button.addEventListener('click', () => displayValues.textContent += '÷');
        } else if (button.classList.contains('multi')) {
            button.addEventListener('click', () => displayValues.textContent += '×');
        } else if (button.classList.contains('addd')) {
            button.addEventListener('click', () => displayValues.textContent += '+');
        } else if (button.classList.contains('subtra')) {
            button.addEventListener('click', () => displayValues.textContent += '-');
        } else if (button.classList.contains('dot')) {
            button.addEventListener('click', () => displayValues.textContent += '.');
        } else if (button.classList.contains('0')) {
            button.addEventListener('click', () => displayValues.textContent += '0');
        }
        displayContent = displayValues.textContent;
    }
}

let firstNumber, secondNumber, operator;
const buttons = document.querySelectorAll('button');
const displayValues = document.querySelector('.displayValues');
let displayContent = "";
displayButtonValue();
