var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equalsBtn = document.querySelector('#equals');
var clearBtn = document.querySelector('#clear');
var allClearBtn = document.querySelector('#all-clear')
var firstNumber;
var secondNumber = Number(readout.innerText);
var operation;
var isAnAnswer = false;

digits.forEach(function(btn){
    btn.addEventListener('click', function (){
        if (isAnAnswer === true) {
            allClear();
            readout.innerText += this.innerText;
        } else {
        readout.innerText += this.innerText;
        }
    })
})


operators.forEach(function(btn){
    btn.addEventListener('click', function(){
        if (firstNumber === undefined){
            firstNumber = Number(readout.innerText);
            operation = this.innerText;
            readout.innerText = '';
        } else {
            secondNumber = Number(readout.innerText);
            firstNumber = evaluate(operation, firstNumber, secondNumber);
            operation = this.innerText;
            readout.innerText = '';
        }  
    })
})
function allClear() {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    isAnAnswer = false;
    readout.innerText = '';
}
function clear(){
    readout.innerText = '';
}
clearBtn.addEventListener('click', clear);
allClearBtn.addEventListener('click', allClear);

function evaluate(operation, num1, num2){
    switch(operation) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*': 
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
    }
}

equalsBtn.addEventListener('click', function(){
    secondNumber = Number(readout.innerText);
    // debugger
    firstNumber = evaluate(operation, firstNumber, secondNumber);
    readout.innerText = firstNumber;
    isAnAnswer = true;
})