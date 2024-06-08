let wholeString = "";
let valueOne;
let valueTwo;
let valueOperator;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x/y;
}


function appendSym(x) {
    if(valueOperator === "+" || valueOperator === "*" || valueOperator === "/" || valueOperator === "-") {
        clearScreen();
        valueOperator = "";
    }
    let oldText = document.getElementById("number-display").textContent;
    let newText = oldText + x;
    wholeString = wholeString + x;
    document.getElementById("number-display").textContent = newText;
    console.log(wholeString);    
    
}

function appendOpp(y) {
    clearScreen();
    wholeString = wholeString + y;
    document.getElementById("number-display").textContent = y;
    valueOperator = document.getElementById("number-display").textContent;
    console.log(wholeString);    

}

function clearScreen() {
    document.getElementById("number-display").textContent = "";
}