const slugify = require('slugify');

// Import models
const Category = require('../models/Category');
const Post = require('../models/Post');

// Import Secrets
const { SECRET_NAME, SECRET_ROLE } = process.env;

// Display all categories // GET
exports.showCategories = async (req, res) => {
  const categories = await Category.find({}, 'name -_id').sort({ name: 1 });
  if (categories.length < 1) {
    res.status(400);
    throw new Error('No Categories to display');
  } else {
    res.status(200).json(categories);
  }
};

// Display specific category // GET
exports.showOneCategory = async (req, res) => {
  const { categoryName } = req.params;

  const category = await Category.findOne({ name: categoryName }, 'name -_id').sort({ name: 1 });

  // Check if category exists
  if (!category) {
    res.status(400);
    throw new Error('Category not found');
  }

  const categoryPosts = await Post.find({ category: category.id }).populate('category', 'name -_id');
  if (category && categoryPosts) return res.status(200).json({ category, categoryPosts });
};

// Create Category // POST
exports.createCategory = async (req, res) => {
  const { username, role } = req.user;
  const { name } = req.body;

  if ((role !== SECRET_ROLE) && (username !== SECRET_NAME)) {
    res.status(401);
    throw new Error('Not authorized');
  }

  // Check if all fields are filled out
  if (!name) {
    res.status(400);
    throw new Error('fill in all fields');
  }

  // generate slug
  const sluggedName = slugify(name, { remove: /[*+~.()'"!:@]/g, lower: true });

  // Check if category already registered
  const categoryExists = await Category.findOne({ name: sluggedName });
  if (categoryExists) {
    res.status(400);
    throw new Error('Category already registered');
  }

  const category = await Category.create({ name: sluggedName });
  res.status(200).json(category);
};

// Update Category // PUT // ADMIN ONLY
exports.updateCategory = async (req, res) => {
  const name = req.body.name.toLowerCase();
  const categoryName = req.params.categoryName.toLowerCase();

  // generate slug
  const sluggedName = slugify(name, { remove: /[*+~.()'"!:@]/g, lower: true });

  const category = await Category.findOne({ name: categoryName });
  if (category) {
    const updatedCategory = await Category.findByIdAndUpdate(category.id, { name: sluggedName }, { new: true });
    res.status(200).json(updatedCategory);
  } else {
    res.status(400);
    throw new Error('Category not found');
  }
};

// Delete Category // DELETE
exports.deleteCategory = async (req, res) => {
  const categoryName = req.params.categoryName.toLowerCase();

  const category = await Category.findOne({ name: categoryName });
  if (category) {
    res.status(200).json(`Category '${category.name}' deleted`);
    await category.deleteOne();
  } else {
    res.status(400);
    throw new Error('Category not found');
  }
};
