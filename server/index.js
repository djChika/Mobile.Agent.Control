const express = require('express');
const app = express();
const path = require('path');

const PORT = 3005;

var newsRouter = require('./routes/news');

// frontapp
app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build', '/index.html'));
});
// frontapp

app.use(newsRouter);

app.listen(process.env.port || PORT);

console.log('Running at Port ' + PORT);
