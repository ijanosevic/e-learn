const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user.js');

router.get('/', (req, res) => {
    res.render('home');
});

const authRoutes = require('./auth');
router.use('/auth', authRoutes);

router.use('/api', passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        next();
    }
);

// const authCHeck = (req, res, next) => {
//     console.log(req.user)
//     if (!req.user) {
//         res.redirect('/auth/login');
//     } else {
//         next();
//     }
// }

/*
todo: 
middleware koji proverava da li korisnik ima odgovarajucu rolu
- u req vec imam korisnika, kao i id njegove role

*/

router.get('/api/profile', (req, res) => {
    res.send(req.user);
});

const checkRole = (req, res) => {
    // dohvati rolu
    // na osnovu role dohvati sve capability-je (dostupne entitete)
    // proveri da li capability obuhvata zeljenu putanju
        // ako obuhvata next()
        // ako ne obuhvata 401 - unauthorized
}

router.get('/api/users', (req, res) => {
    res.send('users');
});

module.exports = router;