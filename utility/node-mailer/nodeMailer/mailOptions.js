async function MailOptions(to, subject, text, html) {
  const { EMAIL_ADDRESS } = process.env;
  return {
    from: EMAIL_ADDRESS,
    to,
    subject,
    text,
    html,
  };
}

module.exports = MailOptions;
