const userContact = require("../../../model/user/userContacts.model");

/**
 * Middleware to check if a given username exists in the database.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express next middleware function.
 */
const checkUserNameExist = async (req, res, next) => {
  try {
    const { userName } = req.params; // Use the 'userName' from the URL parameter
    const exist = await userContact.findOne({ userName }); // Check if the username exists

    // Set the status and response data
    req.status = 200; // HTTP status code for a successful response
    req.data = { exist: Boolean(exist) }; // True if the username exists, False otherwise
    
    next(); // Move to the next middleware or controller
  } catch (error) {
    console.error("Error checking if username exists:", error);
    return res.status(500).json({ error: "Internal server error" }); // Handle potential errors
  }
};

module.exports = checkUserNameExist;
