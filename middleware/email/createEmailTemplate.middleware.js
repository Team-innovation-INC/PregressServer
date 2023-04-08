const Email = require("../../model/email/Email.model")
const User = require('../../model/user/Users.model')
const MailOptions = require("../../utility/nodeMailer/mailOptions")

exports.createEmailTemplate = async (req, res, next) => {
  const from =  req.user.id
  const userEmail = req.user.email
  try {

              // -------- email data base
// collect data
    const collectEmail =  {...req.message, from}
// create new email model for data base
    const newEmail =  new Email(collectEmail)
// mail options passed at the request 
    req.newEmail = newEmail

              // -------- email node mailer 
// collect data 
    const resept = await User.findById(collectEmail.to)
    const to      = resept.email
    const subject = userEmail + " send you this message " + collectEmail.title
    const text    =  collectEmail.body
    const newmailOptions = await MailOptions(to, subject, text)
// mail options passed at the request 
    req.mailOptions = newmailOptions
// pass 
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
  }