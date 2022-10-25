// Import Comment model
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
const Reply = require('../models/Reply');
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
exports.showReplies = async (req, res) => {
  const { commentid } = req.params;
  //   const { username } = req.user;

  const comment = await Comment.findById(commentid);
  console.log(comment);
  const commentReplies = comment.reply;
  const replies = [...commentReplies];

  if (replies.length < 1) {
    res.status(400);
    throw new Error('No Replies to display');
  } else {
    res.status(200).json(replies);
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
exports.createReply = async (req, res) => {
  const { commentid } = req.params;
  const { username, id } = req.user;
  const { text } = req.body;

  // Check if all fields are filled out
  if (!text || !username) {
    res.status(400);
    throw new Error('fill in all fields');
  }

  const reply = await Reply.create({
    text,
    username: id,
  });

  const comment = await Comment.findOne({ commentid });
  const commentReplies = comment.reply;
  const replies = [...commentReplies];
  replies.push(reply);

  const repliedComment = await Comment.findOneAndUpdate({ commentid }, { reply: replies }, { new: true });

  res.status(200).json(repliedComment);
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

// Update Post // DELETE // Admin Only
exports.deleteReply = async (req, res) => {
  res.status(200).json('Delete reply');
};
