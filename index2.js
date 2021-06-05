
const express = require('express')
const bodyParser = require('body-parser')


const userRoute = require('./routes/usersRoutes')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended:false}))

userRoute(app)

app.get('/', (req, res) => res.send('ola mundo pelo express'))

app.listen(port, () => console.log ('api rodando na porta 3000'))