const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const adminDetails = {
    adminID: 'admin123',
    password: 'qwerty123'
}

module.exports.adminLogin = asyncHandler(async (req, res, next) => {
    try {
        const maxAge = 60 * 60 * 24;
        console.log(req.body)
        const { adminId, password } = req.body;
        console.log(adminId,password)
        if (adminId === adminDetails.adminID && password === adminDetails.password) {
            console.log("hiii")

            const adminToken = jwt.sign({ adminID: adminId }, process.env.TOKEN_KEY, { expiresIn: maxAge })
            res.cookie("adminjwt", adminToken, {
                withCrdentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000
            })
            res.status(201).json({ adminID: adminId, status: true })
        } else {
            throw Error("Invalid password or adminID")
        }
   
} catch (error) {
    console.log(error);
}

})