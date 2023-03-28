const Transporter = require("../../utility/nodeMailer/transporter");

const sendEmail =  async (req, res) => {
  const newEmail    = req.newEmail 
  const mailOptions = req.mailOptions 
  const transport   = await Transporter()
  try {
    console.log("transport", transport)
                // -------- send mail with defined transport object
    const info = await transport.sendMail(mailOptions);
    console.log("info", info.response)
                // -------- save email to the data base 
    await newEmail.save()

                // -------- response send for success
    return res.status(200).send("email send with success")

    } catch (error) {
      console.log("error", error)
     return res.status(500).send({ msg: error });
    }
  };

module.exports = sendEmail;