require('express-async-errors');
const dotenv = require('dotenv');
const Project = require('../models/projectModel');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const projectModel = require('../models/projectModel');

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
exports.deleteproject = async (req, res, next) => {
     console.log("delete");
    console.log(req.params.id)
    const data = await Project.findById(req.params.id, function (err, ditItem) {
      if (!ditItem) {
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
      ditItem.delstatus = true;
      ditItem.save(function (err) {
  
        if (err) {
          res.json({
            status: "error",
            message: err
          });
        } else {
          res.json({
            status: "success",
            message: 'Deleted Successfully',
            data: ditItem
          });
        }
  
      });
    })
  }
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
exports.getproject = async (req, res, next) => {
  const data = await Project.find((err, result) => {
    console.log(result);
    
    if (err) {
      console.log("error")
      res.json({        status: "error",
        message: err,
      });
    } else {
      if(result){
      console.log("success");
      res.json({
        status: "success",
        message: 'project details loading..',
        data: result
      });
    }
    }
    // if (result) {
    //   // const response = {
    //   //   data: result,
    //   // };
    //   res.json({
    //     status: "success",
    //     message: 'project details loading..',
    //     data: result
    //   });

    //   // return next();
    // } else {
    //   res.json({
    //     status: "error",
    //     message: err,
    //   });
    // }
  })
}
