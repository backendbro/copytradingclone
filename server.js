const express = require('express')
const dotenv = require('dotenv')

const app = express()

const connectDB = require('./src/database/database')
const errorHandler = require('./src/middlewares/error-handler')
const notFound = require('./src/middlewares/notFound')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
dotenv.config()

connectDB()

const auth = require('./src/routes/auth')
app.use('/api/user', auth)

app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`port started on: http://localhost:${port}`)
})