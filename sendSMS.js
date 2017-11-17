var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.post("/sms", function (request, response) {
  console.log(request.body);
  response.send("<Response><Message>Hello</Message></Response>")
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ');
});
