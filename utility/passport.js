// middleware/getUserDetails.js

const jwt = require('jsonwebtoken');
const User = require('../model/user/Users');

exports.getUserDetails = async (req, res, next) => {
  try {
    // Get the JWT token from the request header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Decode the JWT token to get the user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id;

    // Find the user in the database using the ID from the token
    const user = await User.findById(userId);

    // Attach the user object to the request object for use in later middleware functions
    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: 'Authentication failed' });
  }
};