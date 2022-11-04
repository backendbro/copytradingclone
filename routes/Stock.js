const router = require('express').Router()
const {protect, auth} = require('../middlewares/protect-route')
const Stock = require('../service/Stock')

router.use(protect)

router.post('/currency', auth('user', 'admin'), Stock.getCurrencies)
router.post('/crypto', auth('user', 'admin') ,Stock.getCrypto)
router.post('/stock', auth('user', 'admin'), Stock.getStocks)

router.post('/open-trade', auth('admin') ,Stock.openTrade)
router.post('/close-trade', auth('admin'), Stock.closeTrade)

module.exports = router