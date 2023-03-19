
const userDetails =  async (req, res) => {
    try {
      console.log("user.........", req.user)
      const userDetails = req.user
      if (!userDetails) {
        return res.status(400).send("please try to log in again")
      }
      return res.status(200).send({
        ...userDetails._doc, password: undefined, "__v":undefined
      })
    } catch (error) {
     return res.status(400).send({ msg: error });
    }
  };

module.exports = userDetails;
