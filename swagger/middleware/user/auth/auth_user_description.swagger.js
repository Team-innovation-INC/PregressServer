exports.authTestSwagger = (req, res, next) => {
  // #swagger.tags = ['-- HEALTHCARE --']
  // #swagger.summary = 'test router for the the test path'
  // #swagger.description = 'this route is for testing the auth tag routes have no use for the app just for testing.'
  next();
};

exports.signupSwagger = (req, res, next) => {
  // #swagger.summary = 'sign-up auth for user register'
  // #swagger.description = 'this route is created to send activate email for new users registration'
  next();
};

exports.signingSwagger = (req, res, next) => {
  // #swagger.summary = 'sign-in auth for user log in'
  // #swagger.description = 'this route is created validate the sign in of a user using email and password then resend the token key as response with some information needs at the home page'
  /* #swagger.parameters[200] = {
      in: 'body',
      description: 'Sign-in credentials',
      required: true,
      schema: {
        email: "raedrdhaounia@gmail.com",
        password: "dadHH123!"
      },
      examples: {
        'application/json': {
          email: 'user@example.com',
          password: 'password123'
        }
      }
     }
  */
  /* #swagger.parameters[400] = {
      in: 'body',
      description: 'Sign-in credentials',
      required: true,
      schema: {
        email: "userName",
        password: "Password@123"
      },
      examples: {
        'application/json': {
          email: 'userName',
          password: '******'
        }
      }
     }
  */

  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
        "data": {
    "type": "object",
    "properties": {
      "user": {
        "type": "object",
        "properties": {
          "company": {
            "type": "object",
            "properties": {
              "_id": { "type": "string", "required": true },
              "companyName": { "type": "string", "required": true },
              "companyWebSite": { "type": "string", "required": true },
              "bio": { "type": "string", "required": true },
              "pic": { "type": "string", "required": false },
              "creationDate": { "type": "string", "required": true },
              "__v": { "type": "number" }
            }
          },
          "contact": {
            "type": "object",
            "properties": {
              "email": { "type": "string", "required": true },
              "fullName": { "type": "string", "required": true },
              "userName": { "type": "string", "required": true }
            }
          },
          "role": {
            "type": "object",
            "properties": {
              "roleName": { "type": "string", "required": true }
            }
          },
          "info": {
            "type": "object",
            "properties": {
              "pic": { "type": "string", "required": false },
              "language": { "type": "string", "required": false }
            }
          },
          "createdAt": { "type": "string", "required": true },
          "_id": { "type": "string", "required": true }
        }
      },
      "token": { "type": "string", "required": true },
      "message": { "type": "string", "required": true }
    }
  },
  "status": 200,
  "success": true
}

        },
        examples: {
          'application/json': {
            data: {
              authorizeUrl: 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fmail.google.com%2F&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fauth%2Fsign-in%2Fgoogle%2Fredirect&response_type=code&client_id=675069131208-h1bbtbp5er130o8lu3blto0nbrkvl72k.apps.googleusercontent.com'
            },
            status: 200,
            success: true
          }
        }
  } */
  /* #swagger.responses[400] = {
    description: 'invalid email',
    schema: {
        message: 'email.type.failed',
        status: 400,
        success: false
    },
    examples: {
      'application/json': {
        message: 'email.type.failed',
        status: 400,
        success: false
      }
    }
  }
*/
  /* #swagger.responses[404] = {
    description: 'Email does not exist',
    schema: {
        message: 'email.exist.failed',
        status: 404,
        success: false
    },
    examples: {
      'application/json': {
        message: 'email.exist.failed',
        status: 404,
        success: false
      }
    }
  }
*/
  /* #swagger.responses[500] = {
    description: 'Internal server error',
    schema: {
        message: 'Internal server error',
        status: 500,
        success: false
    },
    examples: {
      'application/json': {
        message: 'Internal server error',
        status: 500,
        success: false
      }
    }
  }
*/
  next();
};

exports.activateAccountSwagger = (req, res, next) => {
  // #swagger.summary = 'activate auth for user'
  // #swagger.description = 'this route is created activate email for a user that been opened with his email'
  next();
};

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
  next();
};

exports.requestResetPasswordSwagger = (req, res, next) => {
  // #swagger.summary = 'Request Password Reset'
  // #swagger.description = 'This route is used to request a password reset for a user.'
  next();
};

exports.resetPasswordPageSwagger = (req, res, next) => {
  // #swagger.summary = 'Page Password Reset'
  // #swagger.description = 'This route is used to show the reset password page'
  next();
};

exports.accessGoogleAuthSwagger = (req, res, next) => {
  // #swagger.summary = 'activate auth for user'
  // #swagger.description = 'this route is created activate email for a user that been opened with his email'
  next();
};

exports.fetchGoogleUserInfoSwagger = (req, res, next) => {
  // #swagger.summary = 'activate auth for user'
  // #swagger.description = 'this route is created activate email for a user that been opened with his email'
  next();
};

exports.accessGoogleCalendarSwagger = (req, res, next) => {
  // #swagger.summary = 'access google calendar for user'
  // #swagger.description = 'this route is created to  get access for the calendar google'
  next();
};
