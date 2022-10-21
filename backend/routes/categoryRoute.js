const router = require('express').Router();

const {
  showCategories,
  showOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

router.route('/')
  .get(showCategories)
  .post(createCategory);

router.route('/:categoryName')
  .get(showOneCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
