const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

const PORT = 3005;

app.use(bodyParser.json());

// frontapp
app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build', '/index.html'));
});
// frontapp

//routes
var newsRouter = require('./routes/news');
app.use(newsRouter);
//routes

app.listen(process.env.port || PORT);

console.log('Running at Port ' + PORT);
