const express = require('express');
const databseConnect = require('./config/database');
const adminRouter = require('./routes/adminRoute');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const cors = require('cors');
const contactRouter = require('./routes/contactRoute');
const eventRouter = require('./routes/evntRoute');
const uploadRouter = require("./routes/upload");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const FRONTEND_URL =" https://edvantage360solution.netlify.app"|| "http://localhost:5173";

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", contactRouter);
app.use("/api/admin", adminRouter);
app.use("/api", authRouter);
app.use("/api/event", eventRouter);
app.use("/api/upload", uploadRouter);


// Connect DB + start server
const serverStart = async () => {
  try {
    await databseConnect();
    app.listen(port, () => 
      console.log(`🚀 Server running on http://localhost:${port}`)
    );
  } catch (error) {
    console.log("❌ Error connecting server:", error);
  }
};

serverStart();
