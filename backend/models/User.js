const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { SECRET_ROLE } = process.env;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      required: true,
      enum: [SECRET_ROLE, 'Writer', 'Editor', 'Reader'],
      default: 'Reader',
    },
  },
  { timestamps: true },
);

UserSchema.virtual('name').get(
  function() {
    let name = '';
    if (this.first_name && this.family_name) {
      name += `${this.first_name} ${this.last_name}`;
    }
    return name;
  },
);

module.exports = mongoose.model('User', UserSchema);
