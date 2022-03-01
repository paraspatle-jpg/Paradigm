const { Router } = require('express');
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth')
const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/users',auth, authController.getAllUsers);
router.delete('/delete',authController.deleteUser);


module.exports = router;