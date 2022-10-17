require('express-async-errors');
const dotenv = require('dotenv');
const Task = require('../models/taskModel');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');


exports.create=(req,res,next)=>{
    console.log("hii")
    console.log(req.body);
    var task = new Task()
    task.name= req.body.name;
    task.activestatus = req.body.activestatus;
    task.assigne = req.body.assigne
    task.save((err)=>{
        if (err) {
            res.json({
              status: "error",
              message: err,
            });
          } else {
            res.json({
              status: "success",
              message: 'task created Successfully',
              // data: updateItem
            });
          }
    })
}
exports.deletetask = async (req, res, next) => {
     console.log("delete");
    console.log(req.params.id)
    const data = await Task.findById(req.params.id, function (err, ditItem) {
      console.log(ditItem)
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
  exports.updatetask = async (req, res, next) => {
    Task.findById(req.params.id, (err, updateItem) => {
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
exports.gettask = async (req, res, next) => {
  const data = await Task.find((err, result) => {
    console.log(result);
    if (result) {
      // const response = {
      //   data: result,
      // };
      res.json({
        status: "success",
        message: 'task details loading..',
        data: result
      });


      // return next();
    } else {
      res.json({
        status: "error",
        message: err,
      });
    }
  })
}
