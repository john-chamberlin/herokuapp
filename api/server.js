const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.use('/api*', (_, res) => {
    res.json({ data: 'The api is working, gj ig' })
})

module.exports = server
