const mongoose=require("mongoose")

let mailCollection="mail";
let mail=mongoose.model(userCollection,{
Title:String,
Content:String,

})

module.exports=mail;
