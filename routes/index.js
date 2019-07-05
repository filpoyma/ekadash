const express = require('express');
const {sessionChecker} = require('../middleware/auth');
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
    res.end();
});

router.post('/email', async (req, res) => {
    console.log(req.body);
    const email = new Phone({
        number: req.body.emailField,
    });
    await email.save();
    res.end();
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
