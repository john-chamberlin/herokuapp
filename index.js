const dotenv = require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build')))

server.use('/api/*', (_, res) => {
  res.json({ data: 'The api is working, gj ig' })
})

server.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

// console.log('hello world')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER)
// console.log(process.env.PORT)
