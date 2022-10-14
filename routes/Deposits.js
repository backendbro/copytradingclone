const router = require('express').Router()
const Deposits = require('../service/Deposit')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.use(protect, auth('user'))

router.get('/', Deposits.getDeposits)
router.post('/', Deposits.makeDeposits)
router.put('/upload-proof/:id', upload.single("uploadProof"),Deposits.uploadProof)

module.exports = router
