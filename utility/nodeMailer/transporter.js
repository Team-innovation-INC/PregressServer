const nodemailer = require('nodemailer');

async function Transporter(){
  const EMAIL_ADDRESS  = process.env.EMAIL_ADDRESS
  const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
  const transporter = await nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD
    }
  });
  return transporter
}

module.exports = Transporter;