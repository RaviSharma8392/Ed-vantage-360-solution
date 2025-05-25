const express = require("express");
const Contact = require("../models/contactModel");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const varifyAdmin = require("../middelware/authMiddleware");
const { getAllContacts } = require("../controllers/contactController");

const adminRouter = express.Router();

  adminRouter.get("/contact",varifyAdmin,getAllContacts)

module.exports = adminRouter;
