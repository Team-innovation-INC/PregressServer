const Provider = require('../../../model/provider/provider.model');

// Function to find provider information by ID
async function findProviderInfoById(providerId) {
  try {
    // Use aggregation to project specific fields
    const providerInfo = await Provider.aggregate([
      { $match: { _id: providerId } }, // Match the provider by ID
      {
        $project: {
          _id: 1, // Include the _id field
          name: 1, // Include the name field
          type: 1, // Include the type field
          providerId: 1, // Include the providerId field
          category: 1,
        },
      },
    ]);
    // If providerInfo is not empty, return the first element (provider document)
    if (providerInfo.length > 0) {
      return providerInfo[0];
    }
    return null; // Provider with the specified ID not found
  } catch (error) {
    console.error(`Error finding provider with ID ${providerId}:`, error);
    return null;
  }
}

/**
 * Middleware function to exchange the GitHub authorization code for an access token.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<void>} - Promise indicating the completion of the middleware.
 */
exports.findProviderList = async (req, res, next) => {
  /** Destructure user details */
  const { company } = req;
  try {
    /** Send a POST request to exchange the authorization code for an access token */
    /** Proceed to the next middleware */
    const providerIds = company.provider;
    // Map over the provider IDs and find provider information for each ID
    const providerInfoPromises = providerIds.map(provider =>
      findProviderInfoById(provider.providerId),
    );
    // Execute all queries concurrently
    const providerInfoResults = await Promise.all(providerInfoPromises);
    // Filter out any null values (errors occurred during query)
    const validProviderInfo = providerInfoResults.filter(
      provider => provider !== null,
    );
    req.providers = validProviderInfo;
    next();
  } catch (error) {
    /** If an error occurs, send a 403 Forbidden response */
    return res.status(403).send({
      message: 'Not authorized to get access. Please validate and try again.',
    });
  }
};
