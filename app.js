const express = require("express")
const cors = require("cors")
require("dotenv").config()
const port = process.env.NODE_PORT;
let people = []
const url = "https://randomuser.me/api/?results=1000&gender=male&nat=us"
const peoples = async () => {
    const resp = await fetch(url)
    const obj = await resp.json()
    people.push(obj.results)
    people = people.flat()
    
    return obj
}
peoples()
let x = setInterval(() => {

    if (people.length > 500) {
        console.log(people.length)
        clearInterval(x)
    }
}, 1000)
const server = express()
const userRouter = require("./routes/users")
server.use(express.json())
server.use(cors())
server.use("/users", userRouter)

/* 
server.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
}) */
