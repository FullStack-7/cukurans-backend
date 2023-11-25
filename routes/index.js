const express = require('express')
const route = express.Router()

const userRoute = require('./user.route')
const authRoute = require('./auth.route')
const barberRoute = require('./barber.route')
const serviceRoute = require('./service.route')
const orderRoute = require('./order.route')
const paymentRoute = require('./payment.route')

route.get("/", (reqmres) => {
    res.json("Express Mongose halo")
})

route.use("/users", userRoute)
route.use("/auth", authRoute)
route.use("/barbers", barberRoute )
route.use("/services", serviceRoute )
route.use("/orders", orderRoute)
route.use("/payments", paymentRoute)

module.exports = route