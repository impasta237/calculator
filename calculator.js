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

function checkForOperator(a) {
    if(a==="+" || a==="-" || a==="x" || a==="/" || a==="=") {
        return true;
    } else {
        return false;
    }
}

function saveNumber(input) {
    let a = input*1;
    return a;
}

function evaluateExpression(input) {
    let a=0;
    let b=0;
    let priorOperator="+";

    for(let i=0; i<input.length;i++) {
        let currentOperator = input.charAt(i);
        if(checkForOperator(currentOperator)) {
            switch(priorOperator) {
                case "+" :
                    a = add(a,b);
                    b = 0;
                    priorOperator = currentOperator;
                    break;
                case "-" :
                    a = subtract(a,b);
                    b = 0;
                    priorOperator = currentOperator;
                    break;
                case "x" :
                    a = multiply(a,b);
                    b = 0;
                    priorOperator = currentOperator;
                    break;
                case "/" :
                    a = divide(a,b);
                    b = 0;
                    priorOperator = currentOperator;
                    break;
            }
        } else {
            b = b+currentOperator.toString();
            b = b*1;
        }
    }

    switch(priorOperator) {
        case "+" :
            a = add(a,b);
            b = 0;
            break;
        case "-" :
            a = subtract(a,b);
            b = 0;
            break;
        case "x" :
            a = multiply(a,b);
            b = 0;
            break;
        case "/" :
            a = divide(a,b);
            b = 0;
            break;
    }    

    return a;

}

function updateDisplay(string) {
    display=display+string;
    answerDisplay.textContent = display;
    return display;
}

function showAnswer(answer) {
    answerDisplay.textContent = answer;
}

function clearDisplay() {
    answerDisplay.textContent = "";
    display = "";
}

addEventListener('click', (e) => {
    let input = e.target.getAttribute('id');
    let type = e.target.getAttribute('class');
    let a = 0;
    let b = 0;
    
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
            answerDisplay.textContent = evaluateExpression(answerDisplay.textContent);
            break;
        default :
            break;
    }
});