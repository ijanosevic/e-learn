const passport = require('passport');
const router = require('express').Router();
const util = require('../util');
const db = require('../models/index');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.User
        .findByPk(id)
        .then((user) => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
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