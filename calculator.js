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
    console.log(display);
    return display;
}

addEventListener('click', (e) => {
    let number = e.target.getAttribute('id');
    updateDisplay(number);
});