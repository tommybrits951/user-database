const router = require("express").Router()
const bcrypt = require("bcryptjs")
const Users = require("../models/users")

router.get("/:id", async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await Users.getById(id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
})

router.post("/reg", async (req, res, next) => {
    try {
        let content = req.body;
        const hash = bcrypt.hashSync(content.password, 8);
        content.password = hash
        const user = await Users.insertUser(content)
        console.log(user)
        if(user) {
            res.status(201).json(user)
        } else {
            res.status(401).json({message: "Fields aren't correct!"})
        }
    } catch (err) {
        next(err)
    }
})


router.use((err, req, res, next) => {
    res.status(500).json({message: err.message || "Something's wrong!"})
})
module.exports = router