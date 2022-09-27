import express from 'express'
import { simpleMail } from '../controller/simple.js'
const sendSimpleMailRoute = express.Router()
sendSimpleMailRoute.post('/',simpleMail)
export default sendSimpleMailRoute