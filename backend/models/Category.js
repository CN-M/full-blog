const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

CategorySchema.virtual('url').get(
  function() {
    return `/categories/${this.name}`;
  },
);

module.exports = mongoose.model('Category', CategorySchema);
