const router = require("express").Router()
const ActionService = require('../service/Action')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect, auth('admin'))

router.get('/', ActionService.getAction)
router.post('/', ActionService.createAction)


module.exports = router