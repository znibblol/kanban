const User = require('../models/User');

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if(error) {
            return console.log(error);
        }
        res.status(201).json(user);
    })
}