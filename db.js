const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost/27017/DatabaseName",(error)=>{
    if(!error){
        console.log("You are connected to mongodb...")
    }else{
        console.log(JSON.stringify(error,undefined,2))
    }
})

module.exports=mongoose;