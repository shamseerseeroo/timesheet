


const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.create);
// router.post('/', signinController.updateData);
router.delete('/:id', projectController.deleteproject);
router.put('/:id', projectController.updateproject);
router.get('/', projectController.getproject);


module.exports=router;