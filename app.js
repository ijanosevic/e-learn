const express = require('express');
const app = express();
const passport = require('passport');
const passportGoogle = require('./config/passport-google-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
app.use(cookieParser());

app.use(passport.initialize());

// routes
const routes = require('./routes/index');
app.use(routes);


app.listen(3000, () => {
    console.log('App now listening for requests on port 3000');
});