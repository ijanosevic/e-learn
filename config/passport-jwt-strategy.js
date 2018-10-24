const passport = require('passport');
const User = require('../models/user');
const keys = require('./keys');

var cookieExtractor = function (req) {

    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
};

const JwtStrategy = require('passport-jwt').Strategy;
let opts = {}
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = keys.jwt.secret;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

    console.log('jwt radi korisnik');
    done(null, false);
    // User.findById(jwt_payload.id, function (err, user) {
    //
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });
}));