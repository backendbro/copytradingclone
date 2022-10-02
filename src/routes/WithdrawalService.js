const router = require('express').Router()
const { protect } = require('../middlewares/protect-route')
const WithDrawalService = require('../service/WithdrawalService')


router.post('/bank', protect, WithDrawalService.bank)

module.exports = router