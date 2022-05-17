import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import dotenv from 'dotenv'

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

  async sendMail(): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: 'Mateus',
        address: 'mateusquent2003@gmail.com',
      },
      from: {
        name: 'Mateus23',
        address: 'mateus23@caixainteligente.com',
      },
      subject: 'Sua entrega chegou !',
      html: '<h1>Sua caixa chegou verifique sua caixa de entrega</h1>',
    })
  }
}

export default new MailController()
