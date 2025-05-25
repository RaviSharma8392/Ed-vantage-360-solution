const express =require('express')
const { contactMessage } = require('../controllers/contactController')

const contactRouter=express.Router()

 

// contact Router

contactRouter.post("/contact",contactMessage


)

module.exports=contactRouter