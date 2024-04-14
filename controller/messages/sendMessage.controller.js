const Conversation = require('../../model/messages/Conversation.model');

const addMessageToConversation = async (req, res) => {
  const { user } = req;
  const { userId } = req;
  const conversationId = req.conversationID;
  try {
    const newConversation = new Conversation({
      members: [user.id, userId],
      name: conversationId,
    });
    await newConversation.save();
    return res.status(200).send('saved');
  } catch (error) {
    return res.send('error');
  }
};

module.exports = addMessageToConversation;
