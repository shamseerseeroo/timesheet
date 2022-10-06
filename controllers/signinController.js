

const debug = require('debug')('todo-api:controllers/todo');
require('express-async-errors');
const User = require('../models/userModel');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
//const dotenv = require('dotenv')
var jwt = require('jsonwebtoken');
require("dotenv").config();



const signin = {
  postdata: async (req, res, next) => {
    try {

      const { email, password } = req.body
      console.log(req.body)
      if (!(email && password)) {
        return res.status(403).send({status:false,messege:"All input are required"});
      }
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(403).send({status:false,messege:"invalid email"});
      }
      const userpassword = await bcrypt.compare(password, user.password)
      if (!userpassword) {
        return res.status(403).send({status:false,messege:"invalid pasword"});
      }
      if (user && userpassword) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email: user.email },
          process.env.SECRET_KEY,
          {

            expiresIn: "4h",
          }
        );
        User.token = token;
        return res.status(200).send({ auth: true, token: token, user_id: user._id, username: user.username });
        res.data = { auth: true, token: token, user_id: user._id, username: user.username }
        //  }
        //  if(res.data){
        //    return next
        //  }
        //   debug('Error occured while fetching all todos');
        //   throw new Error();

        // debug('Error occured while fetching all todos');
        // throw new Error();
      }
      //  if(password!= user.password){
      //   res.status(401).send("invalid password");
      //  }else{





    






    //res.status(400).send("Invalid Credentials");
    }catch (err) {
      console.log(err);
      debug('Error occured while fetching all todos');
      throw new Error();

    }

  }


}
// const updateRole={
//     updateData:async (req,res,next) => {
//          let userdata=await User.findOne({_id:req.params._id}).then((err,result)=>{
//             console.log(result);
//             result.role=req.body.role
//             result.save((err)=>{
//                 console.log(err);
//             })
//          })
//     }
    
// }

module.exports = signin;
