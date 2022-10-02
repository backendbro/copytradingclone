const router = require('express').Router()
const UserService = require('../service/UserService')
const upload = require('../config/multer')
const {protect} = require('../middlewares/protect-route')

const VerifyIdentityService = require('../service/VerifyIdentityService')


module.exports = router
router.post('/register', UserService.register)
router.put('/confirm-email/', UserService.confirmPin)
router.post('/login', UserService.login)
router.put('/complete-login', UserService.completeLogin)
router.post('/forgot-password', UserService.forgotPassword)
router.post('/resend-pin', UserService.resendConfirmEmailPin)
router.get('/reset-password/', UserService.resetPassword)
router.put('/reset-current-password/', protect, UserService.resetCurrentPassword)

module.exports = router 