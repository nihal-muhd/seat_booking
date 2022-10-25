const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const seatModel = require('../models/seatModel')

const adminDetails = {
    adminID: process.env.ADMIN_ID,
    password: process.env.ADMIN_PASSWORD
}

module.exports.adminLogin = asyncHandler(async (req, res, next) => {
    try {
        const maxAge = 60 * 60 * 24;
        const { adminId, password } = req.body;
        if (adminId === adminDetails.adminID && password === adminDetails.password) {
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

module.exports.getApplication = asyncHandler(async (req, res, next) => {
    try {
        const applications = await UserModel.find({ applicationStatus: 'pending' })
        res.status(200).json({ status: true, applications: applications })
    } catch (error) {

    }
})

module.exports.changeStatus = asyncHandler(async (req, res, next) => {
    try {
        const data = req.body
        await UserModel.updateOne({ _id: data.userId }, {
            $set: {
                applicationStatus: data.status
            }
        })
        res.status(200).json({ status: true })
    } catch (error) {

    }
})

module.exports.getUser = asyncHandler(async (req, res, next) => {
    try {
        const users = await UserModel.find().lean()
        res.status(200).json({ status: true, users: users })
    } catch (error) {

    }
})

module.exports.deleteUser = asyncHandler(async (req, res, next) => {
    try {
        const userId = req.body.userId
        await UserModel.deleteOne({ _id: userId })
        res.status(200).json({ status: true })
    } catch (error) {

    }
})

module.exports.editUser = asyncHandler(async (req, res, next) => {
    try {
        const formData = req.body.formData
        const userId = req.body.useId
        await UserModel.updateOne({ _id: userId }, {
            $set: {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile
            }
        })
        res.status(200).json({
            status: true
        })
    } catch (error) {

    }
})

module.exports.approvedApplication = asyncHandler(async (req, res, next) => {
    try {
        const application = await UserModel.find({ applicationStatus: 'accepted' }).lean()
        res.status(200).json({ status: true, application })
    } catch (error) {

    }
})

module.exports.rejectedApplication = asyncHandler(async (req, res, next) => {
    try {
        const application = await UserModel.find({ applicationStatus: 'reject' }).lean()
        res.status(200).json({ status: true, application })
    } catch (error) {

    }
})

module.exports.reserveSeat = asyncHandler(async (req, res, next) => {
    try {
        req.body.status = true
        const data = req.body
        await UserModel.updateOne({ _id: data.userId }, {
            $set: {
                seatNumber: data.seatno,
                reserveStatus: true
            }
        })
        await seatModel.updateOne({ _id: data.seatId }, {
            $set: {
                seatno: data.seatno,
                status: data.status,
                userId: data.userId
            }
        })
        res.status(201).json({ status: true })
    } catch (error) {

    }
})

module.exports.bookedSeats = asyncHandler(async (req, res, next) => {
    try {
        const seats = await seatModel.find().lean()
        res.status(200).json({ status: true, seats })
    } catch (error) {

    }
})