var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equalsBtn = document.querySelector('#equals');
var value1;
var value2;
var op;

digits.forEach(function(btn){
    btn.addEventListener('click', function (){
        console.log(this.innerText);
        //"this" is the button being clicked...
        readout.innerText += this.innerText;
    })
})

operators.forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log(this.innerText)
        readout.innerText += this.innerText;
        value1 = Number(readout.innerText);
        readout.innerText = '';
        op = this.operator;
    })
})

function solve(){
    value2 = Number(readout.innerText);
}

equalsBtn.addEventListener('click', function(){
    
})