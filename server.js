var accountSid = 'AC02b9ec3b13f4e76cc76a4b4acd17c525'; // Your Account SID from www.twilio.com/console
var authToken = '7148383ae5d4fe974cd952eeda6bd57a';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+17049573395',  // Text this number
    from: '+18449214237 ' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
