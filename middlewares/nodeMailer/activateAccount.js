const MailOptions = require("../../utility/nodeMailer/mailOptions")
const Transporter = require("../../utility/nodeMailer/transporter")
const { loadpath } = require("../../utility/others")

exports.activeAccount = async (req, res) => {
  const {token, email} = req.token
  const active_link = `http://localhost:5000/api/client/active?email=${email}&token=${token}`
  const html = loadpath(req.user, active_link)
  const subject = "Activate your account"
  const text = "please click to this link to acctivate your account" + active_link
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