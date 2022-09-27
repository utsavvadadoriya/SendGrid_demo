import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT
import route from './route/index.js'
app.use(express.json())
app.use('/api/sendmail', route)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
