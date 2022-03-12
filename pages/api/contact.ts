import type { NextApiRequest, NextApiResponse } from 'next'
import { sendMail } from '@/lib/mail'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      res.status(422).json({
        error: 'Please provide a name, email and message'
      })
    }

    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailPattern.test(String(email).toLowerCase())) {
      res.status(422).json({
        error: 'Please provide a valid email'
      })
    }

    const data = {
      from: `"${name}" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL as string,
      subject: 'Contact Message',
      text: `From: \n${email} \n\n\nMessage: \n${message}`
    }

    try {
      const response = await sendMail(data)
      res.status(200).json({ message: response.message })
    } catch (_error) {
      const error = _error as Error
      res.status(500).json({ message: error.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default handler
