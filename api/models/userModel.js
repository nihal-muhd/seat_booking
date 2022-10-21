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
            
        },
        address: {
            type: String,
            
        },
        mobile: {
            type: Number,
            
        },
        CompanyName: {
            type: String,
            
        },
        TeamBackground: {
            type: String,
            
        },
        companyProduct: {
            type: String,
            
        }
    },
    applicationStatus:{
        type:String,
        default:false
    }
},
    {
        timestamps: true
    })

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel