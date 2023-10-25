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
    "isAdmin" : {
        type : Boolean,
        default : false
    },
    "likedPosts" : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Post'
        }
    ],
    "savedPosts" : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Post'
        }
    ]

},{timestamps : true});

const User =  mongoose.model('User',userSchema);

module.exports = User;