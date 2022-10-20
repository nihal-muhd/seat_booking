const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')

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
module.exports.doLogin=asyncHandler(async(req,res,next)=>{
    // try {
    //     console.log(req.body,"hahahh")
    //    const user=await UserModel.findOne({email:req.body.email})
    //    if(user){
    //     const correctPassword=await bcrypt.compare(req.body.password,UserModel.password)
    //     console.log(correctPassword,"hii")
    //    }

    // } catch (error) {
    //     console.log(error)
    // }
})

