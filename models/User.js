const mongoose=require("mongoose");

const User=mongoose.model("User",{
    firstName: {type:String},
    lastName: {type: String},
    email: {type:String},
    phoneNumber: {type: String},
    address:[{
        streetName:{type:String},
        city: {type: String},
        state: {type:String}
    }]

})


module.exports=User;