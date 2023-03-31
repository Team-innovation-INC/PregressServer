const Transporter = require("../../utility/node-mailer/nodeMailer/transporter")
const MailOptions = require("../../utility/node-mailer/nodeMailer/mailOptions")
const { getHtmlFile } = require("../../utility/others")

exports.sendEmailActivation = async (req, res) => {

  const {token} = req.token
  const {email, userName, fullName} = req.body
  const userEmail = {email, userName, fullName}

  const active_link = `http://localhost:5000/api/auth/activate-account?token=${token}`
  const html        = getHtmlFile(userEmail, active_link, "ActiveAccount.hbs")
  const subject     = "Activate your account"
  const text        = "please click to this link to activate your account" + active_link
  const transporter = await Transporter()
  const mailOptions = await MailOptions(email, subject, text, html)

   try {
     await transporter.sendMail(mailOptions)
     return res.status(200).send("please check your email please and thanks")
   } catch (error) {
    console.log("error", error)
     return res.status(500).send('Internal server error');
   }
}