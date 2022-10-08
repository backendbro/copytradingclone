const router = require('express').Router()
const VerifyIdentityService = require('../service/VerifyIdentityService')
const upload = require('../config/multer')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect ,  auth('user', "admin"))

router.post('/verify-id', upload.fields([
    { name: 'frontImage', maxCount: 1 },
    { name: 'backImage', maxCount: 1 }]), VerifyIdentityService.verifyIDLoggedInUser)

module.exports = router