const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const Nexmo = require('nexmo')
const Socketio = require('socket.io')

const app = express()

app.set('view engine', 'html')
app.engine('html', ejs.renderFile)

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3000

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
