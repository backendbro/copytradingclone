const router = require('express').Router()
const {protect, auth} = require('../middlewares/protect-route')
const Stock = require('../service/Stock')

router.use(protect)

router.get('/currency', auth('user', 'admin'), Stock.getCurrencies)
router.get('/crypto', auth('user', 'admin') ,Stock.getCrypto)
router.get('/stock', auth('user', 'admin'), Stock.getStocks)

router.post('/simulate-trade', auth('admin') , Stock.simulateTrade)
router.post('/open-trade', auth("user",'admin'), Stock.getCloseTradeV2)
router.post('/close-trade', auth("user",'admin'), Stock.getOpenTradeV1)

module.exports = router