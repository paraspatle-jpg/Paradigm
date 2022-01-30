const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        minLength: 6,
    },
})

module.exports = User = mongoose.model('user',UserSchema);

