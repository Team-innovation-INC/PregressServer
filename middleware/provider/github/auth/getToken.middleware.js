const axios = require("axios");

/**
 * Middleware function to exchange the GitHub authorization code for an access token.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Promise<void>} - Promise indicating the completion of the middleware.
 */
exports.getAccessGithub = async (req, res, next) => {
  /** Destructure clientId, clientSecret, and code from the request object */
  const { clientId, clientSecret, code } = req;
  try {
    /** Send a POST request to exchange the authorization code for an access token */
    const response = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      },
      {
        headers: {
        "Accept": "application/json"
        }
      }
    );
    /** Store the access token in the request object */
    req.accessToken = response.data.access_token;
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${response.data.access_token}`
      }
    });
  
    const userData = userResponse.data;
    req.email = userData.email
    /** Proceed to the next middleware */
    next();
  } catch (error) {
    /** If an error occurs, send a 403 Forbidden response */
    return res.status(403).send({ message: "Not authorized to get access. Please validate and try again." });
  }
}
