const User = require("../../../model/user/Users");

const userUpdate =  async (req, res) => {
  const { fullName, userName, gender, age, bio } = req.body; 
  const User = req.user
  try {
      // Update the user's details in the database
      const user = await User.findByIdAndUpdate(
        user._id,
        {
          fullName : fullName || User.fullName ,
          userName: userName || User.userName,
          gender: gender || User.gender,
          age: age || User.age, 
          bio: bio || User.bio 
        },
      );
      res.status(200).send({...user._doc, password : undefined, __v : undefined})
      // Return the updated user information
    } catch (error) {
     return res.status(400).send({ msg: error });
    }
  };

module.exports = userUpdate;
