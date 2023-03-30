const MailOptions = require("../../utility/nodeMailer/mailOptions")
const Transporter = require("../../utility/nodeMailer/transporter")
const { getHtmlFile } = require("../../utility/others")

exports.activeAccount = async (req, res) => {
  const {token, user} = req.token
  const active_link = `http://localhost:5000/api/client/activate-account?email=${user.email}&token=${token}`
  const html        = getHtmlFile(req.user, active_link, "ActiveAccount.hbs")
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