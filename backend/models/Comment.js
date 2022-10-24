const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
    reply: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
  },
  { timestamps: true },
);

CommentSchema.virtual('url').get(
  function() {
    return `/categories/${this.name}`;
  },
);

module.exports = mongoose.model('Comment', CommentSchema);
