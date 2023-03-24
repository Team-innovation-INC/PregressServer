const MessageGroup = require("../../../model/messages/Conversation");

const getMyConversations =  async (req, res) => {
  const user = req.user
  try {
    const my_conversation = await MessageGroup.find({ members: user.id }).select('-_id -__v').populate({
        path: 'members',
        select: 'userName -_id', // Exclude sensitive fields from the populated result
      })
      .populate({
        path: 'messages',
        select: '-_id -__v -sender',
      });
    return res.send(`your conversation list have  ${my_conversation}`);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
  };

module.exports = getMyConversations;