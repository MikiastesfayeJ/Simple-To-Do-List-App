const output = document.querySelector('.list');
const input = document.querySelector('.in > input');
const add = document.querySelector('.in > button');

let count = 0;          // to count the number of tasks


add.addEventListener('click', () => {
    output.innerText = input.value;
    input.value = '';
});