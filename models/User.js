const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String,
    department: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;