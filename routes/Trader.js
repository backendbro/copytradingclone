const router = require('express').Router()
const TraderService = require('../service/Trader')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

//router.use(protect)

router.get('/get-all', TraderService.getTraders)
router.get('/get-one', TraderService.getTrader)
router.post('/', auth('admin'), TraderService.createTrader)
router.get('/search/:searchString', auth('user', 'admin'),TraderService.searchTrader)
router.put('/', auth('admin'),upload.single("traderPhoto"), TraderService.updateTrader)
router.delete('/', TraderService.deleteTrader)

module.exports = router