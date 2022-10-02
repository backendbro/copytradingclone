const router = require('express').Router()
const VerifyIdentityService = require('../service/VerifyIdentityService')
const upload = require('../config/multer')
const {protect} = require('../middlewares/protect-route')

router.post('/verify-id', protect , upload.fields([
    { name: 'frontImage', maxCount: 1 },
    { name: 'backImage', maxCount: 1 }]), VerifyIdentityService.verifyIDLoggedInUser)

module.exports = router