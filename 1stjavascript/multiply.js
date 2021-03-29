var element = document.querySelector('div');
var counter = document.getElementById('counter');

var x = 2;
var y = 3;
var z = x * y;

element.addEventListener('click', updatenumber)

function updatenumber() {
   
    counter.textContent = "Wynik działania " + x + " razy " + y + " wynosi: " + z;
    return x++, z=x*y;
}