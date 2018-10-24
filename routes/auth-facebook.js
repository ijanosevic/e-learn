const router = require('express').Router();
const passport = require('passport');
const util = require('../util');

// auth with facebook
router.get('/', passport.authenticate('facebook'));

// callback route for facebook to redirect to
router.get('/redirect', passport.authenticate('facebook', {scope: ['id', 'displayName', 'photos', 'email', 'name']}), //
    util.setJWTCookie,
    (req, res) => {
        res.redirect('/api/profile');
    }
);

module.exports = router;