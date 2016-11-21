var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'web.html'));
});

app.get('/ui/newcss.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'newcss.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
app.get('/ui/download.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download.jpg'));
});
app.get('/ui/download (1).jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download (1).jpg'));
});
app.get('/ui/download (4)', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download (4).jpg'));
});
app.get('/ui/download (5).jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download (5).jpg'));
});
app.get('/ui/images (2).jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images  (2).jpg'));
});

