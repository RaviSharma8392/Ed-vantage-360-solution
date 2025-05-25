const mongoose=require('mongoose')
require('dotenv').config();
const URI=process.env.URI


const databseConnect=async()=>{

    try {
        await mongoose.connect(URI)
        console.log("databae connect succesfully")
    } catch (error) {
        console.log("some error"+error)
        
    }
}
module.exports=databseConnect