require("dotenv").config()
const env = process.env.NODE_DB_PASSWORD;
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'data',
      user:     'postgres',
      password: env,
      port: 5432,
      host: "localhost"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_user_migrations',
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }

};
