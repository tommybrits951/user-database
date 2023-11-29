const knex = require("knex");
require("dotenv").config()
const config = require("./knexfile");
const env = process.env.NODE_KNEX_PATH;


/* const {Client} = require("pg")

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Benoni951!",
    database: "data"
})


client.connect();

module.exports = client.query() */

module.exports = knex(config[env])