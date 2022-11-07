const router = require('express').Router()
const AdminUser = require('../service/AdminUsers')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect, auth('admin'))

router.post('/withdrawal', AdminUser.getWithDrawals)
router.post('/single-withdrawal', AdminUser.getSingleWithDrawal)
router.put('/update-withdrawal', AdminUser.updateWithdrawal)

router.get('/all-users', AdminUser.getUsers)
router.post('/single-user', AdminUser.getUser)
router.delete('/delete-user', AdminUser.deleteUser)
router.post('/send-email', AdminUser.sendEmail)
router.get('/search-user/:searchString', AdminUser.searchUser)

router.post('/single-deposit/', AdminUser.getSingleDepositDetails)
router.post('/get-all', AdminUser.getDeposits)  
router.put('/confirm-deposit/', AdminUser.confirmDeposits)
router.delete('/delete-deposit', AdminUser.deleteDeposits)

router.post('/get-profile', AdminUser.getProfile)
router.put('/update-profile', AdminUser.updateProfile)



module.exports = router 