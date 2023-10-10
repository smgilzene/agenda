const express = require('express')
const app = express()

app.post('/test', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
