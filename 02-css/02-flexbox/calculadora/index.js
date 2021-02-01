const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
let array = {};

function btnClick(value) {
    display.innerHTML += `${value}`;
    switch (value) {
        case "clear":
            clearDisplay();
            break;

        case "+":
            array.push(display.innerHTML);
            break;

        case "-":
            break;

        case "*":
            break;

        case "/":
            break;


    }
    console.log(array);
}

function clearDisplay() {
    display.innerHTML = "";
}