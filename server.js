
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);

const mail = require('./modules/mail');
const sms = require('./modules/sms');
const moment = require('moment');
const Ekad = require('./models/ekadashi.js');
const Phones = require('./models/phones');
const Emails = require('./models/emails');
const tomorrowDate = moment(new Date()).add(1, 'days').format('YYYY-MM-DD');

//const tomorrowDate = moment(new Date('2019-08-26')).format("YYYY-MM-DD");

setInterval(async () => {
  console.log('check ' + new Date());
  let ekadashi = await Ekad.find({
    start: {
      $gte: new Date(tomorrowDate + 'T00:00:00.000Z'),
      $lte: new Date(tomorrowDate + 'T23:59:59.999Z'),
    },
  });

  if (ekadashi.length !== 0) {
    const phones = await Phones.find();
    const emails = await Emails.find();
    console.log('for each >>>>>>>>>>>>>>>>>>>>');
    phones.forEach((phone) => {
      setInterval(() => {
        sms(phone.number, ekadashi.name, ekadashi.start, ekadashi.end);
      }, 1000); //send sms with delay
    });
    let resEmails = emails.filter((email) => email.email).map(({ email }) => email).join(', ');
    mail(resEmails);
  }
}, 5000); // check date on server every hour - 1000 * 3600

