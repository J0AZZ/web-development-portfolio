const User = require('../database/models/User');

checkDuplicateUsernameOrEmail = async (req, res, next) => {
    //block next execution if necessary
    let status = 0;
    
    //Username
    await User.findOne({name: req.body.name}, (err, user) => {
        if(err) {
            status += 1;
            res.status(500).send({message: err});
            return;
        }

        if(user) {
            status += 1;
            res.status(400).send({message: "Failed! Username is already in use!"});
            return;
        }
    });
    if(status > 0) {
        return;
    }
    
    //Email
    await User.findOne({email: req.body.email}, (err, user) => {
        if(err) {
            status += 1;
            res.status(500).send({message: err});
            return
        }
        if(user) {
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