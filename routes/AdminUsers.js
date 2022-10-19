const router = require('express').Router()
const AdminUser = require('../service/AdminUsers')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect, auth('admin'))

router.get('/withdrawal', AdminUser.getWithDrawals)
router.get('/single-withdrawal', AdminUser.getSingleWithDrawal)
router.put('/update-withdrawal', AdminUser.updateWithdrawal)

router.get('/', AdminUser.getUsers)
router.get('/single-user', AdminUser.getUser)
router.delete('/delete-user', AdminUser.deleteUser)
router.get('/profile/', AdminUser.profile)
router.post('/', AdminUser.sendEmail)

router.get('/single-deposit/', AdminUser.getSingleDepositDetails)
router.get('/get-all', AdminUser.getDeposits)  
router.put('/confirm-deposit/', AdminUser.confirmDeposits)



module.exports = router 