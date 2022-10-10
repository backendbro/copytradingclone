const router = require('express').Router()
const Contract = require('../service/Contract')
const {protect, auth} = require('../middlewares/protect-route')
const upload = require('../config/multer')

router.use(protect, auth('user', 'admin'))

router.post('/', Contract.buyContracts)
router.put('/upload-contract/:id', upload.single("uploadProof"), Contract.uploadProof)

module.exports = router
