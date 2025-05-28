const mongoose=require("mongoose")
const {Schema}=mongoose

// define model schema for contact


const contactSchema=Schema({
    firstName:{type:String,
        required:true
    },
     lastName:{type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }  , 
      email:{type:String,
        required:true
    },
    service:{type:String,
        required:true
    },

    message:{type:String,
        required:true
    },
 
},{ timestamps: true
})
module.exports=mongoose.model('ContactModel', contactSchema)