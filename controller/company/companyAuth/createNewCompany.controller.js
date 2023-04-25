const sendLinkToUser =  async (req, res) => {
    const {token, email} = req
  try {
// -------- response send for success
    return res.status(200).send({message: "please activate your account ", token, email, validate: false})
    } catch (error) {
      return res.status(500).send('Internal server error');
    }
  };

module.exports = sendLinkToUser;