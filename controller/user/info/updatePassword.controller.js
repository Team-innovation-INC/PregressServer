const bcrypt = require('bcryptjs');
const Password = require('../../../model/user/password.model');

const userPasswordUpdate = async (req, res) => {
  const { userPasswordId } = req;
  const { currentPassword, newPassword, confirmPassword } = req.body;
  const { hash, compare, genSalt } = bcrypt;
  try {
    const password = await Password.findById(userPasswordId);
    // Check if the old password matches the user's current password
    const isMatch = await compare(currentPassword, password.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'current password is invalid' });
    }
    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .send({ message: 'new and old password does not much' });
    }
    const salt = await genSalt(10);
    const hashedPassword = await hash(newPassword, salt);
    // Update the user's password in the database
    await Password.findByIdAndUpdate(
      userPasswordId,
      { password: hashedPassword },
      { new: true },
    );
    // Return the updated user information
    return res.status(200).send({ message: 'password update with success' });
  } catch (error) {
    return res.status(400).send({ msg: error });
  }
};

module.exports = userPasswordUpdate;
