require('express-async-errors');
const dotenv = require('dotenv');
const Project = require('../models/projectModel');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');


exports.create=(req,res,next)=>{
    console.log("hii")
    console.log(req.body);
    var project = new Project()
    project.name= req.body.name;
    project.activestatus = req.body.activestatus;
    project.assigne = req.body.assigne
    project.save((err)=>{
        if (err) {
            res.json({
              status: "error",
              message: err,
            });
          } else {
            res.json({
              status: "success",
              message: 'project created Successfully',
              // data: updateItem
            });
          }
    })
}
exports.deleteproject = function (req, res) {
  Project.findById(req.params.id, function (err, result) {
    console.log(result);
      if (!result) {
          res.json({
              status: "error",
              message: "no record find with the given id"
          });
      }

      if (err) {
          res.json({
              status: "error",
              message: err
          });
      }
      result.delstatus = true;
      result.save(function (err) {

          if (err) {
              res.json({
                  status: "error",
                  message: err
              });
          }

          res.json({
              status: "success",
              message: 'Deleted Successfully',
              data: result
          });

      });


  });

};
  exports.updateproject = async (req, res, next) => {
    Project.findById(req.params.id, (err, updateItem) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    } else {
        updateItem.name= req.body.name,
        updateItem.activeststaus= req.body.activeststaus,
        updateItem.assigne= req.body.assigne,
       

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

  }
  )
}
    
 

    exports.getproject = (req, res) => {
      Project.find({
              delstatus: false
          })
          .then(function (list) {
              res.json({
                  status: "success",
                  message: "project retrieved successfully",
                  data: list
              });
          })
          .catch((err) => {
              res.json({
                  status: "error",
                  message: err,
              });
          })
  }  
  
