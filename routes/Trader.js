const router = require('express').Router()
const TraderService = require('../service/Trader')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.use(protect, auth('user', 'admin'))

router.get('/:id', TraderService.getTrader)
router.get('/', TraderService.getTraders)
router.post('/', TraderService.createTrader)
router.get('/search/:searchString', TraderService.searchTrader)
router.put('/:id', upload.single("traderPhoto"), TraderService.updateTrader)
router.get('/copiers', TraderService.copiers)

module.exports = router