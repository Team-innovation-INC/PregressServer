/*
 /  ---- check company exists middleware
/ */

exports.checkUserCompanies = async (req, res, next) => {
  // ----- get using information from request
  const { user } = req;
  try {
    // ----- check user status
    if (user.company) {
      return res.status(400).send({ message: 'you have a company belongs to' });
    }
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
