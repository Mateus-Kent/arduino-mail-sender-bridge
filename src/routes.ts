import { Router } from 'express'

import MailController from './Controllers/mailController'

const router = Router()

router.post('/mail', () => MailController.sendMail())

export default router
