const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth=require('../middleware/auth')

module.exports.doSignUp = asyncHandler(async (req, res, next) => {
    try {
        const user = req.body
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await UserModel.create(user)
        res.status(201).json({
            status: 'User Created'
        })
    } catch (error) {
        console.log(error)
    }
})
module.exports.doLogin = asyncHandler(async (req, res, next) => {
    try {
        console.log(req.body,"this is me")
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: req.body.email })

        if (user && (await bcrypt.compare(password, user.password))) {
            // create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )
            user.token = token
            console.log(token,"hiiii")

            res.status(200).json(user)
        }
        res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log(error);
    }

})

