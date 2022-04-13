const Pub = require('../database/models/Pub');

checkDuplicateUsernameOrEmail = async (req, res, next) => {
    //block next execution if necessary
    let status = 0;
    
    //Username
    await Pub.findOne({name: req.body.name}, (err, pub) => {
        if(err) {
            status += 1;
            res.status(500).send({message: err});
            return;
        }

        if(pub) {
            status += 1;
            res.status(400).send({message: "Failed! Username is already in use!"});
            return;
        }
    });
    if(status > 0) {
        return;
    }
    
    //Email
    await Pub.findOne({email: req.body.email}, (err, pub) => {
        if(err) {
            status += 1;
            res.status(500).send({message: err});
            return
        }
        if(pub) {
            status += 1;
            res.status(400).send({message: "Failed! Email already in use!"});
            return;
        }
    });

    if(status > 0)
    {
        return;
    }
    //only creates new user if status was not setted
    next();
}
 
module.exports = {
    checkDuplicateUsernameOrEmail
};