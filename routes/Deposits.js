const router = require('express').Router()
const Deposits = require('../service/Deposit')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')


router.use(protect)

router.get('/', auth('user'), Deposits.getDeposits)
router.post('/', auth('user'), Deposits.makeDeposits)
router.put('/upload-proof/:id', auth('user'), upload.single("uploadProof"),Deposits.uploadProof)
router.get('/balance/', auth('user', 'admin'), Deposits.getBalance)

module.exports = router
