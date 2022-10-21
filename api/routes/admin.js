const express = require('express')
const router = express.Router()
const { adminLogin,getApplication,changeStatus } = require('../controllers/adminController')

router.post('/login', adminLogin)
router.get('/getApplications',getApplication)
router.post('/changeStatus',changeStatus)

module.exports = router