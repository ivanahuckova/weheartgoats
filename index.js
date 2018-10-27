const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/', express.static('public/index.html'))

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})