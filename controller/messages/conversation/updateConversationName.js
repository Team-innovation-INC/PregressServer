const MessageGroup = require("../../../model/messages/Conversation");

const updateConversationName =  async (req, res) => {
    const name = req.newName
    const id = req.conversationId
  try {
    const currentConversation = await MessageGroup.findByIdAndUpdate(
       id, 
      { name },
      { new: true }
    )
    return res.send('your conversation name is update with all success');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
  };

module.exports = updateConversationName;