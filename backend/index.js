const  express = require('express')
const databseConnect=require('./config/database')
const adminRouter = require('./routes/adminRoute');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const cors = require('cors');
const contactRouter = require('./routes/contactRoute');


// import dotenv file
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

// middelware
app.use(express.json());
app.use(cookieParser()); // Enable cookie parser


// routes
app.use("/api",contactRouter)
app.use("/api/admin",adminRouter) 
app.use("/api",authRouter)



// connecting server and database

const serverStart=async()=>
    {try { await databseConnect()
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        
    } catch (error) {
        console.log("error find in conecting server"+error)
        
    }}

 serverStart()