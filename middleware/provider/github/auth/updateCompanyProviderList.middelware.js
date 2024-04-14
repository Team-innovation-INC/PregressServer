const Company = require('../../../../model/company/Company.model');

/**
 * Middleware function to update the company's provider list after successfully saving a provider.
 * This middleware updates the company document in the database by adding the newly created provider to the provider list.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {void} - No return value.
 */
exports.updateCompanyProviderList = async (req, res, next) => {
  const { providerId, accessToken, company } = req;
  try {
    /** Find the company document by ID and update the provider list */
    await Company.findByIdAndUpdate(
      company._id,
      {
        $push: {
          provider: {
            name: 'GitHub',
            providerId,
            token: accessToken,
          },
        },
      },
      { new: false },
    );
    /** Proceed to the next middleware */
    next();
  } catch (error) {
    /** If an error occurs, send a 400 Internal Server Error response */
    return res.status(400).send({
      message: "can't save provider company at your company information",
    });
  }
};
