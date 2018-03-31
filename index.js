const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})
app.post('/login', (req, res) => {
  store
    .authenticate({
      username: req.body.username,
      password: req.body.password
    })
    .then(({ success }) => {
      //console.log(res)
      if (success) res.sendStatus(200)
      else res.sendStatus(401)
    })
})
app.post('/createVh', (req, res) => {
  store
    .createVh({
      userId: global.userIdent,
      alias: req.body.ali,
      marca: req.body.mar,
      modelo: req.body.mod,
      motor: req.body.mot,
      potencia: req.body.pot,
      matricula: req.body.mat,
      km: req.body.kms
    })
    .then(() => res.sendStatus(200))
})
app.post('/editVh', (req, res) => {
  store
    .editVh({
      id: req.body.id,
      alias: req.body.ali,
      marca: req.body.mar,
      modelo: req.body.mod,
      motor: req.body.mot,
      potencia: req.body.pot,
      matricula: req.body.mat,
      km: req.body.kms
    })
    .then(() => res.sendStatus(200))
})
app.get('/getAll', (req, res) => {
  store
    //.getAll({ userId: global.userIdent })
    .getAll({ userId: 5 })
    .then(({ success, dat }) => {
      if (success) {
        res.send(dat)
      }
      else {
        res.sendStatus(401)
      }
    })
})
app.get('/getMts', (req, res) => {
  store
    //.getAll({ userId: global.userIdent })
    .getMts({ vhId: 6 })
    .then(({ success, dat }) => {
      if (success) {
        res.send(dat)
      }
      else {
        res.sendStatus(401)
      }
    })
})
app.post('/createMt', (req, res) => {
  store
    .createMt({
      vhId: req.body.id,
      type: req.body.tip,
      description: req.body.det,
      price: req.body.pre,
      km: req.body.kms
    })
    .then(() => res.sendStatus(200))
})

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})