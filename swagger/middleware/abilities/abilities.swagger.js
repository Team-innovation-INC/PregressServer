/**
 * Test Swagger middleware
 * This middleware adds Swagger metadata for a test route.
 * It is designed to validate Swagger configurations and does not serve any functional purpose in the app.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.testSwagger = (req, res, next) => {
  /** 
   * #swagger.security = [{ "BearerAuth": [] }]
   * #swagger.tags = ['-- HEALTHCARE --']
   * #swagger.summary = 'Test router abilities path'
   * #swagger.description = 'This route is used for testing Swagger configurations related to abilities. It has no functional purpose in the application.'
   */
  next();
};

/**
 * Abilities Swagger middleware
 * This middleware is created to add Swagger metadata for the main routes related to abilities management.
 * 
 * @param {import('express').Request} req - Represents the incoming HTTP request from the client, containing data like headers, parameters, and body content.
 * @param {import('express').Response} res - Represents the HTTP response that will be sent back to the client, allowing you to set headers, status codes, and response content.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.abilitiesSwagger = (req, res, next) => {
  /** 
   * #swagger.tags = ['-- ABILITY --']
   * #swagger.summary = 'Abilities main routes'
   * #swagger.description = 'Defines the main routes used for managing abilities in the application.'
  */
  next();
};

/**
 * Abilities All Swagger middleware
 * This middleware adds Swagger documentation metadata for a route that retrieves all abilities.
 * It describes the endpoint for fetching the complete list of abilities from the database.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.abilitiesAllSwagger = (req, res, next) => {
  /** 
   * #swagger.summary = 'Get list of all abilities'
   * #swagger.description = 'This route retrieves the complete list of abilities stored in the database.'
   */
  next();
};

/**
 * User Abilities Swagger middleware
 * This middleware adds Swagger metadata for a route that retrieves abilities for a specific user.
 * It describes an endpoint for fetching the list of abilities for the currently authenticated user.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.userAbilitiesSwagger = (req, res, next) => {
  /** 
   * #swagger.summary = 'Get user abilities list'
   * #swagger.description = 'Fetches the list of abilities assigned to the currently authenticated user.'
   */
  next();
};

/**
 * User Abilities List Swagger middleware
 * This middleware adds Swagger metadata for a route that retrieves possible abilities for a user based on their role.
 * It describes an endpoint for fetching abilities available to the current user based on their role and permissions.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.userAbilitiesListSwagger = (req, res, next) => {
  /** 
   * #swagger.summary = 'Get user possible abilities by role list'
   * #swagger.description = 'Fetches a list of abilities that the current user can access based on their role and permissions.'
   */
  next();
};

/**
 * Create Ability Swagger middleware
 * This middleware adds Swagger metadata for a route that creates a new ability.
 * It describes the endpoint used to create a new ability in the database.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.createAbilitySwagger = (req, res, next) => {
  /** 
   * #swagger.summary = 'Create a new ability'
   * #swagger.description = 'This route creates a new ability in the database.'
   */
  next();
};

/**
 * Add Ability Swagger middleware
 * This middleware adds Swagger metadata for a route that updates a user's list of abilities.
 * It describes the endpoint used to add abilities to a specific user.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.addAbilitySwagger = (req, res, next) => {
  /** 
   * #swagger.summary = 'Add abilities to a specific user'
   * #swagger.description = 'This route is used to update the list of abilities for a specific user.'
   */
  next();
};

/**
 * Update Ability Swagger middleware
 * This middleware adds Swagger metadata for a route that updates an existing ability.
 * It describes the endpoint used to update an existing ability by ID.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.updateAbilitySwagger = (req, res, next) => {
  /** 
   * #swagger.summary = 'Update an existing ability'
   * #swagger.description = 'This route allows updating an existing ability by ID.'
   */
  next();
};

/**
 * Delete Ability Swagger middleware
 * This middleware adds Swagger metadata for a route that deletes an ability by its unique identifier (ID).
 * It describes the endpoint used to remove an ability from the database.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.deleteAbilitySwagger = (req, res, next) => {
  /** 
   * #swagger.summary = 'Delete an ability'
   * #swagger.description = 'Deletes an ability from the database by its unique identifier (ID).'
   */
  next();
};

/**
 * Delete Abilities Swagger middleware
 * This middleware adds Swagger metadata for a route that deletes a list of abilities by their unique identifiers (IDs).
 * It describes the endpoint used to remove multiple abilities from the database.
 * 
 * @param {import('express').Request} req - The Express request object, representing the HTTP request from the client.
 * @param {import('express').Response} res - The Express response object, representing the HTTP response that will be sent back to the client.
 * @param {Function} next - The Express `next` middleware function, used to pass control to the next middleware or controller.
 */
exports.deleteAbilitiesSwagger = (req, res, next) => {
  /** 
   * #swagger.summary = 'Delete a list of abilities'
   * #swagger.description = 'Deletes a list of abilities from the database by their unique identifiers (IDs).'
   */
  next();
};
