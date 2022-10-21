const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getUser = async (token) => {
    try {
        const jwtToken = jwt.verify(token, process.env.TOKEN_KEY)
        const userID = jwtToken.userId
        const user = await UserModel.findOne({ _id: userID })
        return user
    } catch (error) {
        console.log(error)
    }
}


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
        const maxAge = 60 * 60 * 24;
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email })

        if (user) {
            const passwordCheck = await bcrypt.compare(password, user.password)
            if (passwordCheck) {
                const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY, { expiresIn: maxAge })
                res.cookie("jwt", token, {
                    withCrdentials: true,
                    httpOnly: false,
                    maxAge: maxAge * 1000
                })
                res.status(201).json({ userId: user._id, username: user.name, status: true })
            } else {
                throw Error("Invalid password")
            }
        } else {
            throw Error("Invalid email")
        }
    } catch (error) {
        console.log(error);
    }

})

module.exports.submitForm = asyncHandler(async (req, res, next) => {
    try {
        const user = await getUser(req.cookies.jwt)
        const userId = user._id
        const data = req.body
        await UserModel.updateOne({ _id: userId }, {
            $set: {
                'application.name': data.name,
                'application.address': data.address,
                'application.mobile': data.mobile,
                'application.CompanyName': data.CompanyName,
                'application.TeamBackground': data.TeamBackground,
                'application.companyProduct': data.companyProduct,
                applicationStatus:'pending'
            }
        })
        res.status(200).json({
            status: 'application updated'
        })
    } catch (error) {

    }
})

