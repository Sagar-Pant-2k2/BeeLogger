const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')

router.get('/all',postController.getAllPosts);
router.delete('/:id',postController.deletePost);
router.post('/update',postController.updatePost);
router.post('/publish',postController.publishPost);
router.post('/create',postController.createPost);

module.exports = router;