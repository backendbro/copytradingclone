const router = require('express').Router()
const { protect } = require('../middlewares/protect-route')
const WithDrawalService = require('../service/WithdrawalService')

router.get('/', protect, WithDrawalService.getWithDrawals)
router.post('/bank', protect, WithDrawalService.bank)
router.post('/cash-app', protect, WithDrawalService.cashApp)
router.post('/crypto', protect, WithDrawalService.crypto)
router.post('/paypal', protect, WithDrawalService.paypal)

module.exports = router