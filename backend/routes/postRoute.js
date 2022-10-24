const router = require('express').Router();

const {
  showAllPosts,
  showPosts,
  showOnePost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const {
  showAllComments,
  showComments,
  showOneComment,
  createComment,
} = require('../controllers/commentController');

const { guard, protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, showPosts)
  .post(protect, createPost);

router.route('/all/posts')
  .get(showAllPosts);

router.route('/:slug')
  .get(showOnePost)
  .put(guard, updatePost)
  .delete(guard, deletePost);

router.route('/:slug/comments')
  .get(showComments)
  .post(protect, createComment);

module.exports = router;
