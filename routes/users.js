const express = require('express');
const router = express.Router();
const userCtrl = require('../contollers/users');
const passport = require('passport');
//require('../config/passport')

const { validate, schema } = require('../config/validation')


router.post('/signup',
    validate(schema.signUp),
    userCtrl.signUp)

router.post('/login',
    validate(schema.login),
    userCtrl.login)

router.get('/mostliked/:page/:limit',
    //  passport.authenticate('jwt', { session: false }),
    userCtrl.getMostliked)

router.get('/me/:id',
    passport.authenticate('jwt', { session: false }),
    userCtrl.myProfile)

router.get('/user/:id/like',
    passport.authenticate('jwt', { session: false }),
    userCtrl.likeUser)

router.get('/user/:id/unlike',
    passport.authenticate('jwt', { session: false }),
    userCtrl.unlikeUser)


router.put('/me/update-password',
    passport.authenticate('jwt', { session: false }),
    validate(schema.passwordUpdate),
    userCtrl.changePassword)




router.get('/test', userCtrl.protect)



module.exports = router;