const Message = require("../../model/messages/Message")

const getMyMessages =  async (req, res) => {
  const user = req.user
  try {
    const mesaages = await Message.find({ sender: user.id })
    // Find the user by ID
    return res.status(200).send('list of messages ');
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
  };

module.exports = getMyMessages;