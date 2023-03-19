const User = require("../../../model/user/Users");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login =  async (req, res) => {
  const { email, password } = req.body;
  const JWT_SECRET = process.env.JWT_SECRET
  try {
  // Check if user with the email exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  // Generate authentication token
  const token = jwt.sign({ _id: user._id }, JWT_SECRET);

  res.json({ user: {...user._doc, password: undefined, "__v": undefined}, token, message:"Welcome back" });
    } catch (error) {
     return res.status(400).send({ msg: error });
    }
  };

module.exports = login;
