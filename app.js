const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/users")
require("dotenv").config

const port = process.env.NODE_PORT;

const server = express()
server.use(express.json())
server.use(cors())
server.use("/users", userRouter)


server.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})
