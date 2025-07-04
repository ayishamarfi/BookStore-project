 //import express
 const express = require('express')

 //import userController
 const userController = require('./controllers.js/userController')

 //instance
 const routes = new express.Router()

 //path to register a user
 routes.post('/register' ,userController.registerController )

 //export
 module.exports = routes
