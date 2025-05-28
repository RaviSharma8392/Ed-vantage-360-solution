const ContactModel=require("../models/contactModel")

// it's for saving contact data
 const contactMessage=async(req,res)=>{
    try {    const {firstName,lastName,email,mobile,service, message}=req.body
    if(!email||!message||!mobile){ return res.status(500)
        res.json({error:"Email,Mobile and Message are required"})

    }
    const NewContactData= new ContactModel({firstName,lastName,email,mobile,service, message})
    console.log(NewContactData)
    await NewContactData.save()
    res.status(201)
    // 201 code is used for creating data
    res.json({message:"Message sent successfully"})

        
    } catch (error) {
res.status(500) .json({error:error})       
        
    }
 

}

// this function is getAllContaactData
 const getAllContacts=async (req,res) => {
    try {
        // this sort methods is user for descending order data and -1is used for resent data
    const contacts = await ContactModel.find().sort({ createdAt: -1 });
        res.status(200).json({contacts:contacts})
        
    } catch (error) {
        res.status(500).json(error)
        
    }

    
}

module.exports={getAllContacts,contactMessage}