const MessageGroup = require("../../../model/messages/Conversation");

const sendMessageConversation =  async (req, res) => {
  const conversationId = req.conversationID
  const messageId = req.messageId
  try {
    console.log("conversationId", conversationId)
    console.log("messageId", messageId)

     await MessageGroup.findOneAndUpdate(
        { _id: conversationId },
        { $push: { messages: messageId} },
        { new: true }
      );

    return res.status(200).send({message: "message send with success"});
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
  };

module.exports = sendMessageConversation;