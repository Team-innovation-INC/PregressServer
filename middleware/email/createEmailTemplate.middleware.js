  /*
 /  ---- create email template middleware
/*/

// ----- import model
const Email = require("../../model/email/Email.model")
const User  = require("../../model/user/Users.model" )
// ----- import mail function options
const MailOptions = require("../../utility/nodeMailer/mailOptions")

exports.createEmailTemplate = async (req, res, next) => {
// ----- get using information from request
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
    const user = await User.findById(collectEmail.to)
    const to      = user.email
    const subject = userEmail + " send you this message " + collectEmail.title
    const text    =  collectEmail.body
    const mailOptions = await MailOptions(to, subject, text)
// mail options passed at the request 
    req.mailOptions = mailOptions
// pass 
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
  }