const express = require("express");
const Contact = require("../models/contactModel");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const varifyAdmin = require("../middelware/authMiddleware");
const { getAllContacts } = require("../controllers/contactController");
const { getNewsLetterEmail } = require("../controllers/newsLetterEmailController");

const adminRouter = express.Router();

  adminRouter.get("/contact",varifyAdmin,getAllContacts)

  adminRouter.get("/newsLetter",varifyAdmin, getNewsLetterEmail)

module.exports = adminRouter;
