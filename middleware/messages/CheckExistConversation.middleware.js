// middleware check user exist
const MessageGroup = require('../../model/messages/Conversation.model');

exports.checkConversationExist = async (req, res, next) => {
  try {
    const existConversation = await MessageGroup.findOne({
      members: { $in: [req.userId] },
    });
    if (existConversation) {
      return res.status(400).send('conversation exist ');
    }
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

exports.checkNotExist = async (req, res, next) => {
  const oldName = req.name;
  try {
    const existConversation = await MessageGroup.findOne({ name: oldName });
    if (existConversation === null) {
      return res.status(400).send('conversation dont exist ');
    }
    req.conversationId = existConversation.id;
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
