const mongoClient = require('./mongoDBinit')

async function mongoDBconnect() {
  try {
    await mongoClient.connect()
    console.warn(`[v] Connected to mongoDB. ${Date()}`)
  } catch (error) {
    console.error(error)
  }
}

// module.exports = mongoDBconnect