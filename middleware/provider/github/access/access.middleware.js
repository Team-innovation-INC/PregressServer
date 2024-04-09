/**
 * Endpoint to redirect users to GitHub authorization page to obtain access.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
exports.accessGithub = async (req, res) => {
    /** Retrieve the GitHub client ID from environment variables */
    const clientId = process.env.GITHUB_CLIENT_ID;
    /** Define the required scopes */
    const scopes = 'read:org,repo,user';
    /** Construct the authorization URL */
    const authorizationUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scopes}&state=abcdefg`;
    try {
      /** Redirect users to the GitHub authorization page */
      return res.status(200).send( {
      message: "provider.github.connection.success",
      status: 200,
      success: true, 
       data : {authorizationUrl}});
    } catch (error) {
      /** Handle errors and send a 500 Internal Server Error response */
      return res.status(500).send({ message: "Can't access to your GitHub. Please try again later." });
    }
}
