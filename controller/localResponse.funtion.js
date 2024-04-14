/**
 * Creates a response object with message, data, status, and success properties and sends it as a JSON response.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {any} data - The data to include in the response.
 * @param {number} status - The status code of the response.
 */
function createResponseObject(req, res, data, status) {
  // Determine if the response is successful based on the status code
  const success = status >= 200 && status <= 299;

  // Replace all "/" characters in the original URL of the request with "."
  const routeName = req.originalUrl.replace(/\//g, '.');

  // Construct the message based on route name and success status
  const message = `${routeName}.${success ? 'success' : 'failed'}`;

  // Construct the response object
  // Send the response as JSON
  return {
    message,
    data,
    status,
    success,
  };
}

module.exports = createResponseObject;
