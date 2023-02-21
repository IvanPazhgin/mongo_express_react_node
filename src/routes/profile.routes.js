const {Router} = require('express')
const config = require('config')
const shortid = require('shortid') // todo: to uninstall
const Profile = require('../models/profile') // модель
const auth = require('../middleware/auth.middleware')

const router = Router()

// генерируем ссылку
// todo: переименовать generate в editingUser
router.post('/generate', auth, async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl')
    const {from} = req.body // получаем ссылку с frontend: компонент CreatePage, строка 20, body: {from} // todo: исправить здесь, в компоненте, в модели
    const code = shortid.generate() // формируем короткую ссылку в виде уникального кода // todo: to delete

    const existing = await Profile.findOne({from}) // проверяем, есть ли в БД ссылка from // todo: to delete
    if (existing) return res.json({profile: existing}) // нет смысла заново формировать данные // todo: to delete

    const to = baseUrl + '/t/' + code // формируем сокращенную ссылку // todo: to delete

    const user = new Profile({code, to, from, owner: req.user.userId}) // создаем новый объект ссылки

    await user.save()

    res.status(201).json({user: user})
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// запрос для получения всех ссылок
router.get('/', auth, async (req, res) => {
  try {
    const profiles = await Profile.find({ owner: req.user.userId}) // данные пользователя получаем с frontend по jwt token
    res.json(profiles)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// запрос для получения сслыки по id
router.get('/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
    res.json(profile)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router