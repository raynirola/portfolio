import mg from 'mailgun-js'

const mailer = mg({
  apiKey: process.env.MAILGUN_APIKEY as string,
  domain: process.env.MAILGUN_DOMAIN as string,
  host: 'api.eu.mailgun.net'
})

export { mailer }
