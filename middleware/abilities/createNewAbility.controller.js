const Ability = require('../../model/ability/ability.model');

/**
 * Middleware to create a new ability.
 *
 * This function creates a new `Ability` from the data in `req.body`, saves it to the database, and then
 * assigns the newly created ability to `req.data` for further processing by the next middleware or controller.
 * If an error occurs during this process, a 500 status code is returned with a descriptive message.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express `next` middleware function.
 */
exports.createNewAbility = async (req, res, next) => {
  try {
    const { description, entity, name, operation, role } = req.body;
    const {user} = req
    const companyId = user.company._id
    /**
     * Create a new `Ability` instance with the provided data and save it to the database.
     */
    const newAbility = new Ability({ description, entity, name, operation, role, companyId });
    await newAbility.save();

    /**
     * Assign the created ability to `req.data`.
     * This allows the next middleware or controller to access it.
     */
    req.data = newAbility;
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
