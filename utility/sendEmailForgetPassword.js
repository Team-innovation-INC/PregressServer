const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');

// Read the HTML file
const templatePath = path.join("/home/raed/Desktop/server_examples/PregressServer/utility/resetPasswordTemplate", 'reset-password.ejs');

exports.sendPasswordResetEmail = async (email, token) => {
  const EMAIL_ADDRESS  = process.env.EMAIL_ADDRESS
  const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
  const CLIENT_URL     = process.env.CLIENT_URL

  const rediracted = `${CLIENT_URL}/forgot-password/${token}`
  const html = await ejs.renderFile(templatePath, {rediracted });

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: EMAIL_ADDRESS,
    to: email,
    subject: 'Password Reset Request',
    text: `You are receiving this email because you (or someone else) has requested a password reset. Please click on the following link to complete the process: ${process.env.CLIENT_URL}/forgot-password/${token}. If you did not request this, please ignore this email and your password will remain unchanged.`,
    html: html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Password reset email sent: ${info.response}`);
  } catch (error) {
    console.error(`Error sending password reset email: ${error}`);
  }
};

