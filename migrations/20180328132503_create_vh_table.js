exports.up = function(knex, Promise) {
    return knex.schema.createTable('vh', function (t) {
        t.increments('id').primary()
        t.integer('userId').unsigned().index().references('id').inTable('user')
        t.string('alias').notNullable()
        t.string('marca').notNullable()
        t.string('modelo').notNullable()
        t.string('motor').notNullable()
        t.string('potencia').notNullable()
        t.string('matricula').notNullable()
        t.string('km').notNullable()
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('vh')
};
