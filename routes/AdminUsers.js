const router = require('express').Router()
const AdminUsers = require('../service/AdminUsers')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect, auth('admin'))

router.get('/', AdminUsers.getUsers)
router.get('/:id', AdminUsers.getUser)
router.delete('/:id', AdminUsers.deleteUser)
router.get('/:id', AdminUsers.profile)
router.post('/', AdminUsers.sendEmail)


module.exports = router 