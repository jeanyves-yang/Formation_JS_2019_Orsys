import { addTodo } from './todos.js';

(async () => {
  const API_KEY = "0UTRbFtkMxAplrohufYco5IY74U8hOes";

  const { data } = await giphyRandom(API_KEY);
  document.body.style.backgroundImage = `url(${data.image_url})`;
  // console.log(data.image_url);
})();

/** @type {HTMLFormElement} */
const formElt = document.querySelector('.new-todo');
/** @type {HTMLInputElement} */
const inputElt = document.querySelector('#todo');
/** @type {HTMLInputElement} */
const checkBoxElt = document.querySelector('#toggle');
/** @type {HTMLDivElement} */
const divElt = document.querySelector('.list');
/** @type {HTMLButtonElement} */
const allButtonElt = document.querySelector('#all');
/** @type {HTMLButtonElement} */
const activeButtonElt = document.querySelector('#active');
/** @type {HTMLButtonElement} */
const completedButtonElt = document.querySelector('#completed');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodo(
    {
      id: Math.random(),
      title: inputElt.value,
      completed: false,
    },
    divElt,
  );
  inputElt.value = '';
  event.target.focus = true;
});

checkBoxElt.addEventListener('click', (event) => {
  const rowList = document.querySelectorAll('.row');
  for (const row of rowList) {
    row.querySelector('.completed').checked = event.target.checked;
  }
});

allButtonElt.addEventListener('click', (event) => {
  const rowList = document.querySelectorAll('.row');
  for (const row of rowList) {
    row.style.display = 'block';
  }
});

activeButtonElt.addEventListener('click', (event) => {
  const rowList = document.querySelectorAll('.row');
  for (const row of rowList) {
    if (row.querySelector('.completed').checked === false) {
      row.style.display = 'block';
    } else {
      row.style.display = 'none';
    }
  }
});

completedButtonElt.addEventListener('click', (event) => {
  const rowList = document.querySelectorAll('.row');
  console.log(rowList);
  for (const row of rowList) {
    if (row.querySelector('.completed').checked === true) {
      row.style.display = 'block';
    } else {
      row.style.display = 'none';
    }
  }
});
