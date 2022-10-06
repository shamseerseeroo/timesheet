require('express-async-errors');
const dotenv = require('dotenv');
const User = require('../models/userModel');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

exports.rolechange=async(req,res,next)=>{
    User.findById(req.params.id, (err, updateItem) => {
    
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {   
         
            
            updateItem.role = req.body.role;
       
          
            updateItem.save((err) => {
    
                if (err) {
                    res.json({
                        status: "error",
                        message: err,
                    });
                } else {
                    res.json({
                        status: "success",
                        message: 'Updated Successfully',
                        data: updateItem
                    });
                }
    
            });
        }
    
    });
}

