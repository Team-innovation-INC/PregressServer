const MessageGroup = require("../../../model/messages/Conversation");

exports.existConversation = async (req, res, next) => {
    const user = req.user
    const userId = req.userId
    const {conversationName} = req.body
    try {
      const existingConversation = await MessageGroup.findOne({
        members: { $all: [userId, user.id] }
      });

      if(existingConversation) {
        return res.status(400).send("conversation already exist please send a new message")
      }
      else {
        if (conversationName) {
          req.conversationID = conversationName

        } else {
          req.conversationID = "newConversation"
        }
        next();
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: error.message });
    }
  };
