import { deleteTodo } from "./api.js";

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @param {HTMLElement} containerElt
 */
export function addTodo(todo, containerElt) {
  // Create a row
  const rowElt = document.createElement('div');
  rowElt.style.display = 'block';
  rowElt.classList.add('row'); // rowElt.className = 'row';
  rowElt.id = todo.id;

  // Create a checkbox, add it to the row
  const checkBoxElt = document.createElement('input');
  checkBoxElt.type = 'checkbox';
  checkBoxElt.classList.add('completed');
  checkBoxElt.checked = todo.completed;
  rowElt.appendChild(checkBoxElt);

  // Create an input text field, add it to the row
  const textElt = document.createElement('input');
  textElt.type = 'text';
  textElt.classList.add('todo');
  textElt.value = todo.title;
  textElt.id = `text${todo.id}`;
  rowElt.appendChild(textElt);

  // Add a button minus to the row
  const buttonElt = document.createElement('button');
  buttonElt.innerText = '-';
  buttonElt.classList.add('addremovebutton');
  buttonElt.addEventListener('click', (event) => {
    event.preventDefault();
    (async () => {
      console.log(event.target.parentNode.id);
      await deleteTodo(event.target.parentNode.id);
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    })();
  });
  rowElt.appendChild(buttonElt);

  // Add the row to the container
  containerElt.appendChild(rowElt);
}
