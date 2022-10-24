const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema(
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
  },
  { timestamps: true },
);

ReplySchema.virtual('url').get(
  function() {
    return `/categories/${this.name}`;
  },
);

module.exports = mongoose.model('Reply', ReplySchema);
