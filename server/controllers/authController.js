const User = require('../models/User');

module.exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password })
        .then((user) => {
            if (!user) return res.status(404).json({ message: "User not found with these credentials" })
            res.status(200).send({
                userId: user._id,
                username: user.username,
                email: user.email,
            })
        })
}

module.exports.signup = (req, res) => {
    const { username, email, password } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (user) return res.status(400).json({ message: "User already exists with this mail" });
            const newUser = new User({ username, email, password });
            newUser.save()
                .then((user) => {
                    res.status(200).send({
                        userId: user._id,
                        username: user.username,
                        email: user.email
                    })

                })
        })
}