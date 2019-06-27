const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { Users } = require('../models')


passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, async (jwt_payload, done) => {
    try {
        // console.log("passport 13 ", jwt_payload)
        const user = await Users.findByPk(jwt_payload.id)
        if (!user) {
            return done(null, false)
        } else {
            done(null, user)
        }

    }
    catch (error) {
        done(error, false)
    }
}))

module.exports = passport


/**
 * const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

const { Users } = require('../models')


passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, async (jwt_payload, done) => {
    try {
        const user = await Users.findByPk(jwt_payload.id)

        if (!user) {
            return done(null, false)
        }
        else {
            let passCorrect = await bcrypt.compare(password, user.password);
            if (passCorrect) {
                done(null, user)
            } else {
                done(null, false)
            }
        }
    }
    catch (error) {
        done(error, false)
    }
}))

module.exports = passport
 */