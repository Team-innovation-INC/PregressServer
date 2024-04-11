exports.authTestSwagger = (req, res, next) => {
  // #swagger.summary = 'test router for the the test path'
  // #swagger.description = 'this route is for testing the auth tag routes have no use for the app just for testing.'
  next()
}

exports.signupSwagger = (req, res, next) => {
  // #swagger.summary = 'sign-up auth for user register'
  // #swagger.description = 'this route is created to send activate email for new users registration'
  next()
}

exports.signingSwagger = (req, res, next) => {
  // #swagger.summary = 'sign-in auth for user log in'
  // #swagger.description = 'this route is created validate the sign in of a user using email and password then resend the token key as response with some information needs at the home page'
  next()
}

exports.activateAccountSwagger = (req, res, next) => {
  // #swagger.summary = 'activate auth for user'
  // #swagger.description = 'this route is created activate email for a user that been opened with his email'
  next()
}

exports.resetUserPasswordSwagger = (req, res, next) => {
  /* 
    #swagger.summary = 'Reset User Password'
    #swagger.description = 'This route is used to reset the password for a user.'
    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      description: 'User password',
      schema: { $ref: "#/definitions/UserPassword" }
    }
  */
  next()
}

exports.requestResetPasswordSwagger = (req, res, next) => {
  // #swagger.summary = 'Request Password Reset'
  // #swagger.description = 'This route is used to request a password reset for a user.'
  next()
}

exports.resetPasswordPageSwagger = (req, res, next) => {
  // #swagger.summary = 'Page Password Reset'
  // #swagger.description = 'This route is used to show the reset password page'
  next()
}

exports.accessGoogleAuthSwagger = (req, res, next) => {
  // #swagger.summary = 'activate auth for user'
  // #swagger.description = 'this route is created activate email for a user that been opened with his email'
  next()
}

exports.fetchGoogleUserInfoSwagger = (req, res, next) => {
  // #swagger.summary = 'activate auth for user'
  // #swagger.description = 'this route is created activate email for a user that been opened with his email'
  next()
}