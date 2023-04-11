const User = require("../../../model/user/Users.model");

const updateEmail =  async (req, res) => {

  const { email } = req.body;
  const user = req.user;

  try {
    // Validate the email
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    // Update the user's email in the database
    await User.findByIdAndUpdate(
      user.id,
      { email },
      { new: true }
    )
    // Return the updated user information
    res.status(200).send({message: "well done you email change with success"});
    } catch (error) {
     return res.status(500).send({ msg: error });
    }
  };

module.exports = updateEmail;
