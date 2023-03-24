const express = require('express');
const getMyConversations = require('../controller/messages/conversation/getMyConversations');
const sendMessageConversation = require('../controller/messages/conversation/sendMessage');
const getMyMessages = require('../controller/messages/getMessages');
const addMessageToConversation = require('../controller/messages/sendMessage');
const { checkUserExist } = require('../middlewares/CheckUserExist');
const { existConversation } = require('../middlewares/messages/conversation/existConversation');
const { CreateMessage } = require('../middlewares/messages/createMessage');
const router = express.Router();
const {getUserDetails} = require("../utility/passport")


// test route client
router.get("/test", (req, res) => {
  res.status(200).send("test messages router page");
});

// create conversation
router.post("/conversation", getUserDetails, checkUserExist, existConversation, CreateMessage,  addMessageToConversation);

// add message to a conversation
router.post("/conversation/newMessage",getUserDetails, checkUserExist, existConversation, CreateMessage,  sendMessageConversation)
// get messages list 
router.get("/messages", getUserDetails, getMyMessages);

// get conversation list 
router.get("/myConversation", getUserDetails, getMyConversations);

module.exports = router;