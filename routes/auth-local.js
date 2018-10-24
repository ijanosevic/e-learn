const router = require('express').Router();
const passport = require('passport');
const util = require('../util');


router.post('/', passport.authenticate('local'),
    // util.setJWTCookie,
    (req, res) => {
        console.log(req.user);
        res.json(req.user);
        console.log('valdiraNNN local strategy');
        // res.redirect('/profile');
    }
);

module.exports = router;