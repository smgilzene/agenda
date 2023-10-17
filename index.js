const express = require('express')
const app = express();
const port = 3000
const todoList = [];


app.get('/todo', function (req, res) {
  res.send(todoList);
})

app.get('/todo/add', function (req, res) {
  // TODO: change this to a user defined input
  const newTodo = 'new item';

  // add item to todo list
  todoList.push(newTodo);

  res.send(todoList);
});

app.get('/todo/delete', function (req, res) {

  todoList.pop();

  res.send(todoList);
});




console.log(`Server is running on port ${3000}`);
app.listen(port)
