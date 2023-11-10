const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const register = async (req, res) => {
  const data = req.body;
  const salt = await bcrypt.genSalt(5);
  const newUser = new userModel({
    userName: data.username,
    password: await bcrypt.hash(data.password, salt),
    email: data.email,
  });
  try {
    console.log("Working until here");

    // Use findOne to check if a user with the same userName exists
    const existingUser = await userModel.findOne({ email: data.email });

    if (existingUser) {
      console.log("User already exists!");
      return res.status(400).json({ message: "user with same mail exist" });
    }
    // If no existing user is found, save the new user
    await newUser.save();
    console.log("User created successfully!");
    return res.status(201).json({ message: "New user created" });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const login = async (req, res) => {
  try {
    const data = req.body;
    const user = await userModel.findOne({ email: data.email });

    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const passMatched = await bcrypt.compare(data.password, user.password);

    if (passMatched) {
      const token = jwt.sign(
        {
          email: user.email,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET_KEY
      );

      // Remove sensitive data (password) from the user object
      const userData = { ...user._doc };
      delete userData.password;

      return res.status(201).json({
        message: "Successfully logged in",
        token: token,
        userData,
      });
    } else {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getUser = async (req, res) => {
  const UserName = req.params.userName;
  try {
    const user = await User.findOne({ userName:UserName });

    if (!user) {
      res.status(404).json({ message: "No such user exists" });
      return; 
    }


    const {avatar,userName,realName,authoredBlogs} = user;
    

    res.status(200).json({ avatar,userName,realName,authoredBlogs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching user data" });
  }
};


const deleteUser = async (req, res) => {
  
  try {
    console.log(req.customData.userName, "deleted :)");
    
    const user = await User.findOne({ userName: req.customData.userName });

    if (!user) {
      throw new Error('User not found');
    }
    console.log("pata chal gaya", req.customData.userName);
    const deletedUser = await User.findOneAndDelete({ userName: req.customData.userName });
    res.status(201).json({ message: "Deleted user successfully" });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Could not delete" });
  }
};


const updateUser = (req, res) => {
  res.send("updated user");
};

module.exports = {
  register,
  updateUser,
  deleteUser,
  getUser,
  login,
};
