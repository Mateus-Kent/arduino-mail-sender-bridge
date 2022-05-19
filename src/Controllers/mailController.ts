import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import dotenv from 'dotenv'
import { Response } from 'express'

dotenv.config()

class MailController {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER,
      port: Number(process.env.MAIL_PORT),
      secure: Number(process.env.MAIL_PORT) === 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    })
  }

  async sendMail(res: Response) {
    await this.transporter.sendMail({
      to: {
        name: 'Mateus',
        address: String(process.env.MAIL_TO),
      },
      from: {
        name: 'Mateus23',
        address: 'mateus23@caixainteligente.com',
      },
      subject: 'Sua entrega chegou !',
      html: '<h2>Sua entrega chegou verifique sua caixa de entrega</h2>',
    })

    return res.status(200).send('The email is sending with success')
  }
}

export default new MailController()
