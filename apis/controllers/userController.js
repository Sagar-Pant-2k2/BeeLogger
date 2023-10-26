const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");


const register = async (req, res) => {
  const data = req.body;
  const salt = await bcrypt.genSalt(5);
  const newUser = new userModel({
    userName: data.userName,
    password: await bcrypt.hash(data.password, salt),
    realName: data.realName,
    avatar : "https://th.bing.com/th/id/OIP.oYT08vNDcdPwer-4OOLNHgHaE8?pid=ImgDet&w=3700&h=2467&rs=1"
  });

  try {
    console.log("Working until here");

    // Use findOne to check if a user with the same userName exists
    const existingUser = await userModel.findOne({ userName: data.userName });

    if (existingUser) {
      console.log("User already exists!");
      return res.status(400).json({ message: "UserName not available" });
    }


    // If no existing user is found, save the new user
    await newUser.save();

    console.log("User created successfully!");
    res.status(201).json({message: "new user created"});
  } catch (err) {

    //if realName is missing
    if(!data.realName) {
      return res.status(500).json({message : "realName required"});
      console.log("realname")
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  console.log("was here")
  try {
    const data = req.body;
    console.log(data);
    const user = await userModel.findOne({userName: data.userName});
    if (!user) { 
      console.log("user not found"); 
      return res.status(400).json({ message: "incorrect username or password" });}
    const pass_matched = await bcrypt.compare(data.password, user.password);
    if (pass_matched) {
      const token = jwt.sign(
        { 
          userName: user.userName,
          isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET_KEY 
      );
      const userData = {...user._doc};
      delete userData.password;
      return res.status(201).json({ message: "successfully logged in", token: token , userData});
    } 
    else {
      return res.status(400).json({ message: "incorrect username or password" });
    }
  } 
  catch (err) {
    console.log("following error occured", err);
    res.status(501).json({ message: "internal server error" });
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
