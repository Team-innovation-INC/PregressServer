const { OAuth2Client } = require('google-auth-library');

const generateGoogleAuthUrl = async (req, res, next, scope) => {
  const { GOOGLE_CLIENT_ID, BasedUrl } = process.env;
  try {
    const oAuth2Client = new OAuth2Client(GOOGLE_CLIENT_ID);
    const redirectUri = `${BasedUrl}/api/auth/sign-in/google/redirect`;
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope,
      redirect_uri: redirectUri,
    });
    req.googleAuthUrl = authorizeUrl;
    next();
  } catch (error) {
    res.status(403).send({
      message: 'provider.access.google.failed',
      status: 403,
      success: false,
    });
  }
};
exports.generateGoogleCalendarAuthUrl = async (req, res, next) => {
  await generateGoogleAuthUrl(
    req,
    res,
    next,
    'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar',
  );
  req.successMessage = 'provider.access.google.calendar.success'; // Set success message dynamically
  req.failedMessage = 'provider.access.google.calendar.failed'; // Set failed message dynamically
};

exports.generateGoogleMeetAuthUrl = async (req, res, next) => {
  await generateGoogleAuthUrl(
    req,
    res,
    next,
    'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar',
  );
  req.successMessage = 'provider.access.google.meet.success'; // Set success message dynamically
  req.failedMessage = 'provider.access.google.meet.failed'; // Set failed message dynamically
};

exports.generateGoogleGmailAuthUrl = async (req, res, next) => {
  await generateGoogleAuthUrl(
    req,
    res,
    next,
    'https://www.googleapis.com/auth/userinfo.email https://mail.google.com/',
  );
  req.successMessage = 'provider.access.google.gmail.success'; // Set success message dynamically
  req.failedMessage = 'provider.access.google.gmail.failed'; // Set failed message dynamically
};
