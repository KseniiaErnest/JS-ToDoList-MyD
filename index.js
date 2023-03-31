const toDoContainer = document.querySelector('.toDoContainer');
const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
const listItem = document.createElement('li');
listItem.innerText = inputField.value;
listItem.classList.add('styleList')

toDoContainer.appendChild(listItem);

inputField.value = '';

listItem.addEventListener('click', () => {
  listItem.classList.add('styleListRemove')
})

listItem.addEventListener('dblclick', () => {
  toDoContainer.removeChild(listItem);
})

});
