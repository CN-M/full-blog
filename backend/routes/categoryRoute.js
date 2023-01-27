const router = require('express').Router();

const {
  showCategories, showOneCategory, createCategory, updateCategory, deleteCategory,
} = require('../controllers/categoryController');

const { showPostsPerCategory } = require('../controllers/postController');

const { guard } = require('../middleware/authMiddleware');

router.route('/')
  .get(showCategories)
  .post(guard, createCategory);

router.route('/:categoryName')
  .get(showPostsPerCategory)
  .put(guard, updateCategory)
  .delete(guard, deleteCategory);

// .get(showOneCategory)
module.exports = router;
