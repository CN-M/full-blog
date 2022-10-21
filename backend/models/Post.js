const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
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
    categories: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    }],
  },
  { timestamps: true },
);

PostSchema.virtual('url').get(
  function() {
    return `${this.name}`;
  },
);

module.exports = mongoose.model('Post', PostSchema);
