const router = require("express").Router()
const ActionService = require('../service/Action')

router.delete('/', ActionService.deleteAction)


module.exports = router