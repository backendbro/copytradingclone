const router = require('express').Router()
const UserService = require('../service/UserService')
const {protect, auth} = require('../middlewares/protect-route')

router.post('/register/referral/:userId', UserService.registerWithReferral)

router.post('/register', UserService.register)
router.put('/confirm-email/', UserService.confirmPin)
router.post('/login', UserService.login)
router.put('/complete-login', UserService.completeLogin)
router.post('/forgot-password', UserService.forgotPassword)
router.post('/resend-pin', UserService.resendConfirmEmailPin)
router.post('/reset-password/', UserService.resetPassword)
router.put('/reset-current-password/', protect, auth('user', 'admin'), UserService.resetCurrentPassword)
router.post('/get-user', protect, auth('user'), UserService.getUser)

module.exports = router 

