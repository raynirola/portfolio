import type { NextApiRequest, NextApiResponse } from 'next'
import type { MailDataRequired } from '@sendgrid/mail'
import { ResponseError } from '@sendgrid/mail'
import { mailer } from '@/lib/mail'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = JSON.parse(req.body)

    if (!name || !email || !message) {
      return res.status(422).json({
        error: 'Please provide a name, email and message',
      })
    }

    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailPattern.test(String(email).toLowerCase())) {
      return res.status(422).json({
        error: 'Please provide a valid email',
      })
    }

    const data: MailDataRequired = {
      from: `${name} <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL as string,
      subject: 'Contact Message',
      text: `From: \n${email} \n\n\nMessage: \n${message}`,
    }

    try {
      await mailer.send(data)
      res.status(200).json({ message: 'Message sent successfully' })
    } catch (_error) {
      const error = _error as ResponseError
      console.log(JSON.stringify(error))
      res.status(error.code).json({ error: error.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default handler
