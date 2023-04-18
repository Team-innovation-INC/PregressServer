const Transporter = require("../../utility/nodeMailer/transporter");

const sendEmail =  async (req, res) => {
  const newEmail    = req.newEmail 
  const mailOptions = req.mailOptions 
  const transport   = await Transporter()
  try {
// -------- send mail with defined transport object
    const info = await transport.sendMail(mailOptions);
// -------- save email to the data base 
    await newEmail.save()
// -------- response send for success
    return res.status(200).send({message: "email send with success"})
    } catch (error) {
      return res.status(500).send('Internal server error');
    }
  };

module.exports = sendEmail;