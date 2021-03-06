const { Router } = require('express');
const blogController = require('../controllers/blogController');
const router = Router();

router.post('/blog', blogController.addBlog);
router.get('/blog', blogController.getBlog);
router.get('/:userId/blog', blogController.getUserBlogs)

module.exports = router;