const router = require('express').Router();

const {
  showCategories,
  showOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const { guard } = require('../middleware/authMiddleware');

router.route('/')
  .get(showCategories)
  .post(guard, createCategory);

// router.route('/:/all')
// router.route('/:categoryName')

//   .get(showUserPosts);

router.route('/:categoryName')
  .get(showOneCategory)
  .put(guard, updateCategory)
  .delete(guard, deleteCategory);

module.exports = router;
