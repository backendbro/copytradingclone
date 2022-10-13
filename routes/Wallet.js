const router = require('express').Router()
const WalletService = require('../service/Wallet')
const {protect, auth} = require('../middlewares/protect-route')
const Wallet = require('../models/Wallet')
router.use(protect)

router.get('/', auth("user"), WalletService.getWallet)
router.get('/:id', auth('admin'), WalletService.getSingleWallet)
router.put('/:id', auth('admin'), WalletService.updateWallet)
router.post('/', auth("admin"), WalletService.addWallet)
router.delete('/:id', auth("admin"),WalletService.deleteWallet)

module.exports = router