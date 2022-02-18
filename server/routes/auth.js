const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/users',authController.getAllUsers);
router.delete('/users/:userId',authController.deleteUser);
module.exports = router;