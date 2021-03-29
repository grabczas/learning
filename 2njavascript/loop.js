var myToDo = [];
var task1 = 'Zrobic kawe';
var task2 = 'Zrobic sniadanie';
var task3 = 'Umyc zeby';
var task4 = 'Ubrac sie';
var task5 = 'Wyjsc do pracy';

myToDo.push (task1, task2, task3, task4, task5)

var cont = document.getElementById('tablica');

// create ul element and set the attributes.
var ul = document.createElement('ul');
ul.setAttribute('style', 'padding: 0; margin: 0;');
ul.setAttribute('id', 'theList');

for (i = 0; i <= myToDo.length - 1; i++) {
    var li = document.createElement('li');     // create li element.
    li.innerHTML = myToDo[i];      // assigning text to li using array value.
    li.setAttribute('style', 'display: block;');    // remove the bullets.

    ul.appendChild(li);     // append li to ul.
}

cont.appendChild(ul);       // add list to the container.




