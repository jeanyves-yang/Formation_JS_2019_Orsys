let todos = [
  {
    id: Math.floor(Math.random()*10000),
    title: 'Finir la formation',
    completed: false,
  },
  {
    id: Math.floor(Math.random()*10000),
    title: 'Déjeuner',
    completed: true,
  }
];

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', express.json(), (req, res) => {
  const todo = req.body;
  todo.id = Math.floor(Math.random()*10000);
  todos.push(todo);

  return res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);

  const idxToDelete = todos.findIndex((t) => t.id === id);
  todos.splice(idxToDelete, 1);

  return res.json({});
})

app.listen(3000, () => {
  console.log('Server started');
});

