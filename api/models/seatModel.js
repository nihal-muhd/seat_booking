const mongoose = require('mongoose')

const seatSchema = new mongoose.Schema({
    seatno: {
        type: String
    },
    status: {
        type: Boolean,

    },
    userId: {
        type: String
    }
}, {
    timestamps: true
})

const seatModel = mongoose.model('seat', seatSchema)
module.exports = seatModel