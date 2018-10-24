const passport = require('passport');
const router = require('express').Router();
const util = require('../util');
const User = require('../models/user.js');

passport.serializeUser((user, done) => {
    // done(null, user.id);
    console.log('serializeUser');
    done(null, 1);
});

passport.deserializeUser((id, done) => {
    // User.findById(id)
    //     .then((err, foundUser) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         done(null, foundUser);
    //     })
    console.log('deserializeUser');
    done(null, 2);
});

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    
    // todo: handle with passport
    res.clearCookie('jwt');
    req.logout();
    res.redirect('/');
});

const google_routes = require('./auth-google');
router.use('/google', util.isLoggedOut, google_routes);

const facebook_routes = require('./auth-facebook');
router.use('/facebook', util.isLoggedOut, facebook_routes);

module.exports = router;