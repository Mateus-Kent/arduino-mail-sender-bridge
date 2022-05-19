import { Router } from 'express'

import MailController from './Controllers/mailController'

const router = Router()

router.post('/mail', (req, res) => MailController.sendMail(res))

export default router
