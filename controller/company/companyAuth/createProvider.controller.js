/**
 * Middleware function to redirect to the specified URL after completing a successful operation.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {void} - No return value.
 */
const redirectToURL = (req, res) => {
    const redirectURL = process.env.REDIRECT_URL
  try {
    // Redirect to the specified URL
    res.redirect(redirectURL);
  } catch (error) {
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
}

module.exports = redirectToURL;