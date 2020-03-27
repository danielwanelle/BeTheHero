const knex = require('knex');
const configuration = require('../../knexfile');
const connection = knex(configuration.development); //escolhendo a conexão



module.exports = connection;