/**
 * Middleware function to collect environment data required for GitHub authentication.
 * This includes retrieving the client ID, client secret, and code from the request query.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {void} - No return value.
 */
exports.collectEnvironmentData = async (req, res, next) => {
  try {
    /** Store the access token in the request object */
    req.clientId = process.env.GITHUB_CLIENT_ID;
    req.clientSecret = process.env.GITHUB_CLIENT_SECRET;
    req.code = req.query.code;
    /** Proceed to the next middleware */
    next();
  } catch (error) {
    /** If an error occurs, send a 403 Forbidden response */
    return res.status(403).send({ message: "Not authorized to get access. Please validate and try again." });
  }
}