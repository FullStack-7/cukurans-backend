const express = require('express')
const route = express.Router()


route.get("/", (reqmres) => {
    res.json("Express Mongose halo")
})

module.exports = route