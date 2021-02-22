const mongoose = require('../db/connection')
const options = {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_doc, userDocToReturn) => {
            delete userDocToReturn.password
            return userDocToReturn
        }
    }
}


const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // blog: [blogPostSchema]
}, options)

module.exports = mongoose.model('User', userSchema)