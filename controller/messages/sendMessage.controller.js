const MessageGroup = require('../../model/messages/Conversation.model');
const Conversation = require('../../model/messages/Conversation.model');

const addMessageToConversation = async (req, res) => {
    const user = req.user
    const userId = req.userId
    const conversationId = req.conversationID
    try {
      const new_conversation = new Conversation({
        members : [
          user.id, userId
        ],
        name : conversationId
      })
      await new_conversation.save();
      return res.status(200).send("saved")
  } catch (error) {
    return res.send("error")
  }
}

module.exports = addMessageToConversation;