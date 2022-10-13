const router = require("express").Router()
const ActionService = require('../service/Action')
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect, auth('admin'))

router.get('/', ActionService.getAction)
router.get('/:id', ActionService.getSingleAction)
router.post('/', ActionService.createAction)
router.put('/:id', ActionService.updateAction)
router.delete('/:id', ActionService.deleteAction)


module.exports = router