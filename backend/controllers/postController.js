const slugify = require('slugify');

// Import Post model
const Post = require('../models/Post');
const User = require('../models/User');
const Category = require('../models/Category');

// Display All Posts // GET
exports.showPosts = async (req, res) => {
  // Find ALL posts
  const posts = await Post.find({}, '-updatedAt -__v')
    .populate('username', 'first_name last_name username email')
    .populate('category', 'name')
    .populate('comment', 'username text');
  if (posts.length < 1) {
    res.status(400);
    throw new Error('No Posts to display');
  } else {
    res.status(200).json(posts);
  }
};

// Display All User Posts // GET
exports.showUserPosts = async (req, res) => {
  const { user } = req.params;

  const author = await User.findOne({ username: user });

  const posts = await Post.find({ username: author.id }, '-updatedAt -__v')
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

// Display All Category Posts // GET
exports.showPostsPerCategoryy = async (req, res) => {
  const { category } = req.params;

  const postCategory = await Category.findOne({ name: category });

  const posts = await Post.find({ category: postCategory.id }, '-updatedAt -__v')
    .populate('category', 'name')
    .populate('comment', 'username text');

  if (posts) {
    res.status(200).json(posts);
  }
};

// Display Specific Post // GET
exports.showOnePost = async (req, res) => {
  const { slug } = req.params;
  const post = await Post.findOne({ slug }, '-updatedAt -__v')
    .populate('category', 'name')
    .populate('username', 'username email')
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
    title, content, category, image, username,
  } = req.body;

  // const { username } = req.user;

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
    image,
  });

  res.status(200).json(post);
};

// Update Post // PUT
exports.updatePost = async (req, res) => {
  const { slug } = req.params;
  const {
    title, content, category, image,
  } = req.body;

  const post = await Post.findOne({ slug });

  const categoryIds = [];
  let newCategory = [];
  if (category) {
    const cat = category?.split(', ');
    const postCategory = await Category.find({ name: { $in: cat } });
    postCategory.forEach((category) => categoryIds.push(category.id));

    newCategory = categoryIds;
  } else {
    newCategory = post.category;
  }

  let slugged;
  if (title) {
    // generate slug
    slugged = slugify(title, { remove: /[*+~.()'"!:@]/g, lower: true });
  }

  if (post) {
    const updatedPost = await Post.findByIdAndUpdate(post.id, {
      title, content, category: newCategory, image, slug: slugged,
    }, { new: true });
    res.status(200).json(updatedPost);
  } else {
    res.status(400);
    throw new Error('Post not found');
  }
};

// Delete Post // DELETE
exports.deletePost = async (req, res) => {
  const { slug } = req.params;
  const post = await Post.findOne({ slug });

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  } else {
    res.status(200).json(`Post '${post.title}' deleted`);
    await post.deleteOne();
  }
};
