/*
 /  ---- check exist token middleware
/ */

// ----- import model
const Token = require('../../../model/Utility/Token.model');

exports.checkExistToken = async (req, res, next) => {
  // ----- get using information from request
  const { token, email } = req.query;
  try {
    // ----- find token at the date base
    const existToken = await Token.findOne({ token, email });
    // ----- response failed at can not exist
    if (!existToken) {
      return res.status(400).send({
        message:
          'token does not exist it maybe expired or company has been activated for an other user',
      });
    }
    req.tokenInfo = existToken.info.toString();
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
