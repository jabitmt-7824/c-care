const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const Doctor = require("../models/doctor");

var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken('bearer'),
    secretOrKey : 'ccare'
}

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    Doctor.findOne({ id: jwt_payload._id }, function (err, doctor) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, doctor);
        } else {
            return done(null, false);
        }
    });
}));

module.exports = passport;
