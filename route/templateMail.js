templateMail
import express from 'express'
import { templateMail } from '../controller/templateMail.js'
const sendTemplateMailRoute = express.Router()
sendTemplateMailRoute.post('/',templateMail)
export default sendTemplateMailRoute