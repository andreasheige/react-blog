const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

//Middleware: /api/posts
router.get('/', PostController.getAllPosts);
router.get('/get', PostController.getSinglePost);
router.get('/create', PostController.createPost);

module.exports = router;