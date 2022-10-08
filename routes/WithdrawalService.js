const router = require('express').Router()
const { protect, auth } = require('../middlewares/protect-route')
const WithDrawalService = require('../service/WithdrawalService')
router.use(protect ,  auth('user', "admin"))

router.get('/', WithDrawalService.getWithDrawals)
router.post('/bank', WithDrawalService.bank)
router.post('/cash-app', WithDrawalService.cashApp)
router.post('/crypto', WithDrawalService.crypto)
router.post('/paypal', WithDrawalService.paypal)

module.exports = router