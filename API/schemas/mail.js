const mongoose=require("mongoose")
let mailCollection="mail";
let mail=mongoose.model(mailCollection,{
subject:String,
content:String,
userID:mongoose.Types.ObjectId

})

module.exports=mail;
