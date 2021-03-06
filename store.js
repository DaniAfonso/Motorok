const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))
global.userIdent;

module.exports = {
  createUser({ username, password }) {
    console.log(`Add user ${username}`)
    const { salt, hash } = saltHashPassword({ password })
    return knex('user').insert({
      salt,
      encrypted_password: hash,
      username
    }).debug()
  },
  authenticate({ username, password }) {
    console.log(`Authenticating user ${username}`)
    return knex('user').where({ username })
      .then(([user]) => {
        if (!user) return { success: false }
        const { hash } = saltHashPassword({
          password,
          salt: user.salt
        })
        global.userIdent = user.id;
        return { success: hash === user.encrypted_password, id: user.id }
      })
  },
  createVh({ userId, alias, marca, modelo, motor, potencia, matricula, km }) {
    console.log(`Add vh user`)
    return knex('vh').insert({
      userId, alias, marca, modelo, motor, potencia, matricula, km
    }).debug()
  },
  editVh({ id, alias, marca, modelo, motor, potencia, matricula, km }) {
    console.log(`Edit vh`)
    return knex('vh')
      .where("id", '=', id)
      .update({
        alias, marca, modelo, motor, potencia, matricula, km
      }).debug()
  },
  getAll({ userId }) {
    console.log(`Search vh history`)
    console.log(`User id: ` + userId)
    return knex('vh').where({ userId }).then(function (element) {
      //controlar eventos
      //console.log(element);
      if (!element) return { success: false }
      else return { success: true, dat: element }
    })
  },
  getMts({ vhId }) {
    console.log(`Search mt history`)
    console.log(`Vehi id: ` + vhId)
    return knex('mt').where({ vhId }).then(function (element) {
      //controlar eventos
      //console.log(element);
      if (!element) return { success: false }
      else return { success: true, dat: element }
    })
  },
  createMt({ vhId, type, description, price, km }) {
    console.log(`Add mt mante`)
    return knex('mt').insert({
      vhId, type, description, price, km
    }).debug()
  },
}

function saltHashPassword({
  password,
  salt = randomString()
}) {
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
}

function randomString() {
  return crypto.randomBytes(4).toString('hex')
}