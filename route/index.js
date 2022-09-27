import express from 'express'
import sendSimpleMailRoute from './simple.js'
import sendTemplateMailRoute from './templateMail.js'
const route = express.Router()
route.use('/simple',sendSimpleMailRoute)
route.use('/template',sendTemplateMailRoute)
export default route