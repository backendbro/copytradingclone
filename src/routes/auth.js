const router = require('express').Router()
const UserService = require('../service/UserService')

router.post('/register', UserService.register)
router.get('/confirm-email/:token', UserService.confirmEmailURL)
router.post('/login', UserService.login)

module.exports = router 