const router = require('express').Router()
const WalletService = require('../service/Wallet')
const {protect, auth} = require('../middlewares/protect-route')
router.use(protect ,  auth('user', "admin"))

router.post('/', WalletService.addWallet)
router.delete('/:id', WalletService.deleteWallet)

module.exports = router