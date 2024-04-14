const MessageGroup = require('../../../model/messages/Conversation.model');

const sendMessageConversation = async (req, res) => {
  const conversationId = req.conversationID;
  const { messageId } = req;
  try {
    await MessageGroup.findOneAndUpdate(
      { _id: conversationId },
      { $push: { messages: messageId } },
      { new: true },
    );
    return res.status(200).send({ message: 'message send with success' });
  } catch (err) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = sendMessageConversation;
