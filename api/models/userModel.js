const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true
    },
    mobile: {
        type: Number,
        required: [true, 'Please provide mobile number']
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    application: {
        name: {
            type: String,
            required: [true, 'Please provide a name']
        },
        address: {
            type: String,
            required: [true, 'Please provide a address']
        },
        mobile: {
            type: Number,
            required: [true, 'Please provide mobile number']
        },
        CompanyName: {
            type: String,
            required: [true, 'Please provide a company name']
        },
        TeamBackground: {
            type: String,
            required: [true, 'Please provide team and background']
        },
        companyProduct: {
            type: String,
            required: [true, 'Please provide company and product']
        }
    }
},
    {
        timestamps: true
    })

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel