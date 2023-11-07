const output = document.querySelector('.list');
const input = document.querySelector('.in > input');
const add = document.querySelector('.in > button');

let count = 0;          // to count the number of tasks
let roaster = [];
let list_string = '';

add.addEventListener('click', () => {
    roaster.push(input.value);
    list_string += ':-' + roaster[roaster.length-1] + '\n';
    output.innerText = list_string;
    input.value = '';
});