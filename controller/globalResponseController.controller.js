/**
 * Global Response Controller
 * This controller function is responsible for formatting and sending global responses.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 */
const globalResponseController = (req, res) => {
  try {
    /**
     * @type {object} data - The data to be included in the response.
     * @type {number} status - The status code of the response.
     */
    const { data, status } = req;

    /* Determine if the response is successful based on the status code */
    const success = status >= 200 && status <= 299;

    /* Replace all "/" characters in the original URL with "." */
    const routeName = req.originalUrl.replace(/\//g, '.');

    /* Construct the message based on route name and success status */
    const message = `${routeName}.${success ? 'success' : 'failed'}`;

    /* Construct the response object */
    const response = { message, status, success };

    /* Include data in the response if it exists and the response is successful */
    if (success && data) response.data = data;
    /* Send the response */
    return res.status(status).json(response);
  } catch (error) {
    /* Handle errors */
    const message = 'Internal server error';
    const status = 500;
    const success = false;
    return res.status(status).json({ message, status, success });
  }
};

module.exports = globalResponseController;
