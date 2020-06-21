require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
let cronSubscribe = require('./helpers/cronSubscribe')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/subscribe', (req, res) => {
  let { email } = req.body

  cronSubscribe(email)

  res.json({ msg: 'berhasil kirim email' })
})

app.listen(PORT, _=> console.log(`listening on Port ${PORT}`))