
exports.up = function(knex, Promise) {
    return knex.schema.createTable('mt', function (t) {
        t.increments('id').primary()
        t.integer('vhId').unsigned().index().references('id').inTable('vh')
        t.string('type').notNullable()
        t.string('description').notNullable()
        t.string('price').notNullable()
        t.string('km').notNullable()
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
  
};
