const router = require('express').Router()
const VerifyIdentityService = require('../service/VerifyIdentityService')
const upload = require('../config/multer')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect ,  auth('user', "admin"))

router.get('/:id', VerifyIdentityService.verifiedAuth)
router.put('/', upload.fields([
    { name: 'frontImage', maxCount: 1 },
    { name: 'backImage', maxCount: 1 }]), VerifyIdentityService.verifyIDLoggedInUser)

router.put('/address-bill', upload.single('addressBill'), VerifyIdentityService.sendAddressBill)

module.exports = router