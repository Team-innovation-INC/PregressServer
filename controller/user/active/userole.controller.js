
const userRole =  async (req, res) => {
    try {
      const userDetails = req.user
      if (!userDetails) {
        return res.status(400).send("please try to log in again")
      }
      return res.status(200).send(userDetails.role.roleName)
    } catch (error) {
     return res.status(400).send({ msg: error });
    }
  };
module.exports = userRole;
