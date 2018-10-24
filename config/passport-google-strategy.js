const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const db = require('../models/index');


passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profileInformation, done) => {

        console.log('odgovor sa google-a, informacije o profilu');
        console.log(profileInformation.id);
        db.User
            .findOne({
                where: {
                    id_google: profileInformation.id
                }
            })
            .then(user => {
                if (user) {
                    console.log('korisnik je pronadjen');
                    console.log(user);
                } else {
                    console.log('nema korisnika u bazi, kreiraj novog');
                    console.log(user);
                }
            })
            .catch(err => {
                console.log('greska pri trazenju korisnika, aka nije pronadjen');
                console.log(err);
            })
        // User
        //     .findOne({googleId: profileInformation.id})
        //     .then((currentUser) => {
        //         if (currentUser) {
        //             // already have the user
        //             console.log('user found!');
        //             // console.log(currentUser);
        //             done(null, currentUser);
        //         } else {
        //             // create user in db
        //             new User({
        //                 username: profileInformation.displayName,
        //                 googleId: profileInformation.id,
        //                 email: profileInformation.emails[0].value
        //             })
        //             .save()
        //             .then((newUser) => {
        //                 console.log('user created!');
        //                 done(null, newUser);
        //             });
        //         }
        //     });
    })
);