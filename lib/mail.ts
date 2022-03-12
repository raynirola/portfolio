import mg from 'mailgun-js'
import Mailgun from 'mailgun-js'
import SendData = Mailgun.messages.SendData
import SendResponse = Mailgun.messages.SendResponse

const mailer = mg({
  apiKey: process.env.MAILGUN_APIKEY as string,
  domain: process.env.MAILGUN_DOMAIN as string,
  host: 'api.eu.mailgun.net'
})

interface MailData extends SendData {
  from: string
  to: string
  subject: string
  text?: string
  html?: string
}

const sendMail: (data: MailData) => Promise<SendResponse> = async (data: MailData) => {
  return new Promise(async () => {
    await mailer.messages().send(data)
  })
}

export { sendMail }
