const  router = require('express').Router()
const Referral = require('../service/Referral')
const {protect} = require('../middlewares/protect-route')

router.get('/get-link', protect, Referral.getRefferalLink)
router.get('/get-referrals/:userId', protect, Referral.getReferral)

module.exports = router


