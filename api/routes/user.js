const express = require('express')
const router = express.Router()
const {doSignUp,doLogin,userHome}=require('../controllers/userController')


router.post('/signup',doSignUp)
router.post('/login',doLogin)
router.post('/applicationForm')


module.exports = router;