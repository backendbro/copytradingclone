const router = require('express').Router()
const WalletService = require('../service/Wallet')
const {protect, auth} = require('../middlewares/protect-route')
router.use(protect)

router.get('/', auth("user"), WalletService.addWallet)
router.post('/', auth("admin"), WalletService.addWallet)
router.delete('/:id', auth("admin"),WalletService.deleteWallet)

module.exports = router