const express = require('express')
const config = require('config')
const mongoDBconnect = require('./API/mongoDB/mongoDBconnect')

const app = express()
const PORT = config.get('port') || 5000

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))

async function start() {
  try {
    await mongoDBconnect()

    app.listen(PORT, () => {
      console.log(`[v] Server has been started on port ${PORT}...`)
    })
  } catch (e) {
    console.warn('Server Error', e.message)
    process.exit(1)
  }
}

start()

