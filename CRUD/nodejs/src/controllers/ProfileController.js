const config = require('../config/auth.config')
const Profile = require('../database/models/profile')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
    async signup(req, res) {
        const profile = Profile({
            username: req.body.username,
            password: bcript.hashSync(req.body.password, 8),
            email: req.body.email
        })

        await profile.save((err, profile) => {
            if(err) {
                res.status(500).send({message: err})
            }
            return res.json(profile)
        })
    },

    signin(req, res) {
        Profile.findOne({username: req.body.username}).exec((err, profile) => {
            if(err) {
                res.status(500).send({message: err})
                return
            }
            if(!profile) {
                res.status(500).send({
                    accessToken: null,
                    message: "No Profile found."
                })
            }

            var passwordIsValid = bcrypt.compareSync(req.body.password, profile.password)

            if(!passwordIsValid) {
                res.status(500).send({message: "Password is not valid"})
                return
            }

            var token = jwt.sign({id: profile._id}, "json-web-token-secret-string", {expiresIn: 86400})

            res.status(200).send({
                id: profile._id,
                username: profile.username,
                accessToken: token, 
                auth: true
            })
            
        })

        return
    }
}