


const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/:id', userController.rolechange);
router.get('/', userController.getuser);

module.exports=router;