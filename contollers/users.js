const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash')
const { Users, Users_likes } = require('../models');

module.exports = {
    signUp: async (req, res, next) => {
        var record = {
            email: req.body.email,
            password: await bcrypt.hashSync(req.body.password, 10),
            last_name: req.body.last_name,
            first_name: req.body.first_name
        }
        await Users.findOne({ where: { email: req.body.email } }).then(async user => {
            if (!user) {
                await Users.create(record).then(registered => {
                    res.status(200).json({ status: 200, message: 'User registered.' });
                }).catch(err => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
                // res.send("regostrovan")
            }
            else {
                return res.status(200).json({ msg: `User ${record.email} already exists!` })
            }
        })
    },

    login: async (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password
        const user = await Users.findOne({ where: { email: email } })
        if (user) {
            let passCorrect = await bcrypt.compare(password, user.password);
            if (passCorrect) {
                const payload = { id: user.id, name: user.first_name, email: user.email }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    (err, token) => {
                        if (err) throw err
                        res.json({ token: 'Bearer ' + token })
                    }
                )
            }
            else {
                res.json({ msg: "Password or Email is incorrect" })
            }

        } else {
            res.status(200).json({ msg: "Password or Email is incorrect" })
        }
    },

    getMostliked: async (req, res, next) => {
        let page = parseInt(req.params.page) || 0;
        let limit = parseInt(req.params.limit) || 100;
        let offset = page * limit;

        var users = await Users.findAndCountAll({
            limit: limit,
            offset: offset,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password']
            },
            include: [
                { model: Users_likes }
            ]
        })
        if (users.rows) {
            users.rows.map((item, inex) => {
                console.log(item.Users_likes.length)
            })
            var sortData = users.rows.sort((a, b) => {
                console.log(b.Users_likes.length, b.Users_likes.length)
                return b.Users_likes.length - a.Users_likes.length
            })
            res.status(200).json(sortData)
        } else {
            res.send("nema")
        }
    },

    myProfile: async (req, res, next) => {
        const id = req.params.id;
        if (parseInt(id) === parseInt(req.user.id)) {
            let u = await Users.findOne({
                where: { id },
                include: [
                    {
                        model: Users_likes,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    }
                ],
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt']
                }
            })
            if (u) {
                res.status(200).json(u)
            } else {
                res.status(200).json({ msg: "User not found!" })
            }
        } else {
            res.status(200).json({ msg: "unauthorized" })
        }


    },

    likeUser: async (req, res, next) => {
        const user = req.params.id;
        const like = req.user.id;

        var fan = await Users_likes.findOne({ where: { like: like, user_id: user } })
        if (!fan) {
            await Users_likes.create({
                like,
                user_id: user
            }).then(() => res.status(200).json({ msg: "User liked!" }))

        } else {
            res.status(200).json({ msg: "You already liked it!" })

        }

    },

    unlikeUser: async (req, res, next) => {
        const user = req.params.id;
        const like = req.user.id;

        var fan = await Users_likes.findOne({ where: { like: like, user_id: user } })
        if (fan) {
            await Users_likes.destroy({ where: { like: like, user_id: user } }).then(() => {
                res.status(200).json({ msg: "User unliked!" })
            })
        }
        else {
            res.status(200).json({ msg: "You already unliked it!" })
        }

    },

    changePassword: async (req, res, next) => {
        const user = req.user.id;
        const newPass = await bcrypt.hashSync(req.body.password, 10)
        await Users.findByPk(user).then(async u => {
            if (u) {
                await Users.update(
                    { password: newPass },
                    { where: { id: user } }
                ).then(() => {
                    res.status(200).json({ msg: "Password change!" })
                })
            }
        })

    },


    protect: async (req, res, next) => {
        console.log("hit")
        res.json({ msg: "radi" })
    }
}


