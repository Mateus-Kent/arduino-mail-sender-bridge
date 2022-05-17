import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

console.log(process.env.MAIL_SERVER)

app.listen(3000, () => console.log('Server is running in the port 3000 🚀 🚀'))
