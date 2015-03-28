express = require('express');
app = express();
server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile('index.html');
});

server.listen(3000, function() {
  console.log('server listening to port 3000');
});