function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let display = "";
let answerDisplay = document.querySelector('.answer-display');

function updateDisplay(string) {
    display=display+string;
    answerDisplay.textContent = display;
    return display;
}

function clearDisplay() {
    answerDisplay.textContent = "";
    display = "";
}

addEventListener('click', (e) => {
    let input = e.target.getAttribute('id');
    let type = e.target.getAttribute('class');
    
    switch (type) {
        case "clear" :
            clearDisplay();
            break;
        case "number" :
            updateDisplay(input);
            break;
        case "operator" :
            updateDisplay(input);
            break;
        case "equal" :
            updateDisplay(input);
            break;
        default :
            break;
    }
});