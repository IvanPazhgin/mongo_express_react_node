const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  // id: {type: String, required: true, unique: true},
  userName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  links: [{type: Types.ObjectId, ref: 'Link'}] // связка модели пользователя и определенных записей в БД
})

module.exports = model('User', schema)