const display = document.querySelector('.lists');
const input = document.querySelector('.in > input');
const add = document.querySelector('.in > button');

let count = 0;          // to count the number of tasks
let roaster = [];
let list_string = '';


add.addEventListener('click', () => {    
    //to add tasks
    let newList  = document.createElement('p');
    display.appendChild(newList);
    console.log(newList);
    input.value = '';

    //to remove tasks
});

