const router = require('express').Router()
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')
const Trade = require('../service/Trade')

router.use(protect, auth('user', "admin"))

router.post('/', Trade.buyTrade)
router.put('/upload-trade/:id', upload.single("uploadProof"), Trade.uploadProof)

module.exports = router
