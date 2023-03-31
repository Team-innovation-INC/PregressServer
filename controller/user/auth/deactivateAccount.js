const User = require("../../../model/user/Users");

const desactivateAccount =  async (req, res) => {
  const user = req.user
  try {
    // Find the user by ID
    const existUser = await User.findOne({ _id: user.id })
    if (!existUser) {
      return res.status(404).send('User not found');
    }
    const result = await User.deleteOne({ _id: user.id });
    if (result.deletedCount === 0) {
      return res.status(404).send('User not found');
    }
    return res.send('Account deleted successfully');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
  };

module.exports = desactivateAccount;