const User = require('../models/User');

module.exports.login = (req , res) =>{
    const {email, password} = req.body;

    User.findOne({email,password})
        .then((user) =>{
            if(!user) return res.send({message:"User not found with these credentials"})
            res.send({
                userId:_id,
                username:user.username,
                email:user.email,
            })
        })
}