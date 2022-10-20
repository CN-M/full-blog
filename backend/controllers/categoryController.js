// Import Category model
const Category = require('../models/Category');

// Display all categories // GET
exports.showCategories = async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  if (categories.length < 1) {
    res.status(400);
    throw new Error('No Categories to display');
  } else {
    res.status(200).json(categories);
  }
};

// Display specific category // GET
exports.showOneCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (category) return res.status(200).json(category);
  } catch (error) {
    res.status(400);
    throw new Error('Category not found');
  }
};

// Create Category // POST
exports.createCategory = async (req, res) => {
  const { name } = req.body;

  // Check if all fields are filled out
  if (!name) {
    res.status(400);
    throw new Error('fill in all fields');
  } else {
    const category = await Category.create({ name });
    res.status(200).json(category);
  }
};

// Update Category // PUT
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const category = await Category.findById(id);
    if (category) {
      const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
      res.status(200).json(updatedCategory);
    }
  } catch (error) {
    res.status(400);
    throw new Error('Category not found');
  }
};

// Delete Category // DELETE
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  if (!category) {
    res.status(400);
    throw new Error('Category not found');
  } else {
    res.status(200).json(`Category ${category.name} deleted`);
    await category.remove();
  }
};
