/*
 /  ---- create email template middleware
/ */

// ----- import mail function transporter
const Transporter = require('../../utility/nodeMailer/transporter');

exports.passwordEmail = async (req, res, next) => {
  try {
    // ----- pass instance for transporter
    req.transporter = Transporter();
    // pass
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
