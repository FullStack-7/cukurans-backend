const express = require('express')
const PORT = 3000
const app = express()

const allRoutes = require('./routes')
const db = require('./config/db')

db.then(() => {
    console.log('berhasil')
})
.catch((err) => {
    console.log("gagal", err)
})
app.get('/', (req, res) => {
    res.send('Hello')
  })
  
  app.listen(PORT, () => {
    console.log(`Aplikasi berjalan pada port ${PORT}`)
  })

app.use(express.json());
app.use(allRoutes)