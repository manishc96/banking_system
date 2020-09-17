const knex = require('../config/knex');



module.exports = {
    userLogin: {
        getOne: function (userName, password) {
            return knex('user').where({ 'userName': userName, 'password': password }).first();
        },

    }
}
