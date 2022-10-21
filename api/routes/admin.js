const express = require('express')
const router = express.Router()
const { adminLogin, getApplication, changeStatus, getUser, deleteUser, editUser, approvedApplication,rejectedApplication } = require('../controllers/adminController')

router.post('/login', adminLogin)
router.get('/getApplications', getApplication)
router.post('/changeStatus', changeStatus)
router.get('/getUser', getUser)
router.post('/deleteUser', deleteUser)
router.post('/userEdit', editUser)
router.get('/approvedApplication', approvedApplication)
router.get('/rejectedApplication', rejectedApplication)

module.exports = router