const router = require('express').Router()
const TraderService = require('../service/Trader')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.use(protect)

router.get('/get-all', auth("user", "admin"), TraderService.getTrader)
router.get('/get-one', auth('admin'), TraderService.getTraders)
router.post('/', auth('admin'), TraderService.createTrader)
router.get('/search/:searchString', auth('user', 'admin'),TraderService.searchTrader)
router.put('/', auth('admin'),upload.single("traderPhoto"), TraderService.updateTrader)


module.exports = router