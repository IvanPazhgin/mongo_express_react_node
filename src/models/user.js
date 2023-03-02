const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  userName: {type: String, required: true},
  surname: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  gender: {type: String},
  photo: {type: String},
  registrationDate: {type: Date, default: Date.now},
  // links: [{type: Types.ObjectId, ref: 'Profile'}] // связка модели пользователя и определенных записей в БД
})

module.exports = model('User', schema)