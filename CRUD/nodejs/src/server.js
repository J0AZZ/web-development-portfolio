const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose').set('debug', true)

const mongodb = "mongodb+srv://britof:<1123581321>@cluster0-oimg3.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Database connected.")
}).catch((err) => {
    console.log("ERROR: ", err)
    process.exit()
})
const db = mongoose.connection
db.on('error', console.error.bind("Database connection error!"))

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)
const port = 3030 
app.listen(port, () => {
    console.log("Server listenning on port ", port)
})