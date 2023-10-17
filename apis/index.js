const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors');
app.use(cors());
require('dotenv').config();
app.use(express.json());
app.use("/",(req,res,next)=>{
    console.log(req.body);
    console.log("fuck you")
    next();
})

app.use('/user',userRoutes);
app.use('/post',postRoutes);
mongoose.connect(process.env.DBURL);
const dbConnection = mongoose.connection;
dbConnection.on('error',(err)=>{
    console.log("error connecting to database");
})
dbConnection.on('open',()=>console.log('connected to databse'));

app.listen(process.env.PORT || 3000,()=>console.log("listening at port 3000"));






    