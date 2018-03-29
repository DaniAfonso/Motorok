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
        return { success: hash === user.encrypted_password }
      })
  },
  createVh({ userId, alias, marca, modelo, motor, potencia, matricula, km }) {
    console.log(`Add vh user`)
    return knex('vh').insert({
      userId, alias, marca, modelo, motor, potencia, matricula, km
    }).debug()
  },
  getAll({ userId }) {
    console.log(`Search vh history`)
    console.log(`User id: ` + userId)
    return knex('vh').where({ userId }).then(function (element) {
      //do something here
      //console.log(element);
      if (!element) return { success: false }
      else return { success: true, dat: element }
    })
  }
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