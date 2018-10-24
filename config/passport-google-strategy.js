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

        db.User
            .findOne({
                where: {
                    id_google: profileInformation.id
                }
            })
            .then(user => {
                if (user) {
                    done(null, user);
                } else {
                    const new_user = {
                        first_name: profileInformation.name.givenName,
                        last_name: profileInformation.name.familyName,
                        email: profileInformation.emails[0].value,
                        id_google: profileInformation.id
                    };
                    db.User.create(new_user)
                        .then(createdUser => {
                            console.log('kreirani korisnik');
                            done(null, createdUser);
                        });
                }
            })
            .catch(err => {
                console.log('greska pri trazenju korisnika, aka nije pronadjen');
                console.log(err);
            });
    })
);