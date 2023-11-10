const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  }, { timestamps: true });
  
  const Post = mongoose.model('Post', postSchema);
  module.exports = Post;
  