const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

function sms(number, name, start, end) {
  client.messages
      .create({
        body: `${name}, start At ${start}, end Ad ${end}`,
        from: '+12516629121',
        to: number,
      })
      .then(message => console.log(message.sid));
}

module.exports = sms;

