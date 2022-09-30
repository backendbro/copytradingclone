const router = require('express').Router()
const UserService = require('../service/UserService')

router.post('/register', UserService.register)
router.get('/confirm-email/:token', UserService.confirmEmailURL)
router.post('/login', UserService.login)
router.put('/complete-login', UserService.completeLogin)
router.post('/forgot-password', UserService.forgotPassword)
router.get('/reset-password/:token', UserService.resetPassword)

module.exports = router 