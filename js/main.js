var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');

digits.forEach(function(btn){
    btn.addEventListener('click', function (){
        console.log(this.innerText);
        //"this" is the button being clicked...
        readout.innerText += this.innerText;
    })
})