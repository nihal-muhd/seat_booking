const express = require('express')
const router = express.Router()
const {doSignUp,doLogin}=require('../controllers/userController')

router.post('/signup',doSignUp)
router.post('/login',doLogin)

module.exports = router;