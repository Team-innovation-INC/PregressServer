const MessageGroup = require('../../../model/messages/Conversation.model');

const getMyConversations = async (req, res) => {
  const { user } = req;
  try {
    const myConversation = await MessageGroup.find({ members: user.id })
      .select('-_id -__v')
      .populate({
        path: 'members',
        select: 'userName -_id', // Exclude sensitive fields from the populated result
      })
      .populate({
        path: 'messages',
        select: '-_id -__v -sender',
      });
    return res.send(`your conversation list have  ${myConversation}`);
  } catch (err) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = getMyConversations;
