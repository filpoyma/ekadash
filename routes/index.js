const express = require('express');
const { sessionChecker } = require('../middleware/auth');
const User = require('../models/users');
const Ekad = require('../models/ekadashi');
const Phone = require('../models/phones');
const Email = require('../models/emails');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
  });

router.post('/auth', async (req, res) => {
    console.log('>>>>>>>>>.', req.body);
    const user = new User({
        name: req.body.profile.ig,
        email: req.body.profile.U3,
        imageUrl: req.body.profile.Paa,
      });
    await user.save();
    res.redirect('/');
  });

router.get('/sms', async (req, res) => {
    client.messages
        .create({
            body: 'ekadashi',
            from: '+12516629121',
            to: '+79104013455',
          })
        .then(message => console.log(message.sid));
  });

router.get('/setinterval', async (req, res) => {
    // // через 5 сек остановить повторы
    // setTimeout(function() {
    //     clearInterval(timerId);
    //     alert( 'стоп' );
    // }, 15000);
  });

router.post('/tel', async (req, res) => {
    const ekad = new Phone({
        number: req.body.telField,
      });
    await ekad.save();

    // client.messages
    //     .create({
    //         body: 'you subsrubed to ekadash',
    //         from: '+12516629121',
    //         to: req.body.telField,
    //       })
    //     .then(message => console.log(message.sid));

    res.json('phone ' + req.body.telField + ' subscribed');
  });

router.post('/email', async (req, res) => {
    //console.log(req.body);
    const email = new Email({ email: req.body.emailField, });
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(req.body.emailField)) {
      await email.save();
      res.json('email ' + req.body.emailField + ' subscribed');
    } else res.json('email is not valid');
  });


//seed************
// router.get('/ekadashi', async (req, res) => {
//     const ekad = new Ekad({
//         name: 'Aja Ekadashi',
//         start: new Date("2019-08-26 04:33:00"),
//         end: new Date("2019-07-27 02:40:00"),
//     });
//     await ekad.save();
// });
module.exports = router;
