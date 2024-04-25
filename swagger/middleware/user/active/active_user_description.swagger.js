exports.testSwagger = (req, res, next) => {
  // #swagger.summary = 'test router active user path'
  // #swagger.description = 'this route is for testing the active user tag routes have no use for the app just for testing.'
  next();
};

exports.getDetails = (req, res, next) => {
  // #swagger.summary = 'get active user details path'
  // #swagger.description = 'this route is created to get user details frm the JWT token created at the first so it will be useful at every refresh of the window'
  next();
};

exports.updateProfileSwagger = (req, res, next) => {
  // #swagger.summary = 'update active user profile path'
  // #swagger.description = 'this route is created to update user profile information such as age, picture, biography, gender, status, localization, language, timezone and currency ...'
  next();
};

exports.updateContactSwagger = (req, res, next) => {
  // #swagger.summary = 'active user update contact'
  // #swagger.description = 'this route is created for active user so they can directly update contact information such as email, full name, username and phone number'
  next();
};

exports.updatePasswordSwagger = (req, res, next) => {
  // #swagger.summary = 'active user update password'
  // #swagger.description = 'this route is created for active user so they can directly update password using old and new password at this route'
  next();
};

exports.checkExistUserName = (req, res, next) => {
  // #swagger.summary = 'active user check user name exist'
  // #swagger.description = 'this route is created for active user to check if user name is exist or not'
  next();
};

exports.updateProfileInformationSwagger = (req, res, next) => {
  // #swagger.summary = 'active user update information'
  // #swagger.description = 'this route is created for active user so they can directly update all possible information such as full name,  user name, biography, age, gender and picture profile '
  next();
};