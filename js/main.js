var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');

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
    })
})  