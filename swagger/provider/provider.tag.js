exports.providerTag = (req, res, next) => {
  // #swagger.security = [{
  //    "BearerAuth": []
  // }]
  // #swagger.tags = ['-- PROVIDERS --']
  // #swagger.summary = 'Providers main routes'
  // #swagger.description = 'Description for each single route for the providers even access or even save providers connections'
  next();
};

exports.providerConnectTag = (req, res, next) => {
  // #swagger.security = [{
  //    "BearerAuth": []
  // }]
  // #swagger.tags = ['-- CONNECT PROVIDERS --']
  // #swagger.summary = 'Providers main connect routes'
  // #swagger.description = 'description for each single connect route for the providers to get access'
  next();
};

exports.accessGoogleCalendarSwagger = (req, res, next) => {
  // #swagger.summary = 'Access Google Calendar for user'
  // #swagger.description = 'This route is created to get access for the Google Calendar'
  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                authorizeUrl: { type: 'string' }
              }
            },
            status: { type: 'integer', example: 200 },
            success: { type: 'boolean', example: true }
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
  /* #swagger.responses[403] = {
        description: 'Forbidden',
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Access to Google Calendar is forbidden.' },
            status: { type: 'integer', example: 403 },
            success: { type: 'boolean', example: false }
          }
        },
        examples: {
          'application/json': {
            message: 'Access to Google Calendar is forbidden.',
            status: 403,
            success: false
          }
        }
  } */
  next();
};

// Repeat the same pattern for other middleware functions...

exports.accessGoogleMeetSwagger = (req, res, next) => {
  // #swagger.summary = 'Access Google Meet for user'
  // #swagger.description = 'This route is created to get access for Google Meet'
  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                authorizeUrl: { type: 'string' }
              }
            },
            status: { type: 'integer', example: 200 },
            success: { type: 'boolean', example: true }
          }
        },
        examples: {
          'application/json': {
            data: {
              authorizeUrl: 'https://example.com/google/meet/auth' // Example URL for Google Meet
            },
            status: 200,
            success: true
          }
        }
  } */
  /* #swagger.responses[403] = {
        description: 'Forbidden',
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Access to Google Meet is forbidden.' },
            status: { type: 'integer', example: 403 },
            success: { type: 'boolean', example: false }
          }
        },
        examples: {
          'application/json': {
            message: 'Access to Google Meet is forbidden.',
            status: 403,
            success: false
          }
        }
  } */
  next();
};

exports.accessGoogleGmailSwagger = (req, res, next) => {
  // #swagger.summary = 'Access Gmail for user'
  // #swagger.description = 'This route is created to get access for Gmail'
  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                authorizeUrl: { type: 'string' }
              }
            },
            status: { type: 'integer', example: 200 },
            success: { type: 'boolean', example: true }
          }
        },
        examples: {
          'application/json': {
            data: {
              authorizeUrl: 'https://example.com/google/gmail/auth' // Example URL for Gmail
            },
            status: 200,
            success: true
          }
        }
  } */
  /* #swagger.responses[403] = {
        description: 'Forbidden',
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Access to Gmail is forbidden.' },
            status: { type: 'integer', example: 403 },
            success: { type: 'boolean', example: false }
          }
        },
        examples: {
          'application/json': {
            message: 'Access to Gmail is forbidden.',
            status: 403,
            success: false
          }
        }
  } */
  next();
};
exports.accessGithubSwagger = (req, res, next) => {
  // #swagger.summary = 'Access GitHub for user'
  // #swagger.description = 'This route is created to get access for GitHub'
  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                authorizeUrl: { type: 'string' }
              }
            },
            status: { type: 'integer', example: 200 },
            success: { type: 'boolean', example: true }
          }
        },
        examples: {
          'application/json': {
            data: {
              authorizeUrl: 'https://example.com/github/auth' // Example URL for GitHub
            },
            status: 200,
            success: true
          }
        }
  } */
  /* #swagger.responses[403] = {
        description: 'Forbidden',
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Access to GitHub is forbidden.' },
            status: { type: 'integer', example: 403 },
            success: { type: 'boolean', example: false }
          }
        },
        examples: {
          'application/json': {
            message: 'Access to GitHub is forbidden.',
            status: 403,
            success: false
          }
        }
  } */
  next();
};

exports.accessGitlabSwagger = (req, res, next) => {
  // #swagger.summary = 'Access GitLab for user'
  // #swagger.description = 'This route is created to get access for GitLab'
  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                authorizeUrl: { type: 'string' }
              }
            },
            status: { type: 'integer', example: 200 },
            success: { type: 'boolean', example: true }
          }
        },
        examples: {
          'application/json': {
            data: {
              authorizeUrl: 'https://example.com/gitlab/auth' // Example URL for GitLab
            },
            status: 200,
            success: true
          }
        }
  } */
  /* #swagger.responses[403] = {
        description: 'Forbidden',
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Access to GitLab is forbidden.' },
            status: { type: 'integer', example: 403 },
            success: { type: 'boolean', example: false }
          }
        },
        examples: {
          'application/json': {
            message: 'Access to GitLab is forbidden.',
            status: 403,
            success: false
          }
        }
  } */
  next();
};

exports.accessBitbucketSwagger = (req, res, next) => {
  // #swagger.summary = 'Access Bitbucket for user'
  // #swagger.description = 'This route is created to get access for Bitbucket'
  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                authorizeUrl: { type: 'string' }
              }
            },
            status: { type: 'integer', example: 200 },
            success: { type: 'boolean', example: true }
          }
        },
        examples: {
          'application/json': {
            data: {
              authorizeUrl: 'https://example.com/bitbucket/auth' // Example URL for Bitbucket
            },
            status: 200,
            success: true
          }
        }
  } */
  /* #swagger.responses[403] = {
        description: 'Forbidden',
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Access to Bitbucket is forbidden.' },
            status: { type: 'integer', example: 403 },
            success: { type: 'boolean', example: false }
          }
        },
        examples: {
          'application/json': {
            message: 'Access to Bitbucket is forbidden.',
            status: 403,
            success: false
          }
        }
  } */
  next();
};

exports.accessJiraSwagger = (req, res, next) => {
  // #swagger.summary = 'Access Jira for user'
  // #swagger.description = 'This route is created to get access for Jira'
  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                authorizeUrl: { type: 'string' }
              }
            },
            status: { type: 'integer', example: 200 },
            success: { type: 'boolean', example: true }
          }
        },
        examples: {
          'application/json': {
            data: {
              authorizeUrl: 'https://example.com/jira/auth' // Example URL for Jira
            },
            status: 200,
            success: true
          }
        }
  } */
  /* #swagger.responses[403] = {
        description: 'Forbidden',
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Access to Jira is forbidden.' },
            status: { type: 'integer', example: 403 },
            success: { type: 'boolean', example: false }
          }
        },
        examples: {
          'application/json': {
            message: 'Access to Jira is forbidden.',
            status: 403,
            success: false
          }
        }
  } */
  next();
};

exports.accessMegaSwagger = (req, res, next) => {
  // #swagger.summary = 'Access Mega for user'
  // #swagger.description = 'This route is created to get access for Mega'
  /* #swagger.responses[200] = {
        description: 'Successful operation',
        schema: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                authorizeUrl: { type: 'string' }
              }
            },
            status: { type: 'integer', example: 200 },
            success: { type: 'boolean', example: true }
          }
        },
        examples: {
          'application/json': {
            data: {
              authorizeUrl: 'https://example.com/mega/auth' // Example URL for Mega
            },
            status: 200,
            success: true
          }
        }
  } */
  /* #swagger.responses[403] = {
        description: 'Forbidden',
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Access to Mega is forbidden.' },
            status: { type: 'integer', example: 403 },
            success: { type: 'boolean', example: false }
          }
        },
        examples: {
          'application/json': {
            message: 'Access to Mega is forbidden.',
            status: 403,
            success: false
          }
        }
  } */
  next();
};
