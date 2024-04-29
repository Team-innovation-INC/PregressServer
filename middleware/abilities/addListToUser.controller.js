/*
 /  ---- add valid list to the user abilities list middleware
/ */

exports.addListIdToUser = async (req, res, next) => {
  const {ids} = req.body
  const {status} = req
  try {
    if (status) {
     return next();
    }
    req.data = ids;
    req.status = 200;
    // ----- pass to next middleware
    next();
  } catch (error) {
    next();
  }
};
