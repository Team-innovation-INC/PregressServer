const { default: axios } = require('axios');

exports.fetchGoogleUserInfo = async (req, res, next) => {
  try {
    const accessToken = req.token.access_token;
    const userInfoResponse = await axios.get(
      'https://www.googleapis.com/oauth2/v1/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    req.email = userInfoResponse.data.email;
    next();
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal Server Error', status: 500, success: false });
  }
};
