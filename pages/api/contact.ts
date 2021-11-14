import type { NextApiRequest, NextApiResponse } from 'next'

const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_APIKEY,
  domain: process.env.MAILGUN_DOMAIN,
  host: 'api.eu.mailgun.net',
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body

      if (!name || !email || !message) {
        res.status(422).json({
          error: 'Please provide a name, email and message',
        })
        return
      }

      //pattern to check if email is valid
      const emailPattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!emailPattern.test(String(email).toLowerCase())) {
        res.status(422).json({
          error: 'Please provide a valid email',
        })
        return
      }

      const data = {
        from: `"${name}" <${process.env.FROM_EMAIL}>`,
        to: process.env.ADMIN_EMAIL,
        subject: 'Contact Message',
        text: `From: \n${email} \n\n\nMessage: \n${message}`,
      }

      mailgun.messages().send(data, (error: any, body: any) => {
        if (error) {
          res.status(error.statusCode).json({ error: error.message })
          return
        }
        return res.status(201).json({ message: body.message })
      })
    } catch (e: any) {
      res.status(500).json({ message: e.message })
      return
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default handler
