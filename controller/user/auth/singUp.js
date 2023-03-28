const User = require("../../../model/user/Users");

const register = async (req, res) => {
  const { email, password, userName, fullName } = req.body;
  const role =  req.role.id
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: 'Email already exists' });
    }
    const user = new User({ email, password, userName, fullName, role  });
    await user.save();
    const token = user.generateAuthToken();
    const message = "account create with all success"
    res.status(201).send({ user, token, message });
  } catch (error) {
    if (error.code === 11000) {
      const errmsg = error.errmsg;
      const indexName = errmsg.substring(errmsg.lastIndexOf('index: ') + 7, errmsg.lastIndexOf('_1'));
      return res.status(400).send(`The ${indexName} is already exist`);      return res.status(400).send({ error: `${duplicated_keys}` });
    }
    res.status(500).send({ error: error.message });
  }
};

module.exports = register;
