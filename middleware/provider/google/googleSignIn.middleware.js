const { OAuth2Client } = require('google-auth-library');

exports.handleGoogleSignIn = async (req, res, next) => {
  try {
    const { authorizationCode } = req;
    const oAuth2Client = new OAuth2Client({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: `${process.env.BasedUrl}/api/auth/sign-in/google/redirect`,
    });

    const { tokens } = await oAuth2Client.getToken(authorizationCode);
    req.token = tokens;
    next();
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal Server Error', status: 500, success: false });
  }
};
