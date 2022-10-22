const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    username: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    category: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true },
);

PostSchema.virtual('url').get(function() {
  return `/posts/${this.slug}`;
});

module.exports = mongoose.model('Post', PostSchema);
