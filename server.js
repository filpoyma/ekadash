const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);

const accountSid = 'AC9b7a1db85e59accd8f533418a0c2c3b8';
const authToken = '6ca6bdbdf3e3336eb449bfe346ae27d3';
const client = require('twilio')(accountSid, authToken);
const moment = require('moment');
const Ekad = require('./models/ekadashi.js');
const Phones = require('./models/phones');
const tomorrowDate = moment(new Date()).add(1, 'days').format("YYYY-MM-DD");
//const tomorrowDate = moment(new Date('2019-08-26')).format("YYYY-MM-DD");


setInterval(async function () {
    console.log('check');
    let ekadashi = await Ekad.find({
        start: {
            $gte: new Date(tomorrowDate + "T00:00:00.000Z"), $lte: new Date(tomorrowDate + "T23:59:59.999Z")
        }
    });

    if (ekadashi.length !== 0) {
        const phones = Phones.find();
        console.log('for each >>>>>>>>>>>>>>>>>>>>');
        phones.forEach((phone) => {
            setInterval(() => {
                client.messages
                    .create({
                        body: `${ekadashi.name}, start At ${ekadashi.start}, end Ad ${ekadashi.start}`,
                        from: '+12516629121',
                        to: phone.number
                    })
                    .then(message => console.log(message.sid));
            }, 5000); //send sms with delay
        });
    }
}, 50000); // check date on server every hour - 1000 * 3600

