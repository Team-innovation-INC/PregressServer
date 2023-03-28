async function MailOptions(to, subject, text) {
  const EMAIL_ADDRESS  = process.env.EMAIL_ADDRESS
  const mailOptions = {
    from: EMAIL_ADDRESS,
    to,
    subject,
    text
  };
  return mailOptions
}

module.exports = MailOptions;