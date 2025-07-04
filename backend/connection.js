 //import mongoose
 const mongoose = require ('mongoose')
 
//accessing the environment variable
 const connectionstring = process.env.DATABASE

 //connection
 mongoose.connect(connectionstring).then(()=>{
    console.log(`mongo db connected successfully`);
    
 }).catch((err)=>{
    console.log(`mongodb connection failed due to :${err}`);
    
 })