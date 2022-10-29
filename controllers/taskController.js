require('express-async-errors');
const dotenv = require('dotenv');
const Task = require('../models/taskModel');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');


exports.create=(req,res)=>{
    console.log("hii")
    console.log(req.body);
    var task = new Task()
    task.name= req.body.name;
    task.activestatus = req.body.activestatus;
    task.assigne = req.body.assigne
    task.save((err)=>{
      console.log(task)
      if (err) {
          console.log(err)
          res.json({
              status: "error",
              message: err,
          });
      } else {
          res.json({
              status: "success",
              message: 'Successfully Created',
              data: task
          });
      }
    })
}
exports.deletetask = function (req, res) {
  Task.findById(req.params.id, function (err, result) {
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
exports.gettask = (req, res) => {
  Task.find({
          delstatus: false
      })
      .then(function (list) {
          res.json({
              status: "success",
              message: "task retrieved successfully",
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
