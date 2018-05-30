const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = 40000

app.use('/assets', express.static(__dirname + '/dist'))

app.get('/', (request, response) => {
  response.send(__dirname + '/index.html')
})

server.listen(port, () => {
  console.log(`Running server on PORT: ${PORT}`)
})