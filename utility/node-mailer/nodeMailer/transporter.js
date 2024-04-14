const nodemailer = require('nodemailer');

async function Transporter() {
  const { EMAIL_ADDRESS } = process.env;
  const { EMAIL_PASSWORD } = process.env;
  return nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    },
  });
}

module.exports = Transporter;
