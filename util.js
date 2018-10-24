const jwt = require('jsonwebtoken');
const keys = require('./config/keys');

const setJWTCookie = (req, res, next) => {
    
    const token = jwt.sign({ id: req.user.id }, keys.jwt.secret, { expiresIn: "24h" });
    res.cookie('jwt', token);
    next();
}

const isLoggedOut = (req, res, next) => {
    // console.log('cekiram');
    if (req.cookies['jwt'] === undefined) {
        // console.log('nema cookie-a, mozes dalje da ga kreiras');
        next();
    } else {
        // console.log('vecg ga ima, redirektuj ga na /profile');
        res.redirect('/profile');
    }
}

module.exports = {
    setJWTCookie: setJWTCookie,
    isLoggedOut: isLoggedOut
}