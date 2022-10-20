
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database Connected: ${conn.connection.host} `.yellow.underline) // .yellow.underline is from color module
    } catch (error) {
        throw (error)
    }
}

module.exports = connectDB

