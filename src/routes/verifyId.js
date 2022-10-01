const router = require('express')
const VerifyIdentityService = require('../service/VerifyIdentityService')

router.post('/verify-id', VerifyIdentityService.verifyIDRegister)
router.post('/verify-id', VerifyIdentityService.verifyIDLoggedInUser)

module.exports = router