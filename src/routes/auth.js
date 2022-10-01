const router = require('express').Router()
const UserService = require('../service/UserService')

const {protect} = require('../middlewares/protect-route')

router.post('/register', UserService.register)
router.put('/confirm-email/', UserService.confirmPin)
router.post('/login', UserService.login)
router.put('/complete-login', UserService.completeLogin)
router.post('/forgot-password', UserService.forgotPassword)
router.post('/resend-pin', UserService.resendConfirmEmailLink)
router.get('/reset-password/', UserService.resetPassword)
router.put('/forgot-password/:userId', protect, UserService.resetCurrentPassword)

module.exports = router 