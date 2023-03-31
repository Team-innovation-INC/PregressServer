const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login =  async (req, res) => {
  const {password} = req.body
  const user = req.user 
  const JWT_SECRET = process.env.JWT_SECRET
  try {
  // ---- Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
  // ---- Generate authentication token
    const token = jwt.sign({ _id: user._id }, JWT_SECRET);
    res.status(200).send({ user: {...user, password: undefined, "__v": undefined}, token, message:"Welcome back" });
  } catch (error) {
    return res.status(400).send({ msg: error });
  }
};

module.exports = login;
