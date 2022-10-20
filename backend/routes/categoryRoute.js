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

router.route('/:id')
  .get(showOneCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
