exports.handleAuthorizationCode = async (req, res, next) => {
  try {
    const { code } = req.query;
    if (!code) {
      return res.status(400).send({
        message: 'Authorization code missing',
        status: 400,
        success: false,
      });
    }
    req.authorizationCode = code;
    next();
  } catch (error) {
    console.error('Error handling authorization code:', error.message);
    res
      .status(500)
      .send({ message: 'Internal Server Error', status: 500, success: false });
  }
};
