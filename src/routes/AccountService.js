const router = require('express').Router()
const AccountService = require('../service/AccountService')
const {protect} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.post('/token', protect, AccountService.requestToken)
router.post('/update-email', protect, AccountService.UpdateEmail)
router.post('/update-photo', upload.fields([{ name: 'profilePicture', maxCount: 1 }]), protect, AccountService.UpdatePhoto)
router.get('/profile', protect, AccountService.myProfile)
router.put('/update-address', upload.fields([{ name: 'addressBill', maxCount: 1 }]), protect, AccountService.updateAddress)
module.exports = router