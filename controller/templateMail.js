import sendMail from '@sendgrid/mail'
import dotenv from 'dotenv'
dotenv.config()
sendMail.setApiKey(process.env.API_KEY)

export const templateMail = async (req, res) => {
  try {
    const message = {
      to: req?.body?.receiver,
      from: req?.body?.sender,
      subject: req?.body?.subject,
      templateId: process.env.TEMPLATE_ID,
      dynamicTemplateData: {
        name: req?.body?.receiver?.split('@')[0],
        email: req?.body?.sender,
      },
    }

    await sendMail.send(message)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
