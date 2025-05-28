const NewsLetterEmailModel = require("../models/userEmail")

const newsLetterEmailHandler=async(req,res)=>{
    try { const {userEmail}=req.body
    const newNewsLetterEmailModel=new NewsLetterEmailModel({userEmail})
    await newNewsLetterEmailModel.save()
   
        
    } catch (error) {console.log(error)
        
    }
    

    

}
const getNewsLetterEmail=async(req,res)=>{
    try {
        // this sort methods is user for descending order data and -1is used for resent data
            const newsLetterEMails = await NewsLetterEmailModel.find().sort({ createdAt: -1 });
        res.status(200).json({message:"data fetched succesfully",emails:newsLetterEMails})
        
    } catch (error) {
        res.status(400).json({Error:error})
    }

}
module.exports={newsLetterEmailHandler,getNewsLetterEmail}