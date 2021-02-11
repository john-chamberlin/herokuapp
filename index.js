const dotenv = require('dotenv').config()

const server = require('./api/server')
const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

// console.log('hello world')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER)
// console.log(process.env.PORT)
