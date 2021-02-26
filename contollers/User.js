const express=require("express");
const User =require('../models/User')
const user_route=express.Router();

user_route.get('/',(req,res)=>{
  User.find((err,doc)=>{
      if(!err){
          res.send(doc)
      }
      else{
          res.send(JSON.stringify(err,null,2))
      }
  })
})
user_route.post('/',(req,res)=>{

})
user_route.get('/:id',(req,res)=>{

})
user_route.delete('/:id',(req,res)=>{

})