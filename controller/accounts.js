const { text } = require('body-parser');
// const { promises } = require('fs');
const knex = require('../config/knex');

module.exports = {
    accounts: {
        getAll: function () {
            return knex('accounts');
        },
        create: function (accounts) {
            return knex('accounts').insert(accounts);
        },
        getOne: function (id) {
            return knex('accounts').having('user_id', '=', id)
        },
        getBalanceAmount: function (id) {
            return knex('accounts').select('balance_amount').whereRaw(`id=?`, [id]);

        },

        withdrawOne: async function (id, withdraw) {
            let amount = await this.getBalanceAmount(id);
            let prevAmount = parseInt(amount[0].balance_amount);
            let balanceAmount = 0;
            if (prevAmount > withdraw) {
                balanceAmount = prevAmount - withdraw;
                console.log(prevAmount)
            } else {
                return;
            }
            console.log(balanceAmount);
            return knex('accounts').where('id', id).update({ 'withdraw': withdraw, 'balance_amount': balanceAmount })

        },

        depositOne: async function (id, deposit) {
            amount = await this.getBalanceAmount(id);
            let prevAmount = parseInt(amount[0].balance_amount);
            console.log(prevAmount);
            let balanceAmount = 0;
            console.log(typeof deposit)
            balanceAmount = prevAmount + deposit;
            return knex('accounts').where('id', id).update({ 'deposit': deposit, 'balance_amount': balanceAmount })
        }
    }
}
