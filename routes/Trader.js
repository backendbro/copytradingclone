const router = require('express').Router()
const TraderService = require('../service/Trader')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.use(protect)

router.get('/:id', auth('admin'), TraderService.getTrader)
router.get('/', auth('user', 'admin'), TraderService.getTraders)
router.post('/', auth('admin'), TraderService.createTrader)
router.get('/search/:searchString', auth('user', 'admin'),TraderService.searchTrader)
router.put('/:id', auth('admin'),upload.single("traderPhoto"), TraderService.updateTrader)
router.get('/copiers', auth('admin'),TraderService.getCopiers)
router.get('/copiers/:id', auth('admin'),TraderService.declineCopiers)

module.exports = router