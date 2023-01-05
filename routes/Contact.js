const router = require('express').Router()
const UserService = require('../service/UserService')

router.post("/", UserService.contactUs)

module.exports = router