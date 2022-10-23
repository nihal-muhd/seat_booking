const express = require('express')
const router = express.Router()
const { doSignUp, doLogin, submitForm, userData } = require('../controllers/userController')


router.post('/signup', doSignUp)
router.post('/login', doLogin)
router.post('/applicationForm', submitForm)
router.get('/getUserData', userData)


module.exports = router;