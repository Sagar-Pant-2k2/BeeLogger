const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "realName" : {
        type:String,
        required : true
    },
    "userName" : {
        type:String,
        required:true,
    },
    "password" : {
        type : String,
        required : true,
    },
    "avatar" : {
        type : String,
        default : ""
    },
    "isAdmin" : {
        type : Boolean,
        default : false
    },
    "likedBlogs" : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Post'
        }
    ],
    "authoredBlogs" : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Post'
        }
    ]

},{timestamps : true});

const User =  mongoose.model('User',userSchema);

module.exports = User;