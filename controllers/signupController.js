require('express-async-errors');
const dotenv = require('dotenv');
const User = require('../models/userModel');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const jwt=require("jsonwebtoken")
require("dotenv").config();
  


const signup = {

    postdata: async (req,res, next) => {
        try {
            const { username, email, password } = req.body
            if (!(username && email && password)) {
                res.status(400).send("all input is required")
            }
            const oldUser = await User.findOne({ email })
            if (oldUser) {
                res.status(409).send("this user is already exist")
            }
            encryptedPassword = await bcrypt.hash(password, 10)

            const user = new User();
                user.username=req.body.username
                user.email=req.body.email
                user.password=encryptedPassword
                user.role=req.body.role
                user.save((err)=>{
                    if(err){
                        console.log(err)
                    }
                })
        
            const token=jwt.sign(
                {userid:User._id,email},
                process.env.SECRET_KEY,
                {expiresIn:'2h'}
            )
            user.token=token
            return res.status(200).json(user)
            console.log(user)
            
        }
        catch(err) {
           console.log(err)
        }
    }
}
  
module.exports= signup;