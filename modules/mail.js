'use strict';
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main(mails, sublect, text) {
  console.log('mails send to ', mails);
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'filpoyma@gmail.com',
      pass: 'R-Rb3Rme&Me',
    },
  });
  const mailOptions = {
    from: 'info@ekadashi.com',
    to: mails,
    subject: 'nodejs working ?',
    text: 'Hello world ?',
  };
  transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      //res.send('Email could not sent due to error: ' + error);
      console.log('Error', error);
    } else {
      //res.send('Email has been sent successfully');
      console.log('mail sent');
    }
  });
}

//main().catch(console.error);
module.exports = main;


