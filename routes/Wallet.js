const router = require('express').Router()
const WalletService = require('../service/Wallet')
const upload = require('../config/multer')
const {protect, auth} = require('../middlewares/protect-route')
router.use(protect)

router.get('/', auth("user", "admin"), WalletService.getWallet)
router.post('/single-wallet', auth('admin'), WalletService.getSingleWallet)
router.put('/update-wallet', auth('admin'), WalletService.updateWallet)
router.put('/upload-image', auth('admin'), upload.single("uploadWallet"), WalletService.uploadWallet)
router.post('/', auth("admin"), WalletService.addWallet)
router.delete('/', auth("admin"),WalletService.deleteWallet)

module.exports = router