const MessageGroup = require('../../../model/messages/Conversation.model');

const updateConversationName = async (req, res) => {
  const name = req.conversationId;
  const { conversationName } = req.body;
  try {
    const currentConversation = await MessageGroup.findByIdAndUpdate(
      conversationName,
      { name },
      { new: true },
    );
    if (currentConversation) {
      return res
        .status(200)
        .send('your conversation name is update with all success');
    }
    return res
      .status(400)
      .send("somthing wrong sorry can't update conversation name");
  } catch (err) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = updateConversationName;
