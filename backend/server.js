 const express = require('express');
 const cors = require('cors');
 const mongoose = require('mongoose');
const { constrainedMemory } = require('process');
 const app = express();
 require('dotenv').config();

 app.use(cors());
 app.use(express.json());

 const dbURI = process.env.MONGODB_URL;

 mongoose.connect(dbURI,{

    useNewUrlParser: true,
    useUnifiedTopology: true,

    

 }).then(function(){

    console.log("Connected to the Database Successfully");
 }).catch(function(){

    console.log("Error Occured in Database connection");
 })

 const PORT = 5000;

 app.listen(PORT,function(){

       console.log(`Server is running on port ${PORT}`);

 });



