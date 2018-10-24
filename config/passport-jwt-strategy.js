const passport = require('passport');
const db = require('../models/index');
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

    db.User
        .findByPk(jwt_payload.id)
        .then((user) => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
}));