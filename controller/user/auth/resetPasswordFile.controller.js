/*
 * ---- reset password html file controller
 */

// Import the path module
const path = require('path');
// Import ejs to export variables to the html file
const ejs = require('ejs');

exports.resetPasswordFile = (req, res) => {
  // Get using information from request
  const { token } = req.query;
  // Redirected to html page (using token as variable)
  ejs.renderFile(
    path.join(__dirname, 'resetPassword.ejs'),
    { token },
    (err, data) => {
      if (err) {
        return res.status(500).send('Internal Server Error');
      }
      return res.status(200).send(data);
    },
  );
};
