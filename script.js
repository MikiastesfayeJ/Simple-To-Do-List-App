const display = document.querySelector('.lists');
const input = document.querySelector('.in > input');
const add = document.querySelector('.in > button');

let count = 0;          // to count the number of tasks
let roaster = [];

add.addEventListener('click', () => {    
    //to add tasks
    let newList  = document.createElement('p');
    newList.innerText = input.value;
    display.appendChild(newList);
    console.log(newList);
    input.value = '';

    //to mark off tasks
    newList.addEventListener('click', () => {
        newList.style.backgroundColor = 'aqua';
        newList.style.color = 'brown';
    });

    //to remove tasks
    newList.addEventListener('dblclick', () => {
        newList.remove();
    });
});

