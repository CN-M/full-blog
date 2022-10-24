const slugify = require('slugify');

// Import Post model
const Post = require('../models/Post');
const User = require('../models/User');
const Category = require('../models/Category');

// Display ALL posts // GET // ADMIN ONLY
exports.showAllPosts = async (req, res) => {
  // Find ALL user posts
  const posts = await Post.find({}, '-content')
    .populate('username', 'username email')
    .populate('category', 'name')
    .populate('comment', 'username text');
  if (posts.length < 1) {
    res.status(400);
    throw new Error('No Posts to display');
  } else {
    res.status(200).json(posts);
  }
};

// Display all user posts // GET // ADMIN ONLY
exports.showPosts = async (req, res) => {
  const posts = await Post.find({}, '-content')
    .populate('username', 'username email')
    .populate('category', 'name')
    .populate('comment', 'username text');
  if (posts.length < 1) {
    res.status(400);
    throw new Error('No Posts to display');
  } else {
    res.status(200).json(posts);
  }
};

exports.showPostsPerCategory = async (req, res) => {
  res.status(200).send('Show all posts per category');
};

// Display specific post // GET
exports.showOnePost = async (req, res) => {
  const { slug } = req.params;
  const post = await Post.findOne({ slug })
    .populate('category')
    .populate({
      path: 'comment',
      select: 'text',
      populate: {
        path: 'username',
        select: 'username email',
      },
    });

  if (post) {
    return res.status(200).json(post);
  } else {
    res.status(400);
    throw new Error('Post not found');
  }
};

// Create Post // POST
exports.createPost = async (req, res) => {
  const {
    username, title, content, category,
  } = req.body;

  // Check if all fields are filled out
  if (!title || !username || !content || !category) {
    res.status(400);
    throw new Error('fill in all fields');
  }

  const user = await User.findOne({ username });
  const cat = category.split(', ');
  const categoryIds = [];

  const postCategory = await Category.find({ name: { $in: cat } });
  postCategory.forEach((category) => categoryIds.push(category.id));

  // generate slug
  const slug = slugify(title, { remove: /[*+~.()'"!:@]/g, lower: true });

  // Check if email already has account
  const postExists = await Post.findOne({ slug });
  if (postExists) {
    res.status(400);
    throw new Error('Post title already taken');
  }

  const post = await Post.create({
    title,
    username: user.id,
    content,
    category: categoryIds,
    slug,
  });

  res.status(200).json(post);
};

// Update Post // PUT
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, username } = req.body;
  const post = await Post.findById(id);
  if (post) {
    const updatedPost = await Post.findByIdAndUpdate(id, { name, username }, { new: true });
    res.status(200).json(updatedPost);
  }
  res.status(400);
  throw new Error('Post not found');
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
    await post.deleteOne();
  }
};
