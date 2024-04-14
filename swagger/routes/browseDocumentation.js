// ----- use dotenv for resolve variables
const dotenv = require('dotenv');

dotenv.config();

// ----- get variables
const { SWAGGERUSER } = process.env;
const { SWAGGERPASSWORD } = process.env;

exports.swaggerUI = (req, res) => {
  // #swagger.security = []
  const { username, password } = req.body;
  if (username !== SWAGGERUSER || password !== SWAGGERPASSWORD) {
    return res.redirect('/swagger/auth');
  }
  return res.redirect(`/swagger/api/${username}-${password}`);
};
