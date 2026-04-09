const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  deleted: {
    type: Boolean,
    default: false
  }
});

// Automatically exclude soft deleted posts
postSchema.pre(/^find/, function () {
  this.where({ deleted: false });
});

// Soft delete method
postSchema.methods.softDelete = function () {
  this.deleted = true;
  return this.save();
};

const Post = mongoose.model('Post', postSchema);

module.exports = Post;