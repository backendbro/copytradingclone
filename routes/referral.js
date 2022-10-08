const  router = require('express').Router()
const Referral = require('../service/Referral')
const {protect, auth} = require('../middlewares/protect-route')

router.use( protect, auth('user', 'admin'))

router.get('/get-link', Referral.getRefferalLink)
router.get('/get-referrals/:userId', Referral.getReferral)

module.exports = router


