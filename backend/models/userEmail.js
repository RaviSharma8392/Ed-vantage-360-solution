const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userEmailSchema=new Schema({
    userEmail:{
        required:true,
        type:String
    }
})
module.exports=mongoose.model('NewsLetterEmailModel',userEmailSchema)
 