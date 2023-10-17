const postModel = require("../models/postModel");

const createPost = async (req, res) => {
  const data = req.body;

  const newPost = new postModel({
    title: data.title,
    content: data.content,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    console.error("Error creating post");
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

const likePost = (req, res) => {
  res.send("Post liked");
};

const publishPost = (req, res) => {
  console.log(req);
  res.status(200).json({message:"published the post"});
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  publishPost,
  likePost,
  deletePost,
};
