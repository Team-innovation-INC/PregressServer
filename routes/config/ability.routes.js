const express = require('express');
const router = express.Router();

/**
 * Abilities Router
 *
 * This router handles all operations related to abilities, including CRUD operations,
 * fetching abilities lists, and applying middleware for authorization and validation.
 */

// Global middleware for active user router
const { getUserDetails } = require('../../utility/passport.middleware');

/**
 * Token validation type
 */
const {
  authorizationHeaderValidator,
} = require('../../validation/validator/activeUser/activeParams');

const { userId } = require('../../middleware/user/active/activeId.middleware');

/**
 * Input validation
 */
const validateInputs = require('../../validation/validator/validationInputs.config');
const { abilityInputs, abilityDeleteInputs, abilitiesDeleteInputs, updateAbilityInputs } = require('../../validation/validator/ability/ability.validation');

/**
 * Middleware for user role checks
 */
const { isAdmin } = require('../../middleware/user/role/isAdmin.middleware');

/**
 * Middleware for abilities
 */
const { getAbilitiesList } = require('../../middleware/abilities/getAllAbilities.controller');
const { getUserAbilitiesList } = require('../../middleware/abilities/getUserAbilities.controller');

/**
 * Swagger documentation middleware
 */
const {
  testSwagger,
  abilitiesSwagger,
  deleteAbilitySwagger,
  updateAbilitySwagger,
  createAbilitySwagger,
  abilitiesAllSwagger,
  userAbilitiesSwagger,
  deleteAbilitiesSwagger,
  addAbilitySwagger,
} = require('../../swagger/middleware/abilities/abilities.swagger');

/**
 * Response structure controller
 */
const globalResponseController = require('../../controller/globalResponseController.controller');
const { createNewAbility } = require('../../middleware/abilities/createNewAbility.controller');
const { deleteAnAbility } = require('../../middleware/abilities/deleteAnAbility.controller');
const { deleteAbilitiesList } = require('../../middleware/abilities/deleteAbilitiesList.controller');
const { updateExistingAbility } = require('../../middleware/abilities/updateAnAbility.controller');
const { checkIdsExistAtTheCompany } = require('../../middleware/abilities/checkIdsExist.controller');
const { addListIdToUser } = require('../../middleware/abilities/addListToUser.controller');
const { getAbilitiesListByRole } = require('../../middleware/abilities/getAllAbilitiesByRole.controller');
const { getAbilitiesListByRole2 } = require('../../middleware/abilities/getAllAbilitiesByRole2.controller');

/**
 * Apply authorization and validation middleware
 */
router.use(
  authorizationHeaderValidator,
  validateInputs,
  getUserDetails,
  userId
);

/**
 * Apply Swagger metadata to all routes
 */
router.use('', abilitiesSwagger);

/**
 * Test endpoint
 */
router.get('/health-care', testSwagger, (req, res) => {
  res.status(200).send({message : "ability route health care work as expected", status: 200, success : true});
});

/**
 * Get list of all abilities
 */
router.get('/all', abilitiesAllSwagger, getAbilitiesList, globalResponseController);

/**
 * Get user-specific abilities
 */
router.get('/', userAbilitiesSwagger, getUserAbilitiesList, globalResponseController);

/**
 * Get list of abilities possible by user role
 */
router.get('/list', userAbilitiesSwagger, (req, res) => {
  res.status(200).send('Get abilities possible list');
});

/**
 * add list of abilities to selected list for a user
 */
router.post('/add', addAbilitySwagger, abilitiesDeleteInputs, validateInputs, getAbilitiesListByRole2, checkIdsExistAtTheCompany, addListIdToUser, globalResponseController);

/**
 * Create a new ability
 */
router.post('/create', createAbilitySwagger, abilityInputs, validateInputs, isAdmin, createNewAbility, globalResponseController);

/**
 * Update list of abilities for a user
 */
router.put('/:id', updateAbilitySwagger, updateAbilityInputs, validateInputs, isAdmin, updateExistingAbility, globalResponseController);

/**
 * Delete an ability
 */
router.delete('/delete/:id', deleteAbilitySwagger, abilityDeleteInputs, validateInputs, isAdmin, deleteAnAbility, globalResponseController);

/**
 * Delete an ability
 */
router.delete('/delete', deleteAbilitiesSwagger, abilitiesDeleteInputs, validateInputs, isAdmin, deleteAbilitiesList, globalResponseController);

module.exports = router;
