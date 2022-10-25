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
  createComment,
  deleteComment,
} = require('../controllers/commentController');

const {
  showAllReplies,
  showReplies,
  createReply,
  deleteReply,
} = require('../controllers/replyController');

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

// Comments
router.route('/:slug/comments')
  .get(showComments)
  .post(protect, createComment)
  .delete(guard, deleteComment);

// Replies
router.route('/:slug/comments/:commentid')
  .get(showReplies)
  .post(protect, createReply)
  .delete(guard, deleteReply);

module.exports = router;
