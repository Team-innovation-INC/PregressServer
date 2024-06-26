const MessageGroup = require('../../../model/messages/Conversation.model');

const createConversation = async (req, res) => {
  const { user } = req;
  const { userId } = req;
  const { name } = req.body;
  try {
    const createConversation = new MessageGroup({
      members: [user.id, userId],
      name: name || `${user.id}-${userId}`,
    });
    await createConversation.save();

    return res.send('your conversation is created with all success');
  } catch (err) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = createConversation;
