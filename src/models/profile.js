const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  from: {type: String, required: true}, // откуда идет данная ссылка. Используется в CreatePage и profile.routes // todo: to delete
  to: {type: String, required: true, unique: true}, // куда ведет данная ссылка // todo: to delete
  code: {type: String, required: true, unique: true},
  date: {type: Date, default: Date.now}, // дата создания ссылки
  clicks: {type: Number, default: 0}, // обычный счетчик // todo: to delete
  owner: {type: Types.ObjectId, ref: 'User'}, // пользователь, который создал ссылку
})

module.exports = model('Profile', schema)

// todo: delete this file