
const MessageGroup = require("../../../model/messages/Conversation.model");

exports.conversationOwner = async (req, res, next) => {
    const user = req.user
    try {
      const existingConversation = await MessageGroup.findOne({
        members: { $all: [user.id] }
      });
      if(existingConversation) {
        req.conversationID = existingConversation.id
        next();
      } else {
        res.status(403).send("this conversation is not belongs to you")
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: error.message });
    }
  };
