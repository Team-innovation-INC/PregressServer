const { Types } = require("mongoose");
const Provider = require("../../../../model/provider/provider.model");

/**
 * Middleware function to create and save a new provider instance in the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<void>} - Promise indicating the completion of the middleware.
 */
exports.createProvider = async (req, res, next) => {
  const {clientId, accessToken, user} = req
  try {
    /** Create a new provider instance */
    const provider = new Provider({
      name: 'GitHub',
      providerId: clientId,
      token: accessToken,
      admin: user?._id ? new Types.ObjectId(user._id) : new Types.ObjectId("6608a7c21ad5f61d00ddb5a9")
    });
    /** Save the provider instance to the database */
    await provider.save();
    req.providerId = provider._id
    /** Proceed to the next middleware */
    next();
  } catch (error) {
    console.log(error, "error")
    /** Handle errors and send a 500 Internal Server Error response */
    return res.status(500).send({ message: "Internal Server Error" });
  }
}
