const Message = require("../../model/messages/Message.model");

exports.CreateMessage = async (req, res, next) => {
    const user = req.user
    const {text} = req.body
    try {
      if (!text) {
        return  res.status(400).send("message is empty")
      }
      const message = new Message({
        text,
        sender : user.id
      })
      message.save();
      req.messageId =  message.id
      next();
    } catch (error) {
      return res.status(500).send('Internal server error');
    }
  };