 //import dotenv file
 require('dotenv').config()// to load environment variables

 //import express
 const express = require('express')

 //import cors
 const cors = require('cors')

 //import routes
 const routes =require('./routes')

 //import connection
 require('./connection')


 //create server
 const bookstoreServer = express()

 //use cors to connect ith front end
 bookstoreServer.use(cors())

 //parse the json data
 bookstoreServer.use(express.json())

 //server
 bookstoreServer.use(routes)

 //port
 const PORT = 4000 || process.env.PORT

 //listen to the port to aceept request
 bookstoreServer.listen(PORT , ()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
 })