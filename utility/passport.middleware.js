// middleware/getUserDetails.js

const jwt = require('jsonwebtoken');
const User = require('../model/user/Users.model');

const dotenv = require("dotenv")
dotenv.config()
// ----- import JWT SECRET CODE
const JWT_SECRET = process.env.JWT_SECRET

exports.getUserDetails = async (req, res, next) => {
// ----- Get the JWT token from the request header
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    // Decode the JWT token to get the user ID
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded._id;
    // Find the user in the database using the ID from the token
    const user = await User.findById(userId).populate(['password', 'contact', 'role', 'info', 'company']);
    if (!user) {
      return res.status(403).send({message: "please sign in again"})
    }
    // Attach the user object to the request object for use in later middleware functions
    req.user = user;
    next();
  } catch (error) {
    console.log(error, "error")
    if (error.message ==="invalid signature" || error.message === "jwt malformed") {
      return res.status(401).send({message: "invalid token please sign in again"})
    }
    return res.status(500).send('Internal server error');
  }
};