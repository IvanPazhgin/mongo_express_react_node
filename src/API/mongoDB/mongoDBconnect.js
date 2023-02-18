const mongoClient = require('./mongoDBinit')

async function startMongoDB() {
  try {
    await mongoClient.connect()
    console.log('[v] Connected to mongoDB')
  } catch (error) {
    console.warn(error)
  }
}

module.exports = startMongoDB