const MailOptions = require("../../../utility/nodeMailer/mailOptions");
const Transporter = require("../../../utility/nodeMailer/transporter");
const { getHtmlFile } = require("../../../utility/others");

const resetPassword =  async (req, res) => {
  const email =  req.userEmail 
  const html        = getHtmlFile(req.user, active_link, "resetPassword.hbs")
  const subject     = "Activate your account"

  try {
  const transporter = await Transporter()
  const mailOptions = await MailOptions(email, subject, text, html)

    // Generate unique token for password reset
    const active_link = `${CLIENT_URL}/forgot-password/${token}`
    const text        = "please click to this link to activate your account" + active_link

    // Send password reset email with token
    await transporter.sendMail(mailOptions)

    return res.status(200).send("please check your email please and thanks")
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = resetPassword;
