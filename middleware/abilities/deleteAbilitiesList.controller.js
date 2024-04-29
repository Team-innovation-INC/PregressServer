const Ability = require('../../model/ability/ability.model');

/**
 * Middleware to delete a list of abilities.
 * 
 * This function takes an array of IDs from `req.body`, deletes the corresponding abilities from the database,
 * and assigns the deleted abilities to `req.data`. It also ensures the abilities belong to the correct company.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express `next` middleware function.
 */
exports.deleteAbilitiesList = async (req, res, next) => {
  try {
    const { ids } = req.body;
    const companyId = req.user.company._id
    /**
     * Delete a list of abilities.
     */
    const deletedAbilities = await Ability.deleteMany({
      companyId,
      _id: { $in: ids },
    });
    if (deletedAbilities.deletedCount === 0) {
      req.status = 400;
      req.errorMessage = "ability.exist.false"
    } else {
     /**
       * Assign the deleted abilities information to `req.data`.
       * This allows the next middleware or controller to access it.
       */
    req.data = {
      deletedCount: deletedAbilities.deletedCount,
      ids
    };
    req.status = 200;
    }
    /**
     * Pass control to the next middleware or controller.
     */
    next();
  } catch (error) {
      req.status = 500;
    /**
     * If there's an error during the creation of the ability,
     * return a 500 status code with a descriptive error message.
     */
    next();
  }
};
