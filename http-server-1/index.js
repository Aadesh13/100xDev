const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<b> Hi there! </b>')
  })

app.get('/hello',(req, res) => {
    res.send("Hello World!")
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("This is post request")
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})