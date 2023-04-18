  /*
 /  ---- reset password html file  controller
/*/

// ----- import ejs to export variables to the html file
const ejs = require('ejs');

exports.resetPasswordFile = (req, res) => {
// ----- get using information from request
  const token = req.query.token
// ----- redirected to html page ( using token as variable)
  ejs.renderFile(__dirname + '/resetPassword.ejs', { token }, (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    } else {
      return res.status(200).send(data);
    }
  });
}