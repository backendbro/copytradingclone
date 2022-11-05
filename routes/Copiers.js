const Copiers = require('../service/Copiers')
const router = require('express').Router()
const {protect, auth} = require('../middlewares/protect-route')

router.use(protect)

router.post('/get-copiers', auth("user", "admin"), Copiers.getCopiers)
router.post('/', auth('user'), Copiers.addCopiers)
router.put("/", auth('admin') , Copiers.declineCopiers)

module.exports = router