/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id").primary()
    tbl.string("first_name", 50).notNullable()
    tbl.string("last_name", 50).notNullable()
    tbl.string("gender", 7).notNullable()
    tbl.date("dob").notNullable()
    tbl.integer("postal").notNullable()
    tbl.integer("phone")
    tbl.string("email").notNullable()
    tbl.string("password").notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
