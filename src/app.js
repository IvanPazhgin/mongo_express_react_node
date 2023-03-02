const express = require('express')
const config = require('config')
const path = require('path')
const mongoDBconnect = require('./API/mongoDB/mongoDBconnect')

const app = express()
const PORT = config.get('port') || 5000

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
// app.use('/user', require('./routes/auth.routes'))
app.use('/profile', require('./routes/profile.routes'))
app.use('/users', require('./routes/user.routes'))

// отдаем frontend
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

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

