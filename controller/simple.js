import sendMail from '@sendgrid/mail'
import dotenv from 'dotenv'
dotenv.config()
sendMail.setApiKey(process.env.API_KEY)

export const simpleMail = async (req, res) => {
  try {
    const message = {
      to: req?.body?.receiver,
      from: req?.body?.sender,
      subject: req?.body?.subject,
      text: `Hello, This is the testing email from ${req?.body?.sender}`,
      html: '<h1>hello</h1>',
    }
    await sendMail.send(message)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
