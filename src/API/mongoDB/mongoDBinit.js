const config = require('config')
const mongoUri = config.get('mongoUri')

const { MongoClient } = require('mongodb')
const mongoClient = new MongoClient(mongoUri)

module.exports = mongoClient