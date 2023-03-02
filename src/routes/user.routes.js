const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Users = require('../models/user')

const router = Router()

router.get('/', auth, async (req, res) => {
  try {
    const users = await Users.find()
    res.json(users)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const user = await Users.findById(req.params.id)
    res.json(user)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// маршрут для обновления данных пользователя
router.put('/:id', auth, async (req, res) => {
  try {
    const userId = req.params.id
    const { userName, surname, email, gender, photo } = req.body.updatedUser
    const updatedData = { userName, surname, email, gender, photo }

    // обновляем данные пользователя в базе данных
    const updatedUser = await Users.findByIdAndUpdate(userId, updatedData, { new: true })

    res.json(updatedUser)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router