const { Types } = require('mongoose');
const Provider = require('../../../../model/provider/provider.model');

/**
 * Middleware function to create and save a new provider instance in the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<void>} - Promise indicating the completion of the middleware.
 */
exports.createProvider = async (req, res, next) => {
  const { clientId, accessToken, user } = req;
  try {
    /** Create a new provider instance */
    const provider = new Provider({
      name: 'GitHub',
      providerId: clientId,
      token: accessToken,
      category: 'PVC',
      company: user.company._id,
      type: 'GitHub',
      admin: new Types.ObjectId(user._id),
    });
    /** Save the provider instance to the database */
    await provider.save();
    req.providerId = provider._id;
    /** Proceed to the next middleware */
    next();
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send({
        message: `${Object.keys(error.keyPattern)[0]}.key.exist`,
        status: 400,
        success: false,
      });
    }
    /** Handle errors and send a 500 Internal Server Error response */
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};
