const MessageGroup = require("../../../model/messages/Conversation");

exports.existConversation = async (req, res, next) => {
    const user = req.user
    const userId = req.userId
    try {
      const existingConversation = await MessageGroup.findOne({
        members: { $all: [userId, user.id] }
      });
      if(existingConversation) {
        req.conversationID = existingConversation.id
      }
      else {
        req.conversationID = "newConversation" + userId + user.id
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: error.message });
    }
  };
