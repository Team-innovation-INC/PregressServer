const { body, param } = require('express-validator');

/**
 * Validation rules for creating or updating an Ability.
 */
exports.updateAbilityInputs = [
  /**
   * Validate the 'id' parameter.
   * - Must be a valid MongoDB ObjectId
   * - Cannot be empty
   */
  param('id')
    .notEmpty().withMessage('ID is required')
    .isMongoId().withMessage('Invalid ID format'),

  /**
   * Validate 'name' field.
   * - Must be a string
   * - Minimum length of 5 characters
   * - Cannot be empty
   */
  body('name')
    .isString().withMessage('Name must be a string')
    .isLength({ min: 5 }).withMessage('Name must be at least 5 characters long')
    .notEmpty().withMessage('Name is required'),

  /**
   * Validate 'description' field.
   * - Must be a string
   * - Minimum length of 15 characters
   * - Maximum length of 100 characters
   */
  body('description')
    .isString().withMessage('Description must be a string')
    .isLength({ min: 15, max: 100 }).withMessage('Description must be between 15 and 100 characters'),

  /**
   * Validate 'entity' field.
   * Must be one of the allowed values.
   */
  body('entity')
    .isIn(['user', 'company', 'task', 'email', 'messages', 'ability'])
    .withMessage('Invalid entity'),

  /**
   * Validate 'operation' field.
   * Must be one of the allowed operations.
   */
  body('operation')
    .isIn(['create', 'read', 'update', 'delete', 'manage', 'all'])
    .withMessage('operation have to one of create, read, update, delete, manage, all'),

  /**
   * Validate 'role' field.
   * - Must be an array
   * - Each element in the array must be one of the predefined roles
   */
  body('role')
    .isArray().withMessage('Role must be an array')
    .notEmpty().withMessage('Role array cannot be empty')
    .custom(roles  => {
      const allowedRoles = ['super-admin', 'admin', 'moderator', 'user'];
      return roles.every( role => allowedRoles.includes(role));
    })
    .withMessage(' role have to contain at least one of them : super-admin, admin, moderator, user'),
];

/**
 * Validation rules for creating or updating an Ability.
 */
exports.abilityInputs = [
  /**
   * Validate 'name' field.
   * - Must be a string
   * - Minimum length of 5 characters
   * - Cannot be empty
   */
  body('name')
    .isString().withMessage('Name must be a string')
    .isLength({ min: 5 }).withMessage('Name must be at least 5 characters long')
    .notEmpty().withMessage('Name is required'),

  /**
   * Validate 'description' field.
   * - Must be a string
   * - Minimum length of 15 characters
   * - Maximum length of 100 characters
   */
  body('description')
    .isString().withMessage('Description must be a string')
    .isLength({ min: 15, max: 100 }).withMessage('Description must be between 15 and 100 characters'),

  /**
   * Validate 'entity' field.
   * Must be one of the allowed values.
   */
  body('entity')
    .isIn(['user', 'company', 'task', 'email', 'messages', 'ability'])
    .withMessage('Invalid entity'),

  /**
   * Validate 'operation' field.
   * Must be one of the allowed operations.
   */
  body('operation')
    .isIn(['create', 'read', 'update', 'delete', 'manage', 'all'])
    .withMessage('operation have to one of create, read, update, delete, manage, all'),

  /**
   * Validate 'role' field.
   * - Must be an array
   * - Each element in the array must be one of the predefined roles
   */
  body('role')
    .isArray().withMessage('Role must be an array')
    .notEmpty().withMessage('Role array cannot be empty')
    .custom(roles  => {
      const allowedRoles = ['super-admin', 'admin', 'moderator', 'user'];
      return roles.every( role => allowedRoles.includes(role));
    })
    .withMessage(' role have to contain at least one of them : super-admin, admin, moderator, user'),
];

/**
 * Validation rules for deleting an Ability.
 * Ensures the 'id' parameter is a valid MongoDB ObjectId.
 */
exports.abilityDeleteInputs = [
  /**
   * Validate the 'id' parameter.
   * - Must be a valid MongoDB ObjectId
   * - Cannot be empty
   */
  param('id')
    .notEmpty().withMessage('ID is required')
    .isMongoId().withMessage('Invalid ID format')
];

/**
 * Validation rules for deleting many Abilities.
 * Ensures the [ids] list  is a valid MongoDB ObjectId.
 */
exports.abilitiesDeleteInputs = [
  /**
   * Validate the 'ids' field.
   * - Must be an array
   * - Must not be empty
   * - Each element must be a valid MongoDB ObjectId
   */
  body('ids')
    .isArray().withMessage('IDs must be an array')
    .notEmpty().withMessage('IDs array cannot be empty')
    .custom(ids =>  ids.every(id => require('mongoose').Types.ObjectId.isValid(id))
    ).withMessage('One or more IDs are invalid'),
];
