const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const User = require('../models/user');
const keys = require('./keys');

passport.use(new FacebookStrategy({
    clientID: keys.facebook.appId,
    clientSecret: keys.facebook.appSecret,
    callbackURL: '/auth/facebook/redirect',
    profileFields: ['id', 'displayName', 'photos', 'email', 'name']
},
    function (accessToken, refreshToken, profileInformation, done) {

        console.log('odgovor sa facebook-a, informacije o profilu');
        console.log(profileInformation);
        // User
        //     .findOne({ facebookId: profileInformation.id })
        //     .then((currentUser) => {
        //         if (currentUser) {
        //             // already have the user
        //             // console.log('user found!');
        //             // console.log(currentUser);
        //             return done(null, currentUser);
        //         } else {
        //             // create user in db
        //             new User({
        //                 username: profileInformation.displayName,
        //                 facebookId: profileInformation.id
        //             })
        //                 .save()
        //                 .then((newUser) => {
        //                     // console.log('user created!');
        //                     return done(null, newUser);
        //                 });
        //         }
        //     });
    }
));