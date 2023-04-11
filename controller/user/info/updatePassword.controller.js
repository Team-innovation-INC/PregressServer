const bcrypt = require("bcryptjs")

const updatePassword =  async (req, res) => {
  const user = req.user;
  const {oldPassword, newPassword} = req.body;
    try {
      // Check if the old password matches the user's current password
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(400).send({ error: 'Invalid old password' });
      }
      // Update the user's password in the database
      user.password = newPassword;
      await user.save();
      // Return the updated user information
      return res.status(200).send({message: "well done you password changes with success"});
    } catch (error) {
     return res.status(400).send({ msg: error });
    }
};

module.exports = updatePassword;