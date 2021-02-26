const express=require("express");
const User =require('../models/User')
const obj_id=require('mongoose').Types.ObjectId;


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

    var user= new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address:[{
            streetName:req.body.streetName,
            city: req.body.city,
            state: req.body.state
        }]

    });

    user.save((err,user)=>{
        if(!err){
            res.send("User saved")

        }else{
            res.send(JSON.stringify(err,null,2))
        }

    })

})
user_route.delete('/:id',(req,res)=>{
    if(obj_id!==req.params.id){
       res.send("Wrong id was given")
    }
    User.findByIdAndDelete(obj_id, (err,doc)=>{
        if(err){
            res.send(JSON.stringify(err))
        }else{
            res.send("user deleted")
        }
    })


})
user_route.get('/:id',(req,res)=>{
    if(obj_id!==req.params.id){
        res.send("Wrong id was given")
     }
     User.findById(obj_id,(err,doc)=>{
         if(!err){
             res.send(doc)
         }
         else{
             res.send(JSON.stringify(err))
         }
     })


})

module.exports=user_route;