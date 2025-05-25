const mongoose=require("mongoose")
const {Schema}=mongoose

// define model schema for user


const userSchema=Schema({
   
    email:{type:String,
        required:true,
        unique:true
    },
  password:{type:String,
        required:true
    },
  


})
module.exports=mongoose.model('User', userSchema)