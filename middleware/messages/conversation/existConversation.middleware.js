const MessageGroup = require('../../../model/messages/Conversation.model');

exports.existConversation = async (req, res, next) => {
  const { user } = req;
  const { userId } = req;
  const { conversationName } = req.body;
  try {
    const existingConversation = await MessageGroup.findOne({
      members: { $all: [userId, user.id] },
    });

    if (existingConversation) {
      return res
        .status(400)
        .send('conversation already exist please send a new message');
    }

    if (conversationName) {
      req.conversationID = conversationName;
    } else {
      req.conversationID = 'newConversation';
    }
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
