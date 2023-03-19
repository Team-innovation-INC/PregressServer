const User = require("../../../model/user/Users");

const userUpdate =  async (req, res) => {
  const { fullName, userName, gender, age, bio } = req.body;  
  console.log("fullName, userName, gender, age, bio ......", fullName, userName, gender, age, bio)
  console.log("req.user._id........", req.user)
  try {
      // Update the user's details in the database
      const user = await User.findByIdAndUpdate(
        req.user._id,
        {fullName : fullName || req.user.fullName , userName: userName || req.user.userName, gender: gender || req.user.gender, age: age || req.user.age, bio: bio || req.user.bio },
        
      );
      res.status(200).send({...user._doc, password : undefined, __v : undefined})
      // Return the updated user information
    } catch (error) {
     return res.status(400).send({ msg: error });
    }
  };

module.exports = userUpdate;
