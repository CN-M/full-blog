const router = require('express').Router();

const {
  showPosts,
  showOnePost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

router.route('/')
  .get(showPosts)
  .post(createPost);

router.route('/:slug')
  .get(showOnePost)
  .put(updatePost)
  .delete(deletePost);

module.exports = router;
