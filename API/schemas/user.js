const mongoose=require("mongoose")

let userCollection="user";
let User=mongoose.model(userCollection,{
firstName:String,
lastName:String,
email:String,
})

module.exports=User;
