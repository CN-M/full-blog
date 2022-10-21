// Import Post model
const Post = require('../models/Post');
const User = require('../models/User');
const Category = require('../models/Category');

// Display all posts // GET
exports.showPosts = async (req, res) => {
  const posts = await Post.find().populate('username');
  if (posts.length < 1) {
    res.status(400);
    throw new Error('No Posts to display');
  } else {
    res.status(200).json(posts);
  }
};

// Display specific post // GET
exports.showOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id).populate('Category');
    if (post) return res.status(200).json(post);
  } catch (error) {
    res.status(400);
    throw new Error('Post not found');
  }
};

// Create Post // POST
exports.createPost = async (req, res) => {
  const {
    username, title, content, categories,
  } = req.body;

  // Check if all fields are filled out
  if (!title || !username || !content) {
    res.status(400);
    throw new Error('fill in all fields');
  } else {
    const user = await User.findOne({ username });
    const category = await Category.find({ name: categories });

    const post = await Post.create({
      title,
      username: user.id,
      category: category[0].id,
      content,
    });
    res.status(200).json(post);
  }
};

// Update Post // PUT
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, username } = req.body;
  try {
    const post = await Post.findById(id);
    if (post) {
      const updatedPost = await Post.findByIdAndUpdate(id, { name, username }, { new: true });
      res.status(200).json(updatedPost);
    }
  } catch (error) {
    res.status(400);
    throw new Error('Post not found');
  }
};

// Delete Post // DELETE
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  } else {
    res.status(200).json(`Post ${post.name} deleted`);
    await post.remove();
  }
};
