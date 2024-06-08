
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
    let oldText = document.getElementById("number-display").textContent;
    let newText = oldText + x;
    document.getElementById("number-display").textContent = newText;
    
}
