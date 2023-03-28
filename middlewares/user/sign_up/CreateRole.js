const Role = require("../../../model/user/Role");

exports.createRole = async (req, res, next) => {
    try {
      const role = new Role({})
      req.role = role
      role.save()
      next();
    } catch (error) {
      return res.status(500).send('Internal server error');
    }
  };