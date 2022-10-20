const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
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
})

const applicationModel = mongoose.model('application', applicationSchema)
module.exports = applicationModel