async function MailOptions(to, subject, text, html) {
  const EMAIL_ADDRESS  = process.env.EMAIL_ADDRESS
  const mailOptions = {
    from: EMAIL_ADDRESS,
    to,
    subject,
    text,
    html
  };
  return mailOptions
}

module.exports = MailOptions;