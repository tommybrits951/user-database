
const bcrypt = require("bcryptjs")
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  const hash = bcrypt.hashSync("fuckyou", 8)
  await knex('users').insert([
    {
      first_name: "Tommy",
      last_name: "Brits",
      gender: "male",
      dob: "1986-07-14",
      postal: 92553,
      phone: "(909)713-9898",
      email: "tommybrits74@gmail.com",
      password: hash
    }
  ]);
};
