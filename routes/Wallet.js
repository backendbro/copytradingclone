const router = require('express').Router()
const WalletService = require('../service/Wallet')
const {protect, auth} = require('../middlewares/protect-route')
router.use(protect)

router.get('/', auth("user", "admin"), WalletService.getWallet)
router.post('/single-wallet', auth('admin'), WalletService.getSingleWallet)
router.put('/', auth('admin'), WalletService.updateWallet)
router.post('/', auth("admin"), WalletService.addWallet)
router.delete('/', auth("admin"),WalletService.deleteWallet)

module.exports = router