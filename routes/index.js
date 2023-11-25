const express = require('express')
const route = express.Router()

const userRoute = require('./user.route')
const authRoute = require('./auth.route')

route.get("/", (reqmres) => {
    res.json("Express Mongose halo")
})

route.use("/user", userRoute)
route.use("/auth", authRoute)

module.exports = route