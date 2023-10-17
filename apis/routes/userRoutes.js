const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/update', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUser);







module.exports = router;
