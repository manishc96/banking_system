const knex = require('../config/knex');
let accounts = knex.schema.hasTable('accounts').then(function (exists) {
    if (!exists) {
        knex.schema.createTable('accounts', function (table) {
            table.increments('id', true);
            table.integer('user_id').unsigned();
            table.foreign('user_id').references('user.id');
            table.string('accType');
            table.string('deposit').defaultTo(0);
            table.string('withdraw').defaultTo(0);
            table.decimal('balance_amount', 8, 2).defaultTo(0.00);
            table.timestamp('created_at').defaultTo(knex.fn.now())
        })
            .then(() => console.log(' created accounts table'))
            .catch((ex) => {
                console.log(ex.message);
            })


    }
});
module.exports = accounts;
