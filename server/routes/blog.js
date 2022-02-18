const { Router } = require('express');
const blogController = require('../controllers/blogController');
const router = Router();

router.post('/blog', blogController.addBlog);
router.get('/blog', blogController.getBlog);
router.get('/blog/:userId', blogController.getUserBlogs);
// router.patch('/blog/:blogId', blogController.updateBlog);
// router.delete('/blog/:blogId', blogController.deleteBlog);


module.exports = router;