const router = require('express').Router()
const AccountService = require('../service/AccountService')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.use(protect, auth('user', 'admin'))

router.post('/token', AccountService.requestToken)
router.put('/update-email', AccountService.UpdateEmail)
router.put('/update-photo' , upload.single('profilePicture'), AccountService.UpdatePhoto)
router.get('/profile', AccountService.myProfile)
router.put('/update-address', upload.single('addressBill'), AccountService.updateAddress)   
module.exports = router