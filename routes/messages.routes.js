const express = require('express');
const deleteConversation = require('../controller/messages/conversation/deleteConversation');
const getMyConversations = require('../controller/messages/conversation/getMyConversations');
const sendMessageConversation = require('../controller/messages/conversation/sendMessage');
const updateConversationName = require('../controller/messages/conversation/updateConversationName');
const getMyMessages = require('../controller/messages/getMessages');
const addMessageToConversation = require('../controller/messages/sendMessage');
const { checkUserExist } = require('../middlewares/CheckUserExist');
const { conversationOwner } = require('../middlewares/messages/conversation/conversationOwner');
const { existConversation } = require('../middlewares/messages/conversation/existConversation');
const { CreateMessage } = require('../middlewares/messages/createMessage');
const router = express.Router();
const {getUserDetails} = require("../utility/passport")


// test route client
router.get("/test", (req, res) => {
  res.status(200).send("test messages router page");
});

// ------ conversation ------ //

// get conversations list 
router.get("/conversation", getUserDetails, getMyConversations);

// create a new  conversation
router.post("/conversation", getUserDetails, checkUserExist, existConversation, addMessageToConversation);

// add message to a conversation
router.post("/conversation/newMessage",getUserDetails, checkUserExist, existConversation, CreateMessage,  sendMessageConversation)

// update conersation name 
router.put("/conversation/:conversationName", getUserDetails, existConversation, updateConversationName)

// delete a conversation
router.delete("/conversation/:conversationId", getUserDetails, existConversation, conversationOwner, deleteConversation)

// ------ messages ------ //
// get all messages list 
router.get("/messages", getUserDetails, getMyMessages);

// get a messages
router.get("/message/:messageId", getUserDetails, async(req, res) =>{
  const {messageId} = req.params
  try {
    res.status(200).send(`get message ${messageId}`)
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
})
// delete a message
router.delete("/message/:messageId", getUserDetails, async(req, res) =>{
  const {messageId} = req.params
  try {
    res.status(200).send(`delete message ${messageId}`)
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
})
// update a message
router.put("/message/:messageId", getUserDetails, async(req, res) =>{
  const {messageId} = req.params
  try {
    res.status(200).send(`update message ${messageId}`)
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
})


module.exports = router;