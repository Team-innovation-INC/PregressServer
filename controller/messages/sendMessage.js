const MessageGroup = require('../../model/messages/Conversation');
const Conversation = require('../../model/messages/Conversation');

const addMessageToConversation = async (req, res) => {
    const user = req.user
    const messageId = req.messageId
    const userId = req.userId
    const conversationId = req.conversationID
    try {
    if (!conversationId) {
      const new_conversation = new Conversation({
        members : [
          user.id, userId
        ],
        messages : [
          messageId
        ],
        name : "newConversation" + userId + user.id
      })
      await new_conversation.save();
      return res.status(200).send("saved")
    }
    const updatedConversation = await MessageGroup.findOneAndUpdate(
      { _id: conversationId },
      { $push: { messages: messageId} },
      { new: true }
    );
    return res.send(updatedConversation)
  } catch (error) {
    console.error(error);
    return res.send("error")
  }
}

module.exports = addMessageToConversation;