const router = require("express").Router()
const ActionService = require('../service/Action')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect, auth('admin'))

router.get('/', ActionService.getAction)
router.get('/get-single-action', ActionService.getSingleAction)
router.post('/', ActionService.createAction)
router.put('/', ActionService.updateAction)
router.delete('/', ActionService.deleteAction)


module.exports = router