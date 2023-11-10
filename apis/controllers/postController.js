const postModel = require("../models/postModel");
const userModel = require('../models/userModel');

const createPost = async (req, res) => {
  const data = req.body;

  const newPost = new postModel({
    title: data.title,
    content: data.content,
    author: req.userId, 
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    console.error("Error creating post", err);
    res.status(500).send("Error creating post");
  }
};


const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200,posts);
    }
    catch(err) {
        console.log(err);
        res.status(500).send("error fetching posts");
    }
};

const updatePost = (req, res) => {
  res.send("updated Post");
};

const deletePost = (req, res) => {
  res.send("deleted post");
};

const likePost =  async (req, res) => {
  const { postId, userId } = req.body;

  try {
    // Check if the user has already liked the post
    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.likes.includes(userId)) {
      return res.status(400).json({ message: 'You have already liked this post' });
    }

    // Add the user's like to the post
    post.likes.push(userId);

    // Update the post in the database
    await post.save();

    // Update the user's likedPosts
    const user = await userModel.findById(userId);
    if (user) {
      user.likedPosts.push(postId);
      await user.save();
    } else {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Post liked', likes: post.likes.length });
  } catch (error) {
    console.error('Error while liking the post', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const publishPost = (req, res) => {
  console.log(req);
  res.status(200).json({message:"published the post"});
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
};
