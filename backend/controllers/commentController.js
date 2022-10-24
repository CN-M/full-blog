// Import Comment model
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
const Category = require('../models/Category');

// Display ALL comments // GET // ADMIN ONLY
exports.showAllComments = async (req, res) => {
  // Find ALL user comments
  const comments = await Comment.find({}, '-content').populate('username', 'username email').populate('category', 'name');
  if (comments.length < 1) {
    res.status(400);
    throw new Error('No Comments to display');
  } else {
    res.status(200).json(comments);
  }
};

// Display all user comments // GET // ADMIN ONLY
exports.showComments = async (req, res) => {
  const { slug } = req.params;
  //   const { username } = req.user;

  const post = await Post.findOne({ slug });
  const postComments = post.comment;
  const comments = [...postComments];

  if (comments.length < 1) {
    res.status(400);
    throw new Error('No Comments to display');
  } else {
    res.status(200).json(comments);
  }
};

// // Display specific comment // GET
// exports.showOneComment = async (req, res) => {
//   const { slug } = req.params;
//   const comment = await Comment.findOne({ slug });
//   if (comment) return res.status(200).json(comment);
//   res.status(400);
//   throw new Error('Comment not found');
// };

// Create Comment // POST
exports.createComment = async (req, res) => {
  const { slug } = req.params;
  const { username, id } = req.user;
  const { text } = req.body;

  // Check if all fields are filled out
  if (!text || !username) {
    res.status(400);
    throw new Error('fill in all fields');
  }

  const comment = await Comment.create({
    text,
    username: id,
  });

  const post = await Post.findOne({ slug });
  const postComments = post.comment;
  const comments = [...postComments];
  comments.push(comment);

  const commentedPost = await Post.findOneAndUpdate({ slug }, { comment: comments }, { new: true });

  res.status(200).json(commentedPost);
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
