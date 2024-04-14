const express = require('express');
const deleteConversation = require('../../controller/messages/conversation/deleteConversation.controller');
const getMyConversations = require('../../controller/messages/conversation/getMyConversations.controller');
const sendMessageConversation = require('../../controller/messages/conversation/sendMessage.controller');
const updateConversationName = require('../../controller/messages/conversation/updateConversationName.controller');
const getMyMessages = require('../../controller/messages/getMessages.controller');
const addMessageToConversation = require('../../controller/messages/sendMessage.controller');
const { checkUserExist } = require('../../middleware/CheckUserExist');
const {
  conversationOwner,
} = require('../../middleware/messages/conversation/conversationOwner');
const {
  existConversation,
} = require('../../middleware/messages/conversation/existConversation');
const { CreateMessage } = require('../../middleware/messages/createMessage');

const router = express.Router();
const { getUserDetails } = require('../../utility/passport.middleware');

// test route client
router.get('/test', (req, res) => {
  res.status(200).send('test messages router page');
});

// ------ conversation ------ //

// get conversations list
router.get('/conversation', getUserDetails, getMyConversations);

// create a new  conversation
router.post(
  '/conversation',
  getUserDetails,
  checkUserExist,
  existConversation,
  addMessageToConversation,
);

// add message to a conversation
router.post(
  '/conversation/newMessage',
  getUserDetails,
  checkUserExist,
  existConversation,
  CreateMessage,
  sendMessageConversation,
);

// update conersation name
router.put(
  '/conversation/:conversationName',
  getUserDetails,
  existConversation,
  updateConversationName,
);

// delete a conversation
router.delete(
  '/conversation/:conversationId',
  getUserDetails,
  existConversation,
  conversationOwner,
  deleteConversation,
);

// ------ messages ------ //
// get all messages list
router.get('/messages', getUserDetails, getMyMessages);

const route = '/message/:messageId';
const errorServer = 'Internal server error';
// get a messages
router.get(route, getUserDetails, async (req, res) => {
  const { messageId } = req.params;
  try {
    res.status(200).send(`get message ${messageId}`);
  } catch (error) {
    return res.status(500).send(errorServer);
  }
});
// delete a message
router.delete(route, getUserDetails, async (req, res) => {
  const { messageId } = req.params;
  try {
    res.status(200).send(`delete message ${messageId}`);
  } catch (error) {
    return res.status(500).send(errorServer);
  }
});
// update a message
router.put(route, getUserDetails, async (req, res) => {
  const { messageId } = req.params;
  try {
    res.status(200).send(`update message ${messageId}`);
  } catch (error) {
    return res.status(500).send(errorServer);
  }
});

module.exports = router;
