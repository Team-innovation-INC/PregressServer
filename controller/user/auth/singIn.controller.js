  /*
 /  ----sign in user controller
/*/

// ----- import packages
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config()
// ----- import JWT SECRET CODE
const JWT_SECRET = process.env.JWT_SECRET

const login =  async (req, res) => {
// ----- get using information from request
  const {password} = req.body
  const user = req.user 
  try {
// ----- validate password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password.password);
// ----- case password not much send failed response
    if (!isPasswordValid) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }
// ----- generate authentication JWT for user 
    const token = jwt.sign({ _id: user._id }, JWT_SECRET);
// ----- response accepted for user
    res.status(200).send({ user: {...user, password: undefined, "__v": undefined}, token, message:"Welcome back" });
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = login;