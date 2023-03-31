const Transporter = require('../../utility/nodeMailer/transporter');

exports.passwordEmail = async (req, res, next) => {
  try {
    req.transporter = Transporter()
    next()
  } catch (error) {
    console.log("error is", error)
    return res.status(500).send('Internal server error');
  }
  }