const router = require('express').Router()
const Deposits = require('../service/Deposit')
const {protect} = require('../middlewares/protect-route')

router.get('/', protect, Deposits.getDeposits)
router.post('/', protect, Deposits.makeDeposits)

module.exports = router
