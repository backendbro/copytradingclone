const router = require('express').Router()
const {protect, auth} = require('../middlewares/protect-route')
const Stock = require('../service/Stock')

router.use(protect)

router.get('/currency', auth('user', 'admin'), Stock.getCurrencies)
router.get('/crypto', auth('user', 'admin') ,Stock.getCrypto)
router.get('/stock', auth('user', 'admin'), Stock.getStocks)

router.post('/open-trade', auth('admin') ,Stock.openTrade)
router.post('/close-trade', auth('admin'), Stock.closeTrade)

module.exports = router