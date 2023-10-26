const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const Auth = require('../middleware/Auth');


router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/update', userController.updateUser);
router.delete('/',Auth, userController.deleteUser);
router.get('/:userName', userController.getUser);







module.exports = router;
