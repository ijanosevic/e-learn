const router = require('express').Router();
const passport = require('passport');
const util = require('../util');


// auth with google
router.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/redirect', passport.authenticate('google'),
    util.setJWTCookie,
    (req, res) => {
        res.redirect('/api/profile');
    }
);

module.exports = router;