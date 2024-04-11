/**
 * Middleware to check if the user is an admin.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
exports.isAdmin = (req, res, next) => {
  /**
   * Assuming you have a way to determine if the user is an admin, e.g., checking a role property in the user object
   */
  if (req.user && req.user.role.roleName === 'admin') {
    /**
     * User is admin, proceed to the next middleware
     */
    next();
  } else {
    /**
     * User is not an admin, send 403 Forbidden status
     */
    res.status(403).send( {message : "not authorized to get manage the company providers"} );
  }
};