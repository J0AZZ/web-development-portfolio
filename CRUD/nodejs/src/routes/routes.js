const express = require('express')
const Profile = require('../controllers/ProfileController')
const Model = require('../controllers/ModelController')

const router = express.Router()

router.use((req, res, next) => {
    res.header("Allow-Control-Allow-Headers",
               "x-access-token, Origin, Content-Type, Accept")
    next()
})

router.post('/signup', Profile.signup)
router.post('/signin', Profile.signin)

router.post('/new', Model.create)
router.get('/models', Model.read)
router.put('/models/:id/edit/')
router.get('/models/:id', Model.getOne)
router.delete('/models/:id/delete', Model.delete)