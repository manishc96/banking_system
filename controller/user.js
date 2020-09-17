const knex = require('../config/knex');

module.exports = {
    user: {
        getAll: function () {
            return knex('user');
        },
        create: function (user) {
            return knex('user').insert(user);
        },
        getUser: function (id) {
            return knex('user').where('id', id);
        },
        getTransaction: function (id) {
            return knex('accounts').join('user', 'user.id', '=', 'accounts.user_id').select('*').where('accounts.user_id', id);
        },

    }
}