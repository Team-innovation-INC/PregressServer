/*
 /  ----sign in user controller
/ */

// ----- import packages
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
// ----- import JWT SECRET CODE
const { JWT_SECRET, BASEURL } = process.env;
const login = async (req, res) => {
  // ----- get using information from request
  const { password } = req.body;
  const providerToken = req.token;
  const user = req.user;
  // ----- generate authentication JWT for user
  const token = jwt.sign({ _id: user._id }, JWT_SECRET);
  try {
    if (
      providerToken?.scope.includes('https://www.googleapis.com/auth/calendar')
    ) {
      return res.redirect(
        'http://localhost:3000/google/calendar?=token=' +
          providerToken.refresh_token,
      );
    }
    if (!providerToken) {
      // ----- validate password using bcrypt
      const isPasswordValid = await bcrypt.compare(
        password,
        user.password.password,
      );
      // ----- case password not much send failed response
      if (!isPasswordValid) {
        return res.status(400).send({ message: 'Invalid email or password' });
      }
      return res.status(200).send({
        user: { ...user, password: undefined, __v: undefined },
        token,
        message: 'Welcome back',
      });
    }
    // ----- response accepted for user
    res.redirect(`${BASEURL}gmail?token=${token}`);
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = login;
