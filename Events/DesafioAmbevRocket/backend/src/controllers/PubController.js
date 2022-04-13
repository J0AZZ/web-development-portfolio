const config = require("../config/auth.config");
const Pub = require("../database/models/Pub");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Evaluation = require("../database/models/Evaluation");
const { findOneAndUpdate } = require("../database/models/Pub");

module.exports = {
    async signup(req, res) {
        const pub = new Pub({
            name: req.body.name,
            cnpj: req.body.cnpj,
            location: {
                street: req.body.street,
                n: req.body.n,
                neighborhood: req.body.neighborhood,
                city: req.body.city,
                uf: req.body.uf,
            },
            password: bcrypt.hashSync(req.body.password, 8),
            email: req.body.email
        });
    
        await pub.save((err, pub) => {
            if(err) {
                res.status(500).send({message: err});
                return;
            }
            return res.json(pub);
        });
    },

    signin(req, res) {
        Pub
            .findOne({email: req.body.email})
            .exec((err, pub) => {
                if(err) {
                    res.status(500).send({message: err});
                    return;
                }
    
                if(!pub) {
                    return res.status(404).send({message: "Email not found!"});
                }
    
                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    pub.password
                );
    
                if(!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid password!"
                    });
                }
    
                var token = jwt.sign({id: pub._id}, config.secret);
    
                return res.status(200).send({ 
                    id: pub._id,
                    auth: true,
                    accessToken: token
                });
            });
    },

    async info(req, res) {
        Pub
            .findById(req.body.id)
            .exec((err, pub) => {
                if(err) {
                    return res.status(500).send({message: err})
                }
                if(!pub) {
                    return res.status(404).send({message: "No pub found"});
                }
                const found = {
                    name: pub.name,
                    location: pub.location,
                    points: pub.history.total,
                    image: pub.image_url
                }
                return res.status(200).send(found);
            })
    },

    async evaluate(req, res) {
        const pubId = req.body.pubId;
        const evaluation = req.body.evaluation;

        Evaluation.find({pubId: pubId}).exec((err, eval) => {
            if(err) {
                return res.status(500).send({message: err})
            }
            if(!eval) {
                const new_eval = new Evaluation({
                    pubId: pubId,
                    total: 1,
                    evaluations: [evaluation]
                });
                await new_eval.save((err, eval) => {
                    if(err) {
                        return res.status(500).send({message: err})
                    }
                    if(!eval) {
                        return res.status(500).send({message: "Could not save evaluation!"});
                    }
                    return res.status(200).send(eval);
                })
            }
            else {
                eval.total += 1;
                eval.evaluations.push(evaluation);
                await Evaluation.findOneAndUpdate({pubId: pubId}, eval, (err, updated) => {
                    if(err) {
                        return res.status(500).send({message: err});
                    }
                    if(!updated) {
                        return res.status(500).send({message: "Could not update evaluation!"});
                    }
                    return res.status(200).send(updated);
                })
            }
        });
    }
}
