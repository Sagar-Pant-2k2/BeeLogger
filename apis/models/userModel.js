const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "userName" : {
        type:String,
        required : true
    },
    "email" : {
        type:String,
        required:true,
        unique : true
    },
    "password" : {
        type : String,
        required : true,
    },
    "avatar" : {
        type : String,
        default : "https://th.bing.com/th/id/OIP.oYT08vNDcdPwer-4OOLNHgHaE8?pid=ImgDet&w=3700&h=2467&rs=1"
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