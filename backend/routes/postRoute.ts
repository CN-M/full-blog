const router = require('express').Router();

const {
  showUserPosts, showPostsPerCategory, showPosts, showOnePost, createPost, updatePost, deletePost,
} = require('../controllers/postController');

const { guard, protect } = require('../middleware/authMiddleware');

router.route('/random/:category')
  .get(showPostsPerCategory);

router.route('/')
  .get(showPosts)
  .post(createPost);
// .post(protect, createPost);

// router.route('/write')

router.route('/:slug')
  .get(showOnePost)
  .put(guard, updatePost)
  .delete(guard, deletePost);

module.exports = router;
