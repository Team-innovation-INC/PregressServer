const { OAuth2Client } = require('google-auth-library');

exports.generateGoogleAuthUrl = async(req, res, next) => {
  const {GOOGLE_CLIENT_ID, BasedUrl} = process.env;
  try {
    const oAuth2Client = new OAuth2Client(GOOGLE_CLIENT_ID);
    const redirectUri = `${BasedUrl}/api/auth/sign-in/google/redirect`;
    // Generate the URL that the user will be redirected to for Google authentication
    const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        redirect_uri: redirectUri,
    });
    req.googleAuthUrl = authorizeUrl;
    next();
  } catch (error) {
    res.status(403).send({ message: "provider.access.google.failed", status: 403, success: false });
  }
};
