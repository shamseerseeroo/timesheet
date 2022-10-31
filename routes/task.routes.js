




const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.create);
// router.post('/', signinController.updateData);
router.delete('/:id', taskController.deletetask);
router.put('/:id', taskController.updatetask);
router.get('/', taskController.gettask);


module.exports=router;