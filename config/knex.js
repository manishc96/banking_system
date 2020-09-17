const knex = require('knex');
const environment = 'development';
const config = require('../knexfile');
const environmentConfig = config[environment];
const connection = knex(environmentConfig);
module.exports = connection;
