 //register
//import model
const users = require("../model/userModel");

 
 exports.registerController =async (req,res)=>{
    //logic
    const {username , password , email} = req.body
    console.log(username , password ,email);
    // res.status(200).json('req recieved')
    try{
      const existingUser = await users.findOne({email})

      if(existingUser){
        res.status(406).json('user already exists')
      }
      else{
        const newUser =new users ({
            username,  
            email,
            password

        })
        await newUser.save()
        res.status(200).json(newUser)
      }
    }catch(error){
      res.status(401).json(error)
    }
    
 }