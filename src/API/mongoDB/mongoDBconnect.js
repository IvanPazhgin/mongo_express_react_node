const mongoose = require("mongoose")
const config = require("config")
const db = config.get("mongoUri")

async function mongoDBconnect() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log(`[v] MongoDB Connected...  ${Date()}`)
  } catch (error) {
    console.warn(error)
  }
}

module.exports = mongoDBconnect
