const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// const register = async(req,res) => {

//     const data = req.body;
//     const newUser = new userModel({
//         "userName" : data.userName,
//         "password" : data.password,
//         "realName" : data.realName
//     });
//     try {
//         console.log("working til here");
//         const flag = await userModel.find(userName === data.userName);
//         if(flag) {
//             console.log("pahile se h bhaii!");
//             res.status(500).json({msg:"user already exist"});
//         }
//         else{
//             await newUser.save();
//             console.log("congo");
//             res.status(201).json(newUser);
//         }

//     }
//     catch(err){
//         res.status(500).send(err);
//     }

// }

const register = async (req, res) => {
  const data = req.body;
  const salt = await bcrypt.genSalt(5);
  const newUser = new userModel({
    userName: data.userName,
    password: await bcrypt.hash(data.password, salt),
    realName: data.realName,
  });

  try {
    console.log("Working until here");

    // Use findOne to check if a user with the same userName exists
    const existingUser = await userModel.findOne({ userName: data.userName });

    if (existingUser) {
      console.log("User already exists!");
      return res.status(400).json({ messsage: "User already exists" });
    }

    // If no existing user is found, save the new user
    await newUser.save();

    console.log("User created successfully!");
    res.status(201).json({ newUser, message: "new user created" });
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  console.log("was here")
  try {
    const data = req.body;
    console.log(data);
    const user = await userModel.findOne({userName: data.userName});
    if (!user) res.status(401).json({ message: "user not found" });
    const pass_matched = await bcrypt.compare(data.password, user.password);
    if (pass_matched) {
      const token = jwt.sign(
        { userName: user.userName,
          isAdmin: user.isAdmin
         },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.status(201).json({ message: "successfully logged in", token: token });
    } else {
      res.status(400).json({ message: "incorrect username or password" });
    }
  } catch (err) {
    console.log("following error occured", err);
    res.status(501).json({ message: err.message });
  }
};

const getUser = (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
};

const deleteUser = (req, res) => {
  res.send("deleted user");
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
