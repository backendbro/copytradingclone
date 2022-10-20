const router = require('express').Router()
const AdminUser = require('../service/AdminUsers')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect, auth('admin'))

router.get('/withdrawal', AdminUser.getWithDrawals)
router.get('/single-withdrawal', AdminUser.getSingleWithDrawal)
router.put('/update-withdrawal', AdminUser.updateWithdrawal)

router.get('/all-users', AdminUser.getUsers)
router.post('/single-user', AdminUser.getUser)
router.delete('/delete-user', AdminUser.deleteUser)
router.post('/', AdminUser.sendEmail)

router.get('/single-deposit/', AdminUser.getSingleDepositDetails)
router.post('/get-all', AdminUser.getDeposits)  
router.put('/confirm-deposit/', AdminUser.confirmDeposits)
router.delete('/delete-deposit', AdminUser.deleteDeposits)



module.exports = router 