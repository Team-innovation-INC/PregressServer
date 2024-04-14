const Message = require('../../model/messages/Message.model');

const getMyMessages = async (req, res) => {
  const { user } = req;
  try {
    await Message.find({ sender: user.id });
    // Find the user by ID
    return res.status(200).send('list of messages ');
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = getMyMessages;
