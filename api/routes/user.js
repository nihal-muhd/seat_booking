const express = require('express')
const router = express.Router()
const {doSignUp,doLogin,getUser,submitForm}=require('../controllers/userController')


router.post('/signup',doSignUp)
router.post('/login',doLogin)
router.post('/applicationForm',submitForm)


module.exports = router;