const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}



function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Syntax Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}