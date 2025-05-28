const express =require('express')
const { contactMessage } = require('../controllers/contactController')
const { newsLetterEmailHandler } = require('../controllers/newsLetterEmailController')

const contactRouter=express.Router()

 

// contact Router

contactRouter.post("/contact",contactMessage


)

contactRouter.post("/newsLetter",newsLetterEmailHandler)

module.exports=contactRouter