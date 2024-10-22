const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');


let tasks = [];


app.get('/todo', (req, res) => {
  res.render('todo', { tasks: tasks });
});

app.post('/addtask', (req, res) => {
  const newTask = req.body.newtask;
  tasks.push(newTask);
  res.redirect('/todo');
});


app.post('/deletetask', (req, res) => {
  const taskToDelete = req.body.task;
  tasks = tasks.filter(task => task !== taskToDelete);
  res.redirect('/todo');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on${PORT}`);
});
