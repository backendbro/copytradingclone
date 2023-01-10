const router = require("express").Router()
const ActionService = require('../service/Action')
const TraderService = require('../service/Trader')

router.delete('/action', ActionService.deleteAction)
router.delete('/trader', TraderService.deleteTrader)

module.exports = router