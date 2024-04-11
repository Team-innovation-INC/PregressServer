const handleGoogleAuth = (req, res) => {
    const authorizeUrl = req.googleAuthUrl;
    try {
       return res.status(200).send({ data: { authorizeUrl }, message: "provider.access.google.success", status: 200, success: true });
    } catch (error) {
        return  res.status(403).send({message: "provider.access.google.failed", status:403, success: false});
    }
  };

  module.exports = handleGoogleAuth;