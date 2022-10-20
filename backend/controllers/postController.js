// Import Post model
const Post = require('../models/Post');

// Display all posts // GET
exports.showPosts = async (req, res) => {
  const posts = await Post.find();
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
    const post = await Post.findById(id);
    if (post) return res.status(200).json(post);
  } catch (error) {
    res.status(400);
    throw new Error('Post not found');
  }
};

// Create Post // POST
exports.createPost = async (req, res) => {
  const { name, username } = req.body;

  // Check if all fields are filled out
  if (!name || !username) {
    res.status(400);
    throw new Error('fill in all fields');
  } else {
    const post = await Post.create({ name, username });
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
