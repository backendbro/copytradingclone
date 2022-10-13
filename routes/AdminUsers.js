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

module.exports = router 