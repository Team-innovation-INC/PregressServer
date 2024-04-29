/*
 /  ---- check list of id belongs to the company middleware
/ */

exports.checkIdsExistAtTheCompany = async (req, res, next) => {
  const listAbilities = req.data;
  const {ids} = req.body
  try {
    if (req.status) {
      return next();
    }
    const existingAbilityIds = listAbilities.map( ability  => ability._id.toString());
    console.log(listAbilities, "existingAbilityIds")
    const allExist = ids.every( id  => existingAbilityIds.includes(id));
    if (!allExist) {
      req.status = 404;
      req.errorMessage = 'id.exist.failed';
      return next();
    }

    // ----- pass to next middleware
    next();
  } catch (error) {
    next();
  }
};
