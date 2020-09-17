const knex = require('../config/knex');
let jwt = require('jsonwebtoken');
knex.schema.hasTable('user').then(function (exists) {
    if (!exists) {
        knex.schema.createTable('user', function (table) {
            table.increments('id').primary();
            table.string('firstName');
            table.string('lastName');
            table.string('fatherName');
            table.string('dateOfBirth');
            table.bigInteger('mobileNumber');
            table.string('emailId');
            table.string('PanCardNumber');
            table.string('IDProof');
            table.string('country');
            table.string('state');
            table.string('city');
            table.integer('pinCode');
            table.string('address');
            table.string('userName').unique();
            table.string('password');
            table.boolean('isBanker').defaultTo(false);
            table.timestamp('created_at').defaultTo(knex.fn.now())
        }).then(() => console.log('created table')).catch((ex) => {
            console.log(ex.message);
        })
    }
});

