const knex = require('../config/knex');
knex.schema.hasTable('user').then(function (exists) {
    if (!exists) {
        knex.schema.createTable('accounts', function (table) {
            table.increments('id', true);
            table.integer('user_id').unsigned();
            table.foreign('user_id').references('user.id');
            table.string('accType');
            table.string('deposit');
            table.string('withdraw');
            table.decimal('balance_amount', 8, 2);
            table.timestamp('created_at').defaultTo(knex.fn.now())
        })
            .then(() => console.log('created table'))
            .catch((ex) => {
                console.log(ex.message);
            })


    }
});
