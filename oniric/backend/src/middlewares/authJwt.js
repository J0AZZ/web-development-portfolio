const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const Profile = require("../database/models/profile");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    let pass = false

    if(!token) {
        return res.status(403).send({message: "No token provided!"});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        console.log("inside verifyToken:  ", req.headers)
        if(err) {
            return res.status(401).send({message: "Unauthorized!", error: err});
        }
        pass = true
        req.profileId = decoded.id;
    });
    if(pass)
        next();
};

module.exports = {verifyToken};