// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const formidable = require("formidable");


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    const fileInfo = {
      name: files.upfile.name,
      type: files.upfile.type,
      size: files.upfile.size
    };
    res.json(fileInfo);
  });
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
