const { default: axios } = require("axios");

exports.fetchGoogleUserInfo = async(req, res, next) => {
  try {
    const { access_token } = req.token;
    const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });

    req.email= userInfoResponse.data.email;
    next();

  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", status: 500, success: false });
  }
}
