const db = require("../db");


function getById(id) {
    const user = db("users").where("id", id).first()
    return user
}
async function insertUser(user) {
    const [id] = await db("users").insert(user)
    const newUser = getById(id);
    return newUser;
}

module.exports = {
    getById,
    insertUser
}