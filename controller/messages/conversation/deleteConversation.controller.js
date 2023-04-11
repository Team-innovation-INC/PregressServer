const MessageGroup = require("../../../model/messages/Conversation.model");

const deleteConversation =  async (req, res) => {
  const {conversationId} = req.params
  try {
    const response = await MessageGroup.remove({_id: conversationId})
    if(response){
      return res.send('your conversation has been deleted');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
  };

module.exports = deleteConversation;