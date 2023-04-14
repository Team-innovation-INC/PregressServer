  /*
 /  ---- reset password using email controller
/*/

// ----- import Transporter to set the sender mailer information
const Transporter = require("../../../utility/node-mailer/nodeMailer/transporter")
// ----- import MailOptions to set the email information
const MailOptions = require("../../../utility/node-mailer/nodeMailer/mailOptions")
// ----- import getHtmlFile to get variables needs to put for the html mail
const { getHtmlFile } = require("../../../utility/others")

// ----- import based deployed sever url
const basedUrl = process.env.BasedUrl

const resetPassword =  async (req, res) => {
// ----- get using information from request
  const {token} = req.token
  const {email, userName, fullName} = req.userContact
// ----- collect email variable information
  const userEmail = {email, userName, fullName}
// ----- create activate link for reset password account
  const active_link = `http://${basedUrl}/api/auth/reset-password?token=${token}`
// ----- create html file for reset password account
  const html    = getHtmlFile(userEmail, active_link, "resetPassword.hbs")
// ----- create information related to user email
  const subject = "reset password account"
  const text    = "please click to this link to reset your password account" + active_link

// ----- create instances email sender and options
  const transporter = await Transporter()
  const mailOptions = await MailOptions(email, subject, text, html)
  try {
// ----- send email
    await transporter.sendMail(mailOptions)
// ----- response validate for email sent
    return res.status(200).send({message: "please check your email please and thanks"})
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = resetPassword;
