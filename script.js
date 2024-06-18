let display = document.getElementById('display');
let operation = document.getElementById('operation');
let currentInput = '';
let operator = '';
let previousInput = '';

document.addEventListener('keydown', handleKeyPress);

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return;
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateOperation();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    updateDisplay();
    operation.innerText = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
    operation.innerText = '';
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}

function updateOperation() {
    operation.innerText = `${previousInput} ${operator}`;
}

function calculateSquareRoot() {
    if (currentInput === '') return;
    currentInput = Math.sqrt(parseFloat(currentInput));
    updateDisplay();
}

function calculateSquare() {
    if (currentInput === '') return;
    currentInput = Math.pow(parseFloat(currentInput), 2);
    updateDisplay();
}

function calculateSine() {
    if (currentInput === '') return;
    currentInput = Math.sin(parseFloat(currentInput));
    updateDisplay();
}

function calculateCosine() {
    if (currentInput === '') return;
    currentInput = Math.cos(parseFloat(currentInput));
    updateDisplay();
}

function calculateTangent() {
    if (currentInput === '') return;
    currentInput = Math.tan(parseFloat(currentInput));
    updateDisplay();
}

function handleKeyPress(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+') {
        setOperation('+');
    } else if (key === '-') {
        setOperation('-');
    } else if (key === '*') {
        setOperation('*');
    } else if (key === '/') {
        setOperation('/');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}
