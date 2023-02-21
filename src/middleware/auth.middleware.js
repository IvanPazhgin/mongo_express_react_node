const jwt = require('jsonwebtoken')
const config = require('config')

// перехватываем определенные данные и делаем необходимую логику
// метод next позволяет продолжить выполнение запроса
module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') return next() // базовая проверка доступности сервера

  try {
    const token = req.headers.authorization.split(' ')[1] // парсим строку 'Bearer TOKEN' и забераем из массива токен
    if (!token) return res.status(401).json({message: 'Авторизируйтесь'})

    const decoded = jwt.verify(token, config.get('jwtSecret')) // раскодируем токен
    req.user = decoded // создаем новое поле в объекте req
    next() // вызываем чтобы продолжить выполнение запроса
  } catch (e) {
    res.status(401).json({message: 'Авторизируйтесь'})
  }
}