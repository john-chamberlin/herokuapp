const express = require('express')
const server = express()
const cors = require('cors')
const path = require('path')

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build')))

server.use('/api*', (_, res) => {
    res.json({ data: 'The api is working, gj ig' })
})

server.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

module.exports = server
