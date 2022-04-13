const {verifySignUp, authJwt} = require("../middlewares/");
const userController = require("../controllers/UserController");
const pubController = require("../controllers/PubController");

const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});


//register
router.post("/user/signup", [verifySignUp.checkDuplicateUsernameOrEmail], userController.signup);

//log in
router.post("/user/signin", userController.signin);

//register
router.post("/pub/signup", [verifySignUp.checkDuplicateUsernameOrEmail], pubController.signup);

//log in
router.post("/pub/signin", pubController.signin);

//get user
router.get("/user", [authJwt.verifyToken], userController.info);

//get pub
router.get("/pub", pubController.info);

//check-in
router.post("/user/checkin", [authJwt.verifyToken], userController.checkin);

//evaluate
router.post("/pub/evaluate", pubController.evaluate);

module.exports = router;