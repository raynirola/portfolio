const MG = require("mailgun-js")

import type { NextApiRequest, NextApiResponse } from "next"

interface ResponseData {
  message: string
}

interface RequestData {
  name: string,
  email: string,
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method != "POST") {
    res.status(405).json({ message: `Invalid Method. Cannot ${req.method}` })
  } else {
    const apiKey = process.env.NEXT_PUBLIC_MAILGUN_APIKEY
    const publicKey = process.env.NEXT_PUBLIC_MAILGUN_PUBLICKEY
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
    const mailSendFrom = process.env.NEXT_PUBLIC_FROM_EMAIL
    const mailgunDomain = process.env.NEXT_PUBLIC_MAILGUN_DOMAIN
    const mailgunHost = process.env.NEXT_PUBLIC_MAILGUN_HOST

    const mailgun = new MG({
      apiKey: apiKey,
      publicApiKey: publicKey,
      domain: mailgunDomain,
      host: mailgunHost
    })

    const { name, email, message } = <RequestData>req.body

    const data = {
      from: `"${name}" <${mailSendFrom}>`,
      to: adminEmail,
      subject: "Contact Message",
      text: `From: \n${email} \n\n\nMessage: \n${message}`
    }

    mailgun.messages().send(data, function(error: any, body: any) {
      if (error) {
        const { statusCode, message } = error
        return res.status(statusCode).json({ message: message })
      } else {
        return res.status(201).json({ message: body.message })
      }
    })
  }
}