const Ability = require('../../model/ability/ability.model');

/**
 * Middleware to update an existing ability.
 *
 * This function update existing `Ability` from the data in `req.body`, based to the id at the `req.param` saves it to the database, and then
 * assigns the updated ability to `req.data` for further processing by the next middleware or controller.
 * If an error occurs during this process, a 500 status code is returned with a descriptive message.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express `next` middleware function.
 */
exports.updateExistingAbility = async (req, res, next) => {
  try {
    const { description, entity, name, operation, role } = req.body;
    const {id} = req.params
    console.log(req.params, "req.params")
    const companyId = req.user.company._id

    /**
     * Find the existing ability by its ID
     */
    const updatedAbility = await Ability.findByIdAndUpdate(
      id,
      { description, entity, name, operation, role, companyId },
      { new: true }
    );
    if (!updatedAbility) {
      // If no ability with the given ID is found, return a 404 status code
      req.status = 404;
      req.errorMessage = `Ability with ID ${id} not found.`;
      return next();
    }

    /**
     * Update an existing `Ability` instance with the provided data and save changes  it to the database.
     */

    /**
     * Assign the update new ability to `req.data`.
     * This allows the next middleware or controller to access it.
     */
    req.data = updatedAbility;
    req.status = 201;

    /**
     * Pass control to the next middleware or controller.
     */
    next();
  } catch (error) {
    /**
     * handle exist ability
     */
    if (error.code === 11000) {
      req.status = 400;
      req.errorMessage = `field.${Object.keys(error.keyPattern)[0]}.exist`;
    } 
    /**
     * If there's an error during the creation of the ability,
     * return a 500 status code with a descriptive error message.
     */
    next();
  }
};
