const router = require('express').Router()
const AdminUser = require('../service/AdminUsers')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect, auth('admin'))

router.get('/', AdminUser.getUsers)
router.get('/:id', AdminUser.getUser)
router.delete('/:id', AdminUser.deleteUser)
router.get('/profile/:id', AdminUser.profile)
router.post('/', AdminUser.sendEmail)

router.get('/single-deposit/:id', AdminUser.getSingleDepositDetails)
router.get('/user', AdminUser.getDeposits)
router.put('/confirm-deposit/:id', AdminUser.confirmDeposits)

router.get('/withdrawal', AdminUser.getWithDrawals)
router.get('/single-withdrawal', AdminUser.getSingleWithDrawal)
router.get('/update-withdrawal', AdminUser.updateWithdrawal)

module.exports = router 