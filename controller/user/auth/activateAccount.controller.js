/*
 /  ---- send activate email for new user sign in
/ */

// ----- import Transporter to set the sender mailer information
const dotenv = require('dotenv');
const Transporter = require('../../../utility/node-mailer/nodeMailer/transporter');
// ----- import MailOptions to set the email information
const MailOptions = require('../../../utility/node-mailer/nodeMailer/mailOptions');
// ----- import getHtmlFile to get variables needs to put for the html mail
const { getHtmlFile } = require('../../../utility/others');

// ----- import based deployed sever url
dotenv.config();
const basedUrl = process.env.BasedUrl;

const sendEmailActivation = async (req, res, next) => {
  // ----- get using information from request
  const { token } = req.token;
  const { email, userName, fullName } = req.body;
  // ----- collect email variable information
  const userEmail = { email, userName, fullName };
  // ----- create activate link for activate account
  const activeLink = `http://${basedUrl}/api/auth/activate-account?token=${token}`;
  // ----- create html file for active account
  const html = getHtmlFile(userEmail, activeLink, 'ActiveAccount.hbs');
  // ----- create information related to user email
  const subject = 'Activate your account';
  const text = `please click to this link to activate your account${activeLink}`;
  // ----- create instances email sender and options
  const transporter = await Transporter();
  const mailOptions = await MailOptions(email, subject, text, html);
  // ----- send email
  await transporter.sendMail(mailOptions);
  // ----- response validate for email sent
  req.status = 200;
  next();
};

module.exports = sendEmailActivation;
