const handleGoogleAuth = (req, res) => {
  const authorizeUrl = req.googleAuthUrl;
  const { successMessage, failedMessage } = req;
  try {
    return res.status(200).send({
      data: { authorizeUrl },
      message: successMessage,
      status: 200,
      success: true,
    });
  } catch (error) {
    return res
      .status(403)
      .send({ message: failedMessage, status: 403, success: false });
  }
};

module.exports = handleGoogleAuth;
