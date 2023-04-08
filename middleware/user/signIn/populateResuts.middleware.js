const { populateExtra } = require("../../../utility/others");

exports.populateUser = async (req, res, next) => {
    const user = req.user
  try {
    let newUser= {}
    console.log('user',user)
    newUser.contact   = populateExtra(user.contact._doc)
    newUser.role      = populateExtra(user.role._doc)
    newUser.password  = populateExtra(user.password._doc)
    newUser.createdAt = user.creation_date
    req.user = newUser
    next();
  } catch (error) {
    console.log("error", error)
    return res.status(500).send('Internal server error');
  }
};