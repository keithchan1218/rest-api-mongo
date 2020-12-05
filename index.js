const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
// for request body support JSON format (middleware)
app.use(bodyParser.json());

//connect to mongoose
const dbPath = 'mongodb://localhost/dbname';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
  console.log('connected');
}, error => {
  console.log(error, 'error');
})

app.get('/', (req, res) => {
  res.send('Welcome to Mini TodoList API');
});

// MongoDB
const todoController = require('./controller/todoList.controller');
app.get('/todos', (todoController.getAll));
app.get('/todo/id', (todoController.findOne));
app.get('/todo/date', (todoController.findDate));
app.route('/todo').post(todoController.addOne).delete(todoController.findOneAndDelete);

// Handle dynamic port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});