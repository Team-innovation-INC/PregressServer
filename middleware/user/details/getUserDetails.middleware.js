const User = require("../../../model/user/Users.model");
const userContact = require("../../../model/user/userContacts.model");

/**
 * Middleware to get userDetails by email.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
exports.getUserDetailsByEmail = async(req, res, next) => {
    try {
        const {email} = req
        const contact = await userContact.findOne({email})
        const user = await User.findOne({contact:contact._id})
        req.user = user
        next();
    } catch (error) {
        return res.status(500).send("error")
    }

};