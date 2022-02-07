const User = require('../models/User');
const nodemailer = require("nodemailer");
require('dotenv').config();

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
});

module.exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password })
        .then( (user) => {
            if (!user) return res.status(404).json({ message: "User not found with these credentials" })
              
            let mailDetails = {
                from: 'paradigm.tutorial234@gmail.com',
                to: email,
                subject: 'Login Successful',
                text: 'Welcome to paradigm'
            };
              
            mailTransporter.sendMail(mailDetails, (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log('Email sent successfully');
                }
            });

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
        .then(async (user) => {
            if (user) return res.status(400).json({ message: "User already exists with this mail" });
            const newUser = new User({ username, email, password });

            let mailDetails = {
                from: 'paradigm.tutorial234@gmail.com',
                to: email,
                subject: 'Login Successful',
                text: 'Welcome to paradigm'
            };
              
            mailTransporter.sendMail(mailDetails, (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log('Email sent successfully');
                }
            });

            
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