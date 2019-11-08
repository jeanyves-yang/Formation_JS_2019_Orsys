export async function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  const todos = await res.json();

  return todos.slice(0, 10);
}

export async function postTodo(title, completed) {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({'title': title, 'completed': completed}),
  });
  return await res.json();
}

export async function deleteTodo(id) {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return await res.json();
}
