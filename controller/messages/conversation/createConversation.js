const MessageGroup = require("../../../model/messages/Conversation");

const createConversation =  async (req, res) => {
  const user = req.user
  const userId = req.userId
  const name = req.body.name
  try {
    const createConversation = new MessageGroup({
        members : [user.id, userId],
        name: name || `${user.id}-${userId}`
    })
    await createConversation.save()

    return res.send('your conversation is created with all success');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
  };

module.exports = createConversation;