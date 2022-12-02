const User = require('../models/user');
const mongoose = require('mongoose');

exports.signUp = (req, res) => {
    const {username, email, password} = req.body;
    const user = new User({username, email, password});
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: "Not able to save user in DB"
            });
        }
        res.json({
            username: user.username,
            email: user.email,
            id: user._id
        });
    });
};

exports.signIn = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User email does not exist"
            });
        }
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password do not match"
            });
        }
        //create token
        const token = jwt.sign({_id: user._id}, process.env.SECRET);
        //put token in cookie
        res.cookie("token", token, {expire: new Date() + 9999});
        //send response to front end
        const {_id, username, email, role} = user;
        return res.json({token, user: {_id, username, email, role}});
    });
}

