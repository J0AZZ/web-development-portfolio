const Model = require('../database/models/model')

module.exports = {
    create(req, res) {
        Model.save({
            attr_str: "abc",
            attr_num: 1,
        }).exec((err, model) => {
            if(err) {
                res.status(500).send({message: err})
                return
            }
            else {
                res.status(200).send({created: model})
                return
            }
        })
    },
    read(req, res) {
        Model.find({}).exec((err, model) => {
            if(err) {
                res.status(500).send({message: err})
                return
            }
            else {
                res.status(200).send({data: model})
                return
            }
        })
    },
    update(req, res) {

    },
    delete(req, res) {

    },
    getOne(req, res) {
        Model.findOne({id: req.params.id}).exec((err, model) => {
            if(err) {
                res.status(500).send({message: err})
                return
            }
            else {
                res.status(200).send({model: model})
                return
            }
        })
        
    },

}